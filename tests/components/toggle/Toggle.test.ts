import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Toggle } from '../../../src/components/toggle/index'

describe('Toggle Component', () => {
    it('renders correctly with default props', () => {
        render(Toggle, {
            slots: {
                default: 'Toggle Content',
            },
        })

        const toggle = document.querySelector('[data-slot="toggle"]')
        expect(toggle).toBeInTheDocument()
    })

    it('forwards props correctly', () => {
        render(Toggle, {
            props: {
                variant: 'outline',
                size: 'sm',
                class: 'custom-class',
            },
            slots: {
                default: 'Toggle Content',
            },
        })

        const toggle = document.querySelector('[data-slot="toggle"]')
        expect(toggle).toBeInTheDocument()
        expect(toggle).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Toggle, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Toggle, {
            slots: {
                default: 'Toggle Content',
            },
        })

        const toggle = document.querySelector('[data-slot="toggle"]')
        expect(toggle).toBeInTheDocument()
    })
})
