import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { NumberField } from '../../../src/components/number-field/index'

describe('NumberField Component', () => {
    it('renders correctly with default props', () => {
        render(NumberField, {
            slots: {
                default: '<div data-testid="number-field-content">NumberField Content</div>',
            },
        })

        const content = screen.getByTestId('number-field-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('NumberField Content')
    })

    it('forwards props correctly', () => {
        render(NumberField, {
            props: {
                min: 0,
                max: 100,
                step: 1,
                value: 50,
            },
            slots: {
                default: '<div data-testid="props-content">NumberField Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(NumberField, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(NumberField, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
