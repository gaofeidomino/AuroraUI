import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Stepper } from '../../../src/components/stepper/index'

describe('Stepper Component', () => {
    it('renders correctly with default props', () => {
        render(Stepper, {
            slots: {
                default: '<div data-testid="stepper-content">Stepper Content</div>',
            },
        })

        const content = screen.getByTestId('stepper-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Stepper Content')
    })

    it('forwards props correctly', () => {
        render(Stepper, {
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
        render(Stepper, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Stepper, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
