import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldLabel } from '../../../src/components/field/index'

describe('FieldLabel Component', () => {
    it('renders correctly with default props', () => {
        render(FieldLabel, {
            slots: {
                default: 'Field Label',
            },
        })

        const label = document.querySelector('[data-slot="field-label"]')
        expect(label).toBeInTheDocument()
        expect(label).toHaveTextContent('Field Label')
    })

    it('applies custom class names', () => {
        render(FieldLabel, {
            props: {
                class: 'custom-label-class',
            },
            slots: {
                default: 'Field Label',
            },
        })

        const label = document.querySelector('[data-slot="field-label"]')
        expect(label).toHaveClass('custom-label-class')
    })

    it('renders with slot content', () => {
        render(FieldLabel, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldLabel, {
            slots: {
                default: 'Field Label',
            },
        })

        const label = document.querySelector('[data-slot="field-label"]')
        expect(label).toHaveClass('group/field-label', 'peer/field-label', 'flex', 'w-fit', 'gap-2', 'leading-snug')
    })

    it('renders as label element', () => {
        render(FieldLabel, {
            slots: {
                default: 'Field Label',
            },
        })

        const label = document.querySelector('[data-slot="field-label"]')
        expect(label?.tagName.toLowerCase()).toBe('label')
    })
})

