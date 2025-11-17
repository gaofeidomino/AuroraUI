import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { Field } from '../../../src/components/field/index'

describe('Field Component', () => {
    it('renders correctly with default props', () => {
        render(Field, {
            slots: {
                default: 'Field Content',
            },
        })

        const field = document.querySelector('[data-slot="field"]')
        expect(field).toBeInTheDocument()
        expect(field).toHaveTextContent('Field Content')
        expect(field).toHaveAttribute('role', 'group')
    })

    it('applies default orientation variant', () => {
        render(Field, {
            slots: {
                default: 'Field Content',
            },
        })

        const field = document.querySelector('[data-slot="field"]')
        expect(field).toBeInTheDocument()
        // Default orientation is 'vertical' but attribute is only set when explicitly provided
        // The class will still apply the vertical variant styles
        expect(field).toHaveClass('flex-col')
    })

    it('applies horizontal orientation variant', () => {
        render(Field, {
            props: {
                orientation: 'horizontal',
            },
            slots: {
                default: 'Field Content',
            },
        })

        const field = document.querySelector('[data-slot="field"]')
        expect(field).toHaveAttribute('data-orientation', 'horizontal')
    })

    it('applies responsive orientation variant', () => {
        render(Field, {
            props: {
                orientation: 'responsive',
            },
            slots: {
                default: 'Field Content',
            },
        })

        const field = document.querySelector('[data-slot="field"]')
        expect(field).toHaveAttribute('data-orientation', 'responsive')
    })

    it('applies custom class names', () => {
        render(Field, {
            props: {
                class: 'custom-field-class',
            },
            slots: {
                default: 'Field Content',
            },
        })

        const field = document.querySelector('[data-slot="field"]')
        expect(field).toHaveClass('custom-field-class')
    })

    it('renders with slot content', () => {
        render(Field, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(Field, {
            slots: {
                default: 'Field Content',
            },
        })

        const field = document.querySelector('[data-slot="field"]')
        expect(field).toHaveClass('group/field', 'flex', 'w-full', 'gap-3')
    })
})

