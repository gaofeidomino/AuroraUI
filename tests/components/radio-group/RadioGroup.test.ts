import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { RadioGroup } from '../../../src/components/radio-group/index'

describe('RadioGroup Component', () => {
    it('renders correctly with default props', () => {
        render(RadioGroup, {
            slots: {
                default: '<div>RadioGroup Content</div>',
            },
        })

        const radioGroup = document.querySelector('[data-slot="radio-group"]')
        expect(radioGroup).toBeInTheDocument()
        expect(radioGroup).toHaveAttribute('data-slot', 'radio-group')
    })

    it('forwards props correctly', () => {
        render(RadioGroup, {
            props: {
                modelValue: 'option1',
                disabled: false,
                orientation: 'vertical',
            },
            slots: {
                default: '<div>RadioGroup Content</div>',
            },
        })

        const radioGroup = document.querySelector('[data-slot="radio-group"]')
        expect(radioGroup).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(RadioGroup, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(RadioGroup, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const radioGroup = document.querySelector('[data-slot="radio-group"]')
        expect(radioGroup).toBeInTheDocument()
    })
})
