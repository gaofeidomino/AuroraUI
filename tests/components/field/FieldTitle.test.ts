import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldTitle } from '../../../src/components/field/index'

describe('FieldTitle Component', () => {
    it('renders correctly with default props', () => {
        render(FieldTitle, {
            slots: {
                default: 'Field Title',
            },
        })

        const title = document.querySelector('[data-slot="field-label"]')
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent('Field Title')
    })

    it('applies custom class names', () => {
        render(FieldTitle, {
            props: {
                class: 'custom-title-class',
            },
            slots: {
                default: 'Field Title',
            },
        })

        const title = document.querySelector('[data-slot="field-label"]')
        expect(title).toHaveClass('custom-title-class')
    })

    it('renders with slot content', () => {
        render(FieldTitle, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldTitle, {
            slots: {
                default: 'Field Title',
            },
        })

        const title = document.querySelector('[data-slot="field-label"]')
        expect(title).toHaveClass('flex', 'w-fit', 'items-center', 'gap-2', 'text-sm', 'leading-snug', 'font-medium')
    })

    it('renders as div element', () => {
        render(FieldTitle, {
            slots: {
                default: 'Field Title',
            },
        })

        const title = document.querySelector('[data-slot="field-label"]')
        expect(title?.tagName.toLowerCase()).toBe('div')
    })
})

