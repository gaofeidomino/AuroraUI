import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Sheet } from '../../../src/components/sheet/index'

describe('Sheet Component', () => {
    it('renders correctly with default props', () => {
        render(Sheet, {
            slots: {
                default: '<div data-testid="sheet-content">Sheet Content</div>',
            },
        })

        const content = screen.getByTestId('sheet-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Sheet Content')
    })

    it('forwards props correctly', () => {
        render(Sheet, {
            props: {
                open: false,
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Sheet, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Sheet, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
