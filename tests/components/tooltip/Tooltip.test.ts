import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Tooltip, TooltipProvider } from '../../../src/components/tooltip/index'

describe('Tooltip Component', () => {
    it('renders correctly with default props', () => {
        render({
            components: { Tooltip, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <div data-testid="tooltip-content">Tooltip Content</div>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const content = screen.getByTestId('tooltip-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Tooltip Content')
    })

    it('forwards props correctly', () => {
        render({
            components: { Tooltip, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip :open="false" :delayDuration="700">
                        <div data-testid="props-content">Props Content</div>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render({
            components: { Tooltip, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <div data-testid="slot-content">Slot Content</div>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render({
            components: { Tooltip, TooltipProvider },
            template: `
                <TooltipProvider>
                    <Tooltip>
                        <div data-testid="name-content">Content</div>
                    </Tooltip>
                </TooltipProvider>
            `,
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
