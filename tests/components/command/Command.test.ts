import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Command } from '../../../src/components/command'

describe('Command Component', () => {
    it('renders correctly with default props', () => {
        render(Command, {
            slots: {
                default: 'Command Content',
            },
        })

        const command = screen.getByText('Command Content')
        expect(command).toBeDefined()
        expect(command.closest('[data-slot="command"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Command, {
            props: {
                class: 'custom-command-class',
            },
            slots: {
                default: 'Custom Class Command',
            },
        })

        const command = screen.getByText('Custom Class Command').closest('[data-slot="command"]')
        expect(command).toBeDefined()
        expect((command as HTMLElement).className).toContain('custom-command-class')
    })

    it('applies correct CSS classes', () => {
        render(Command, {
            slots: {
                default: 'Styled Command',
            },
        })

        const command = screen.getByText('Styled Command').closest('[data-slot="command"]')
        const classList = (command as HTMLElement).className

        expect(classList).toContain('bg-popover')
        expect(classList).toContain('text-popover-foreground')
        expect(classList).toContain('flex')
        expect(classList).toContain('h-full')
        expect(classList).toContain('w-full')
        expect(classList).toContain('flex-col')
        expect(classList).toContain('overflow-hidden')
        expect(classList).toContain('rounded-md')
    })

    it('maintains proper data-slot attribute', () => {
        render(Command, {
            slots: {
                default: 'Test Command',
            },
        })

        const command = screen.getByText('Test Command').closest('[data-slot="command"]')
        expect(command).toBeDefined()
        expect(command?.getAttribute('data-slot')).toBe('command')
    })

    it('passes through props correctly', () => {
        render(Command, {
            props: {
                id: 'test-command',
                'data-testid': 'custom-command',
                modelValue: 'test value',
            },
            slots: {
                default: 'Command with Props',
            },
        })

        const command = screen.getByText('Command with Props').closest('[data-slot="command"]')
        expect(command?.getAttribute('id')).toBe('test-command')
        expect(command?.getAttribute('data-testid')).toBe('custom-command')
    })

    it('renders without content when no slot provided', () => {
        render(Command)

        const command = document.querySelector('[data-slot="command"]')
        expect(command).toBeDefined()
        expect(command?.textContent).toBe('')
    })
})
