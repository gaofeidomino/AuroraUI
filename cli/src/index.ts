#!/usr/bin/env node

import { Command } from 'commander'
import { add } from './commands/add.js'
import { init } from './commands/init.js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'))
const version = packageJson.version

const program = new Command()

program.name('aurora-ui').description('AuroraUI CLI - Add components to your project').version(version)

program
    .command('add')
    .description('Add a component to your project')
    .argument('<component>', 'Component name (e.g., button, card, input)')
    .option('-d, --dir <dir>', 'Target directory for components', 'src/components/ui')
    .option('-y, --yes', 'Skip confirmation prompts')
    .action(async (component, options) => {
        await add(component, options)
    })

program
    .command('init')
    .description('Initialize AuroraUI in your project')
    .option('-d, --dir <dir>', 'Target directory for components', 'src/components/ui')
    .option('-y, --yes', 'Skip confirmation prompts')
    .action(async (options) => {
        await init(options)
    })

program.parse()
