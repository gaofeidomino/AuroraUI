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
        // Transform dependencies to import from aurora-ui-plus
        utilsContent = transformComponent(utilsContent, {
            from: targetUtilsPath,
            to: path.dirname(targetUtilsPath),
        })
        await fs.writeFile(targetUtilsPath, utilsContent, 'utf-8')
        console.log(`  ✓ src/utils/cn.ts`)
    }

    // Note: Dependencies like reka-ui, clsx, tailwind-merge, etc. are now imported from aurora-ui-plus
    // They are already installed as dependencies of aurora-ui-plus, so no need to install them separately
    // Users should install aurora-ui-plus first: pnpm add aurora-ui-plus

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

