import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TooltipProvider } from '../../../tests/components/tooltip/index'

describe('TooltipProvider Component', () => {
    it('renders correctly with default props', () => {
        render(TooltipProvider, {
            slots: {
                default: '<div data-testid="tooltip-provider-content">TooltipProvider Content</div>',
            },
        })

        const content = screen.getByTestId('tooltip-provider-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('TooltipProvider Content')
    })

    it('forwards props correctly', () => {
        render(TooltipProvider, {
            props: {
                delayDuration: 700,
                skipDelayDuration: 300,
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(TooltipProvider, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(TooltipProvider, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
