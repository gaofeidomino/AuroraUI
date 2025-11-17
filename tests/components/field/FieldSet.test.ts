import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldSet } from '../../../src/components/field/index'

describe('FieldSet Component', () => {
    it('renders correctly with default props', () => {
        render(FieldSet, {
            slots: {
                default: 'Field Set Content',
            },
        })

        const fieldset = document.querySelector('[data-slot="field-set"]')
        expect(fieldset).toBeInTheDocument()
        expect(fieldset).toHaveTextContent('Field Set Content')
    })

    it('applies custom class names', () => {
        render(FieldSet, {
            props: {
                class: 'custom-fieldset-class',
            },
            slots: {
                default: 'Field Set Content',
            },
        })

        const fieldset = document.querySelector('[data-slot="field-set"]')
        expect(fieldset).toHaveClass('custom-fieldset-class')
    })

    it('renders with slot content', () => {
        render(FieldSet, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldSet, {
            slots: {
                default: 'Field Set Content',
            },
        })

        const fieldset = document.querySelector('[data-slot="field-set"]')
        expect(fieldset).toHaveClass('flex', 'flex-col', 'gap-6')
    })

    it('renders as fieldset element', () => {
        render(FieldSet, {
            slots: {
                default: 'Field Set Content',
            },
        })

        const fieldset = document.querySelector('[data-slot="field-set"]')
        expect(fieldset?.tagName.toLowerCase()).toBe('fieldset')
    })
})

