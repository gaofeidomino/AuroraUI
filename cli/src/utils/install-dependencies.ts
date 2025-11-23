import { exec } from 'child_process'
import { promisify } from 'util'
import type { PackageManager } from './get-package-manager'

const execAsync = promisify(exec)

export async function installDependencies(dependencies: string[], packageManager: PackageManager, skipConfirm: boolean = false): Promise<void> {
    if (dependencies.length === 0) {
        return
    }

    // Dependencies can be in format "package" or "package@version"
    const deps = dependencies.join(' ')
    let command: string

    switch (packageManager) {
        case 'pnpm':
            command = `pnpm add ${deps}`
            break
        case 'yarn':
            command = `yarn add ${deps}`
            break
        case 'npm':
        default:
            command = `npm install ${deps}`
            break
    }

    console.log(`\nRunning: ${command}`)

    try {
        const { stdout, stderr } = await execAsync(command, {
            cwd: process.cwd(),
        })

        if (stdout) {
            console.log(stdout)
        }

        if (stderr && !stderr.includes('warning')) {
            console.error(`\n⚠️  Warning: ${stderr}`)
        }
    } catch (error: any) {
        console.error(`\n❌ Failed to install dependencies: ${error.message}`)
        console.log(`\nPlease install manually:`)
        console.log(`  ${command}`)
    }
}
