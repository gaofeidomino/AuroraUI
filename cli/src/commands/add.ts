import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { registry } from '../registry.js'
import { resolveConfig } from '../utils/resolve-config.js'
import { getPackageManager } from '../utils/get-package-manager.js'
import { transformComponent } from '../utils/transform-component.js'
import { installDependencies } from '../utils/install-dependencies.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Get the project root (AuroraUI root, not cli root)
const PROJECT_ROOT = path.resolve(__dirname, '../../../')

export async function add(componentName: string, options: { dir?: string; yes?: boolean; overwrite?: boolean }) {
    // Resolve component tree with dependencies
    const componentsToInstall = resolveComponentTree(componentName.toLowerCase())
    
    if (componentsToInstall.length === 0) {
        console.error(`❌ Component "${componentName}" not found.`)
        console.log('\nAvailable components:')
        registry.forEach((c) => {
            console.log(`  - ${c.name}`)
        })
        process.exit(1)
    }

    const config = await resolveConfig()
    const targetDir = options.dir || config.componentsDir || 'src/components/ui'
    const targetPath = path.resolve(process.cwd(), targetDir)

    // Create target directory if it doesn't exist
    await fs.mkdir(targetPath, { recursive: true })

    // Collect all dependencies (npm packages) from all components
    const allDependencies = new Set<string>()
    const installedComponents: string[] = []

    // Install components in topological order
    for (const component of componentsToInstall) {
        const componentTargetPath = path.join(targetPath, component.name)
        
        // Check if component already exists
        const componentExists = await checkComponentExists(componentTargetPath)
        
        if (componentExists && !options.overwrite) {
            console.log(`\n⚠️  Component "${component.name}" already exists. Skipping...`)
            console.log(`   Use --overwrite to overwrite existing files.`)
            // Still collect dependencies even if component exists
            if (component.dependencies) {
                component.dependencies.forEach(dep => allDependencies.add(dep))
            }
            continue
        }

        // Copy component files
        const componentDir = path.join(PROJECT_ROOT, 'src/components', component.name)
        const files = await getComponentFiles(componentDir)

        if (files.length === 0) {
            console.error(`❌ Component files not found for "${component.name}"`)
            continue
        }

        // Create component subdirectory
        await fs.mkdir(componentTargetPath, { recursive: true })

        if (installedComponents.length === 0) {
            console.log(`\n📦 Adding component: ${component.name}`)
        } else {
            console.log(`\n📦 Adding dependency: ${component.name}`)
        }
        console.log(`📁 Target directory: ${componentTargetPath}\n`)

        // Copy and transform files
        for (const file of files) {
            const relativePath = path.relative(componentDir, file)
            const targetFile = path.join(componentTargetPath, relativePath)
            const targetFileDir = path.dirname(targetFile)

            await fs.mkdir(targetFileDir, { recursive: true })

            // Check if file exists
            let fileExists = false
            try {
                await fs.access(targetFile)
                fileExists = true
            } catch {
                // File doesn't exist
            }

            if (fileExists && !options.overwrite) {
                console.log(`  ⚠️  ${relativePath} already exists. Skipping...`)
                continue
            }

            let content = await fs.readFile(file, 'utf-8')

            // Transform component code (handle path aliases, etc.)
            content = transformComponent(content, {
                from: targetFile, // Use target file path for relative path calculation
                to: componentTargetPath,
            })

            await fs.writeFile(targetFile, content, 'utf-8')
            console.log(`  ✓ ${relativePath}`)
        }

        // Collect dependencies
        if (component.dependencies) {
            component.dependencies.forEach(dep => allDependencies.add(dep))
        }

        installedComponents.push(component.name)
    }

    // Copy utils if needed
    const utilsPath = path.join(PROJECT_ROOT, 'src/utils/cn.ts')
    const targetUtilsPath = path.join(process.cwd(), 'src/utils/cn.ts')

    try {
        await fs.access(targetUtilsPath)
    } catch {
        // Utils file doesn't exist, copy it
        await fs.mkdir(path.dirname(targetUtilsPath), { recursive: true })
        let utilsContent = await fs.readFile(utilsPath, 'utf-8')
        // Transform path aliases but keep dependency imports as-is
        utilsContent = transformComponent(utilsContent, {
            from: targetUtilsPath,
            to: path.dirname(targetUtilsPath),
        })
        await fs.writeFile(targetUtilsPath, utilsContent, 'utf-8')
        console.log(`  ✓ src/utils/cn.ts`)
    }

    // Install component dependencies
    if (allDependencies.size > 0) {
        const packageJsonPath = path.join(process.cwd(), 'package.json')
        let existingDeps: Record<string, string> = {}

        try {
            const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
            existingDeps = {
                ...(packageJson.dependencies || {}),
                ...(packageJson.devDependencies || {}),
            }
        } catch {
            // package.json doesn't exist or is invalid
        }

        // Filter out already installed dependencies
        const missingDeps = Array.from(allDependencies).filter((dep) => {
            // Handle dependencies with version specifiers (e.g., "package@version" or "@scope/package@version")
            // For scoped packages, we need to handle @scope/package@version format
            let depName: string
            if (dep.startsWith('@')) {
                // Scoped package: @scope/package or @scope/package@version
                // Split by '@' and check: ['', 'scope/package'] or ['', 'scope/package', 'version']
                const parts = dep.split('@')
                if (parts.length === 2) {
                    // @scope/package (no version)
                    depName = dep
                } else {
                    // @scope/package@version - join first two parts (empty string + scope/package)
                    depName = `@${parts[1]}`
                }
            } else {
                // Regular package: package or package@version
                // Split by '@' and take first part
                depName = dep.split('@')[0]
            }
            return !(depName in existingDeps)
        })

        if (missingDeps.length > 0) {
            console.log(`\n📦 Installing dependencies: ${missingDeps.join(', ')}`)
            const packageManager = await getPackageManager()
            await installDependencies(missingDeps, packageManager, options.yes || false)
        }
    }

    if (installedComponents.length > 0) {
        const mainComponent = componentsToInstall[0]
        console.log(`\n✅ Component "${mainComponent.name}" added successfully!`)
        if (installedComponents.length > 1) {
            console.log(`   Also installed dependencies: ${installedComponents.slice(1).join(', ')}`)
        }
        console.log(`\nUsage:`)
        const importPath = `${targetDir}/${mainComponent.name}`
        console.log(`  import { ${mainComponent.exports?.[0] || mainComponent.name} } from '${importPath}'`)
    } else {
        console.log(`\n⚠️  Component "${componentName}" already exists. No changes made.`)
    }
}

/**
 * Resolve component tree with dependencies using topological sort
 * Returns components in installation order (dependencies first)
 */
function resolveComponentTree(componentName: string): typeof registry {
    const componentMap = new Map<string, typeof registry[0]>()
    registry.forEach(c => componentMap.set(c.name, c))

    const visited = new Set<string>()
    const visiting = new Set<string>()
    const result: typeof registry = []
    const componentSet = new Set<string>()

    function visit(name: string): void {
        if (visiting.has(name)) {
            // Circular dependency detected
            console.warn(`⚠️  Circular dependency detected involving "${name}"`)
            return
        }
        if (visited.has(name)) {
            return
        }

        const component = componentMap.get(name)
        if (!component) {
            return
        }

        visiting.add(name)

        // Visit dependencies first
        if (component.registryDependencies) {
            for (const dep of component.registryDependencies) {
                visit(dep)
            }
        }

        visiting.delete(name)
        visited.add(name)

        // Add to result if not already added (deduplication)
        if (!componentSet.has(name)) {
            result.push(component)
            componentSet.add(name)
        }
    }

    visit(componentName)
    return result
}

/**
 * Check if component directory exists and has files
 */
async function checkComponentExists(componentPath: string): Promise<boolean> {
    try {
        const files = await getComponentFiles(componentPath)
        return files.length > 0
    } catch {
        return false
    }
}

async function getComponentFiles(dir: string): Promise<string[]> {
    const files: string[] = []

    try {
        const entries = await fs.readdir(dir, { withFileTypes: true })

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name)

            if (entry.isDirectory()) {
                // Skip node_modules and other ignored directories
                if (['node_modules', '.git', 'dist'].includes(entry.name)) {
                    continue
                }
                const subFiles = await getComponentFiles(fullPath)
                files.push(...subFiles)
            } else if (entry.isFile()) {
                // Only copy .vue, .ts, .tsx files
                if (/\.(vue|ts|tsx)$/.test(entry.name)) {
                    files.push(fullPath)
                }
            }
        }
    } catch (error) {
        // Directory doesn't exist
    }

    return files
}
