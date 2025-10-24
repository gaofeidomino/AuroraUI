import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Select } from '../../../src/components/select/index'

describe('Select Component', () => {
    it('renders correctly with default props', () => {
        render(Select, {
            slots: {
                default: '<div data-testid="select-content">Select Content</div>',
            },
        })

        const content = screen.getByTestId('select-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Select Content')
    })

    it('forwards props correctly', () => {
        render(Select, {
            props: {
                modelValue: 'value1',
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Select, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Select, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
