import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldDescription } from '../../../src/components/field/index'

describe('FieldDescription Component', () => {
    it('renders correctly with default props', () => {
        render(FieldDescription, {
            slots: {
                default: 'Field Description',
            },
        })

        const description = document.querySelector('[data-slot="field-description"]')
        expect(description).toBeInTheDocument()
        expect(description).toHaveTextContent('Field Description')
    })

    it('applies custom class names', () => {
        render(FieldDescription, {
            props: {
                class: 'custom-description-class',
            },
            slots: {
                default: 'Field Description',
            },
        })

        const description = document.querySelector('[data-slot="field-description"]')
        expect(description).toHaveClass('custom-description-class')
    })

    it('renders with slot content', () => {
        render(FieldDescription, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldDescription, {
            slots: {
                default: 'Field Description',
            },
        })

        const description = document.querySelector('[data-slot="field-description"]')
        expect(description).toHaveClass('text-muted-foreground', 'text-sm', 'leading-normal', 'font-normal')
    })

    it('renders as p element', () => {
        render(FieldDescription, {
            slots: {
                default: 'Field Description',
            },
        })

        const description = document.querySelector('[data-slot="field-description"]')
        expect(description?.tagName.toLowerCase()).toBe('p')
    })

    it('renders with link styling classes', () => {
        render(FieldDescription, {
            slots: {
                default: 'Field Description',
            },
        })

        const description = document.querySelector('[data-slot="field-description"]')
        expect(description).toHaveClass('[&>a:hover]:text-primary', '[&>a]:underline', '[&>a]:underline-offset-4')
    })
})

