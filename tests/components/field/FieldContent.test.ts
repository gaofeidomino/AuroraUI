import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldContent } from '../../../src/components/field/index'

describe('FieldContent Component', () => {
    it('renders correctly with default props', () => {
        render(FieldContent, {
            slots: {
                default: 'Field Content',
            },
        })

        const content = document.querySelector('[data-slot="field-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Field Content')
    })

    it('applies custom class names', () => {
        render(FieldContent, {
            props: {
                class: 'custom-content-class',
            },
            slots: {
                default: 'Field Content',
            },
        })

        const content = document.querySelector('[data-slot="field-content"]')
        expect(content).toHaveClass('custom-content-class')
    })

    it('renders with slot content', () => {
        render(FieldContent, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldContent, {
            slots: {
                default: 'Field Content',
            },
        })

        const content = document.querySelector('[data-slot="field-content"]')
        expect(content).toHaveClass('group/field-content', 'flex', 'flex-1', 'flex-col', 'gap-1.5', 'leading-snug')
    })

    it('renders as div element', () => {
        render(FieldContent, {
            slots: {
                default: 'Field Content',
            },
        })

        const content = document.querySelector('[data-slot="field-content"]')
        expect(content?.tagName.toLowerCase()).toBe('div')
    })
})

