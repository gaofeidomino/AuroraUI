import fs from 'fs/promises'
import path from 'path'

export interface Config {
    componentsDir?: string
    utilsDir?: string
}

export async function resolveConfig(): Promise<Config> {
    const configPath = path.join(process.cwd(), 'components.json')
    
    try {
        const content = await fs.readFile(configPath, 'utf-8')
        const config = JSON.parse(content)
        return {
            componentsDir: config.aliases?.components || 'src/components/ui',
            utilsDir: config.aliases?.utils || 'src/utils',
        }
    } catch {
        // Config file doesn't exist, return defaults
        return {
            componentsDir: 'src/components/ui',
            utilsDir: 'src/utils',
        }
    }
}

