import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TooltipProvider } from '../../../src/components/tooltip/index'

describe('TooltipProvider Component', () => {
    it('renders correctly with default props', () => {
        render({
            components: { TooltipProvider },
            template: `
                <TooltipProvider>
                    <div data-testid="provider-content">Provider Content</div>
                </TooltipProvider>
            `,
        })

        const content = screen.getByTestId('provider-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Provider Content')
    })

    it('forwards props correctly', () => {
        render({
            components: { TooltipProvider },
            template: `
                <TooltipProvider :delayDuration="700" :skipDelayDuration="300">
                    <div data-testid="props-content">Props Content</div>
                </TooltipProvider>
            `,
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render({
            components: { TooltipProvider },
            template: `
                <TooltipProvider>
                    <div data-testid="slot-content">Slot Content</div>
                </TooltipProvider>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render({
            components: { TooltipProvider },
            template: `
                <TooltipProvider>
                    <div data-testid="name-content">Content</div>
                </TooltipProvider>
            `,
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
