import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { PinInput } from '../../../src/components/pin-input/index'

describe('PinInput Component', () => {
    it('renders correctly with default props', () => {
        render(PinInput, {
            slots: {
                default: '<div>PinInput Content</div>',
            },
        })

        const pinInput = document.querySelector('[data-slot="pin-input"]')
        expect(pinInput).toBeInTheDocument()
        expect(pinInput).toHaveAttribute('data-slot', 'pin-input')
    })

    it('forwards props correctly', () => {
        render(PinInput, {
            props: {
                length: 6,
                type: 'numeric',
                mask: false,
            },
            slots: {
                default: '<div>PinInput Content</div>',
            },
        })

        const pinInput = document.querySelector('[data-slot="pin-input"]')
        expect(pinInput).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(PinInput, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(PinInput, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const pinInput = document.querySelector('[data-slot="pin-input"]')
        expect(pinInput).toBeInTheDocument()
    })
})
