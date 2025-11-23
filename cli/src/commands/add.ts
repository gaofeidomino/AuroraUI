import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { registry } from '../registry.js'
import { resolveConfig } from '../utils/resolve-config.js'
import { getPackageManager } from '../utils/get-package-manager.js'
import { installDependencies } from '../utils/install-dependencies.js'
import { transformComponent } from '../utils/transform-component.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Get the project root (AuroraUI root, not cli root)
const PROJECT_ROOT = path.resolve(__dirname, '../../../')

export async function add(componentName: string, options: { dir?: string; yes?: boolean }) {
    const component = registry.find((c) => c.name === componentName.toLowerCase())

    if (!component) {
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

    // Copy component files
    const componentDir = path.join(PROJECT_ROOT, 'src/components', component.name)
    const files = await getComponentFiles(componentDir)

    if (files.length === 0) {
        console.error(`❌ Component files not found for "${componentName}"`)
        process.exit(1)
    }

    // Create component subdirectory
    const componentTargetPath = path.join(targetPath, component.name)
    await fs.mkdir(componentTargetPath, { recursive: true })

    console.log(`\n📦 Adding component: ${component.name}`)
    console.log(`📁 Target directory: ${componentTargetPath}\n`)

    // Copy and transform files
    for (const file of files) {
        const relativePath = path.relative(componentDir, file)
        const targetFile = path.join(componentTargetPath, relativePath)
        const targetFileDir = path.dirname(targetFile)

        await fs.mkdir(targetFileDir, { recursive: true })

        let content = await fs.readFile(file, 'utf-8')

        // Transform component code (handle path aliases, etc.)
        content = transformComponent(content, {
            from: targetFile, // Use target file path for relative path calculation
            to: componentTargetPath,
        })

        await fs.writeFile(targetFile, content, 'utf-8')
        console.log(`  ✓ ${relativePath}`)
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

    // Install required dependencies
    if (component.dependencies && component.dependencies.length > 0) {
        // Get base dependencies that are needed for cn.ts
        const baseDeps = ['clsx', 'tailwind-merge']
        const allDeps = [...new Set([...component.dependencies, ...baseDeps])]

        // Check which dependencies are already installed
        const packageJsonPath = path.join(process.cwd(), 'package.json')
        let installedDeps: string[] = []
        try {
            const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
            installedDeps = [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.devDependencies || {})]
        } catch {
            // package.json doesn't exist or is invalid
        }

        // Filter out already installed dependencies
        const depsToInstall = allDeps.filter((dep) => !installedDeps.includes(dep))

        if (depsToInstall.length > 0) {
            console.log(`\n📦 Installing dependencies: ${depsToInstall.join(', ')}`)
            const packageManager = await getPackageManager()

            // Read dependency versions from AuroraUI's package.json
            const auroraPackageJsonPath = path.join(PROJECT_ROOT, 'package.json')
            let depVersions: Record<string, string> = {}
            try {
                const auroraPackageJson = JSON.parse(await fs.readFile(auroraPackageJsonPath, 'utf-8'))
                depVersions = { ...auroraPackageJson.dependencies }
            } catch {
                // Fallback: use latest versions
            }

            // Build dependency list with versions for command execution
            const depsWithVersions = depsToInstall.map((dep) => {
                const version = depVersions[dep] || 'latest'
                // Extract version number from "^0.7.1" format or use as-is
                const cleanVersion = version.replace(/^[\^~]/, '')
                return `${dep}@${cleanVersion}`
            })

            // Install dependencies
            await installDependencies(depsWithVersions, packageManager, options.yes || false)
        } else {
            console.log(`\n✅ All required dependencies are already installed.`)
        }
    }

    console.log(`\n✅ Component "${component.name}" added successfully!`)
    console.log(`\nUsage:`)
    const importPath = `${targetDir}/${component.name}`
    console.log(`  import { ${component.exports?.[0] || component.name} } from '${importPath}'`)
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
