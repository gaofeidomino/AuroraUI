import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldGroup } from '../../../src/components/field/index'

describe('FieldGroup Component', () => {
    it('renders correctly with default props', () => {
        render(FieldGroup, {
            slots: {
                default: 'Field Group Content',
            },
        })

        const group = document.querySelector('[data-slot="field-group"]')
        expect(group).toBeInTheDocument()
        expect(group).toHaveTextContent('Field Group Content')
    })

    it('applies custom class names', () => {
        render(FieldGroup, {
            props: {
                class: 'custom-group-class',
            },
            slots: {
                default: 'Field Group Content',
            },
        })

        const group = document.querySelector('[data-slot="field-group"]')
        expect(group).toHaveClass('custom-group-class')
    })

    it('renders with slot content', () => {
        render(FieldGroup, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldGroup, {
            slots: {
                default: 'Field Group Content',
            },
        })

        const group = document.querySelector('[data-slot="field-group"]')
        expect(group).toHaveClass('group/field-group', '@container/field-group', 'flex', 'w-full', 'flex-col', 'gap-7')
    })

    it('renders as div element', () => {
        render(FieldGroup, {
            slots: {
                default: 'Field Group Content',
            },
        })

        const group = document.querySelector('[data-slot="field-group"]')
        expect(group?.tagName.toLowerCase()).toBe('div')
    })
})

