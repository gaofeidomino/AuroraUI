import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldSeparator } from '../../../src/components/field/index'

describe('FieldSeparator Component', () => {
    it('renders correctly with default props', () => {
        render(FieldSeparator)

        const separator = document.querySelector('[data-slot="field-separator"]')
        expect(separator).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(FieldSeparator, {
            slots: {
                default: 'Separator Text',
            },
        })

        const separator = document.querySelector('[data-slot="field-separator"]')
        expect(separator).toBeInTheDocument()
        
        const content = document.querySelector('[data-slot="field-separator-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Separator Text')
    })

    it('sets data-content attribute when slot is provided', () => {
        render(FieldSeparator, {
            slots: {
                default: 'Separator Text',
            },
        })

        const separator = document.querySelector('[data-slot="field-separator"]')
        expect(separator).toHaveAttribute('data-content', 'true')
    })

    it('sets data-content attribute to false when no slot', () => {
        render(FieldSeparator)

        const separator = document.querySelector('[data-slot="field-separator"]')
        expect(separator).toHaveAttribute('data-content', 'false')
    })

    it('applies custom class names', () => {
        render(FieldSeparator, {
            props: {
                class: 'custom-separator-class',
            },
        })

        const separator = document.querySelector('[data-slot="field-separator"]')
        expect(separator).toHaveClass('custom-separator-class')
    })

    it('has correct base classes', () => {
        render(FieldSeparator)

        const separator = document.querySelector('[data-slot="field-separator"]')
        expect(separator).toHaveClass('relative', '-my-2', 'h-5', 'text-sm')
    })

    it('renders Separator component', () => {
        render(FieldSeparator)

        const separator = document.querySelector('[data-slot="field-separator"]')
        const separatorElement = separator?.querySelector('[data-slot="separator-root"]')
        expect(separatorElement).toBeInTheDocument()
    })

    it('renders separator content with correct classes', () => {
        render(FieldSeparator, {
            slots: {
                default: 'Separator Text',
            },
        })

        const content = document.querySelector('[data-slot="field-separator-content"]')
        expect(content).toHaveClass('bg-background', 'text-muted-foreground', 'relative', 'mx-auto', 'block', 'w-fit', 'px-2')
    })
})

