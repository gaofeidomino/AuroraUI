import fs from 'fs'
import path from 'path'

export type PackageManager = 'pnpm' | 'npm' | 'yarn'

export async function getPackageManager(): Promise<PackageManager> {
    const cwd = process.cwd()
    
    // Check for lock files
    if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
        return 'pnpm'
    }
    if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
        return 'yarn'
    }
    if (fs.existsSync(path.join(cwd, 'package-lock.json'))) {
        return 'npm'
    }
    
    // Default to npm
    return 'npm'
}

