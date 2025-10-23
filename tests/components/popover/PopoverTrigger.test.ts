import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Popover, PopoverTrigger } from '../../../src/components/popover/index'

describe('PopoverTrigger Component', () => {
    it('renders correctly within Popover context', () => {
        render({
            components: { Popover, PopoverTrigger },
            template: `
                <Popover>
                    <PopoverTrigger>
                        <button>Trigger</button>
                    </PopoverTrigger>
                </Popover>
            `,
        })

        const popoverTrigger = document.querySelector('[data-slot="popover-trigger"]')
        expect(popoverTrigger).toBeInTheDocument()
        expect(popoverTrigger).toHaveAttribute('data-slot', 'popover-trigger')
    })

    it('forwards props correctly within Popover context', () => {
        render({
            components: { Popover, PopoverTrigger },
            template: `
                <Popover>
                    <PopoverTrigger asChild>
                        <button>Trigger</button>
                    </PopoverTrigger>
                </Popover>
            `,
        })

        const popoverTrigger = document.querySelector('[data-slot="popover-trigger"]')
        expect(popoverTrigger).toBeInTheDocument()
    })

    it('renders with slot content within Popover context', () => {
        render({
            components: { Popover, PopoverTrigger },
            template: `
                <Popover>
                    <PopoverTrigger>
                        <button data-testid="trigger-button">Trigger Button</button>
                    </PopoverTrigger>
                </Popover>
            `,
        })

        const triggerButton = screen.getByTestId('trigger-button')
        expect(triggerButton).toBeInTheDocument()
        expect(triggerButton).toHaveTextContent('Trigger Button')
    })

    it('has correct component name within Popover context', () => {
        render({
            components: { Popover, PopoverTrigger },
            template: `
                <Popover>
                    <PopoverTrigger>
                        <button>Trigger</button>
                    </PopoverTrigger>
                </Popover>
            `,
        })

        const popoverTrigger = document.querySelector('[data-slot="popover-trigger"]')
        expect(popoverTrigger).toBeInTheDocument()
    })
})
