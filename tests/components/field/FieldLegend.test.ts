import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldLegend } from '../../../src/components/field/index'

describe('FieldLegend Component', () => {
    it('renders correctly with default props', () => {
        render(FieldLegend, {
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend).toBeInTheDocument()
        expect(legend).toHaveTextContent('Field Legend')
    })

    it('applies default variant', () => {
        render(FieldLegend, {
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend).toBeInTheDocument()
        // Default variant is undefined, so data-variant attribute is not set
        expect(legend).not.toHaveAttribute('data-variant')
    })

    it('applies legend variant', () => {
        render(FieldLegend, {
            props: {
                variant: 'legend',
            },
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend).toHaveAttribute('data-variant', 'legend')
        expect(legend).toHaveClass('data-[variant=legend]:text-base')
    })

    it('applies label variant', () => {
        render(FieldLegend, {
            props: {
                variant: 'label',
            },
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend).toHaveAttribute('data-variant', 'label')
        expect(legend).toHaveClass('data-[variant=label]:text-sm')
    })

    it('applies custom class names', () => {
        render(FieldLegend, {
            props: {
                class: 'custom-legend-class',
            },
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend).toHaveClass('custom-legend-class')
    })

    it('renders with slot content', () => {
        render(FieldLegend, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct base classes', () => {
        render(FieldLegend, {
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend).toHaveClass('mb-3', 'font-medium')
    })

    it('renders as legend element', () => {
        render(FieldLegend, {
            slots: {
                default: 'Field Legend',
            },
        })

        const legend = document.querySelector('[data-slot="field-legend"]')
        expect(legend?.tagName.toLowerCase()).toBe('legend')
    })
})

