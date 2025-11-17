import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { resolveConfig } from '../utils/resolve-config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Get the project root (AuroraUI root, not cli root)
const PROJECT_ROOT = path.resolve(__dirname, '../../../')

export async function init(options: { dir?: string; yes?: boolean }) {
    console.log('\n🚀 Initializing AuroraUI...\n')

    const config = await resolveConfig()
    const componentsDir = options.dir || config.componentsDir || 'src/components/ui'

    // Create components.json config file
    const configPath = path.join(process.cwd(), 'components.json')
    
    try {
        await fs.access(configPath)
        if (!options.yes) {
            console.log('⚠️  components.json already exists. Skipping...')
            return
        }
    } catch {
        // File doesn't exist, create it
        const configContent = JSON.stringify({
            $schema: 'https://aurora-ui.com/schema.json',
            style: 'default',
            rsc: false,
            tsx: false,
            tailwind: {
                config: 'tailwind.config.js',
                css: 'src/style.css',
                baseColor: 'slate',
                cssVariables: true,
            },
            aliases: {
                components: componentsDir,
                utils: 'src/utils',
            },
        }, null, 2)

        await fs.writeFile(configPath, configContent, 'utf-8')
        console.log(`✅ Created components.json`)
    }

    // Copy utils file
    const utilsPath = path.join(PROJECT_ROOT, 'src/utils/cn.ts')
    const targetUtilsPath = path.join(process.cwd(), 'src/utils/cn.ts')
    
    try {
        await fs.access(targetUtilsPath)
        console.log(`⚠️  src/utils/cn.ts already exists. Skipping...`)
    } catch {
        await fs.mkdir(path.dirname(targetUtilsPath), { recursive: true })
        const utilsContent = await fs.readFile(utilsPath, 'utf-8')
        await fs.writeFile(targetUtilsPath, utilsContent, 'utf-8')
        console.log(`✅ Created src/utils/cn.ts`)
    }

    console.log(`\n✅ AuroraUI initialized successfully!`)
    console.log(`\nNext steps:`)
    console.log(`  pnpm dlx aurora-ui add button`)
    console.log(`  pnpm dlx aurora-ui add card`)
}

