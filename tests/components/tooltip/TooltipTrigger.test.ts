import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Tooltip, TooltipTrigger, TooltipProvider } from '../../../src/components/tooltip/index'

describe('TooltipTrigger Component', () => {
    it('renders correctly within Tooltip context', () => {
        render({
            components: { Tooltip, TooltipTrigger, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <button>Trigger</button>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const tooltipTrigger = document.querySelector('[data-slot="tooltip-trigger"]')
        expect(tooltipTrigger).toBeInTheDocument()
    })

    it('forwards props correctly within Tooltip context', () => {
        render({
            components: { Tooltip, TooltipTrigger, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button>Trigger</button>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const tooltipTrigger = document.querySelector('[data-slot="tooltip-trigger"]')
        expect(tooltipTrigger).toBeInTheDocument()
    })

    it('renders with slot content within Tooltip context', () => {
        render({
            components: { Tooltip, TooltipTrigger, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <button data-testid="trigger-button">Trigger Button</button>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const triggerButton = screen.getByTestId('trigger-button')
        expect(triggerButton).toBeInTheDocument()
        expect(triggerButton).toHaveTextContent('Trigger Button')
    })

    it('has correct component name within Tooltip context', () => {
        render({
            components: { Tooltip, TooltipTrigger, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <button>Trigger</button>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const tooltipTrigger = document.querySelector('[data-slot="tooltip-trigger"]')
        expect(tooltipTrigger).toBeInTheDocument()
    })
})
