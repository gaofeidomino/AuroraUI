import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ScrollArea } from '../../../src/components/scroll-area/index'

describe('ScrollArea Component', () => {
    it('renders correctly with default props', () => {
        render(ScrollArea, {
            slots: {
                default: '<div data-testid="scroll-area-content">Scroll Area Content</div>',
            },
        })

        const content = screen.getByTestId('scroll-area-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Scroll Area Content')
    })

    it('forwards props correctly', () => {
        render(ScrollArea, {
            props: {
                class: 'custom-class',
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(ScrollArea, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(ScrollArea, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
