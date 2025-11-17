#!/usr/bin/env node

// This is a wrapper script that uses tsx to run the TypeScript CLI
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const cliPath = join(__dirname, '../src/index.ts')
const args = process.argv.slice(2)

// Try to find tsx in node_modules
const possibleTsxPaths = [
    join(__dirname, '../../node_modules/.bin/tsx'),
    join(__dirname, '../../../node_modules/.bin/tsx'),
    'tsx', // Try global tsx
]

let tsxPath = 'tsx'
for (const path of possibleTsxPaths) {
    if (existsSync(path) || path === 'tsx') {
        tsxPath = path
        break
    }
}

// Use tsx to run the TypeScript file
const child = spawn(tsxPath, [cliPath, ...args], {
    stdio: 'inherit',
    cwd: process.cwd(),
    shell: true,
})

child.on('exit', (code) => {
    process.exit(code || 0)
})

