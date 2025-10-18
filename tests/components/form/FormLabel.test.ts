import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FormLabel } from '../../../src/components/form'

// Mock useFormField
vi.mock('../../../src/components/form/useFormField', () => ({
    useFormField: () => ({
        formItemId: 'test-form-item',
    }),
}))

describe('FormLabel Component', () => {
    it('renders correctly with default props', () => {
        render(FormLabel, {
            slots: {
                default: 'Form label text',
            },
        })

        const label = screen.getByText('Form label text')
        expect(label).toBeInTheDocument()
        expect(label.closest('[data-slot="form-label"]')).toBeDefined()
    })

    it('renders with slot content', () => {
        render(FormLabel, {
            slots: {
                default: '<span>Label with HTML</span>',
            },
        })

        const label = screen.getByText('Label with HTML')
        expect(label).toBeInTheDocument()
    })

    it('applies correct for attribute', () => {
        render(FormLabel, {
            slots: {
                default: 'Label with for attribute',
            },
        })

        const label = screen.getByText('Label with for attribute')
        const labelElement = label.closest('[data-slot="form-label"]')
        expect(labelElement).toHaveAttribute('for', 'test-form-item')
    })

    it('applies base styling classes', () => {
        render(FormLabel, {
            slots: {
                default: 'Styled label',
            },
        })

        const label = screen.getByText('Styled label')
        const labelElement = label.closest('[data-slot="form-label"]')
        expect(labelElement).toHaveClass('text-sm', 'leading-none', 'font-medium')
    })

    it('applies custom class names', () => {
        render(FormLabel, {
            props: {
                class: 'custom-label-class',
            },
            slots: {
                default: 'Label with custom class',
            },
        })

        const label = screen.getByText('Label with custom class')
        const labelElement = label.closest('[data-slot="form-label"]')
        expect(labelElement).toHaveClass('custom-label-class')
    })

    it('renders as label element', () => {
        render(FormLabel, {
            slots: {
                default: 'Label element',
            },
        })

        const label = screen.getByText('Label element')
        const labelElement = label.closest('[data-slot="form-label"]')
        expect(labelElement?.tagName.toLowerCase()).toBe('label')
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { FormLabel },
            template: `
                <FormLabel>
                    <div>
                        <strong>Field Name</strong>
                        <span class="text-red-500">*</span>
                    </div>
                </FormLabel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Field Name')).toBeInTheDocument()
        expect(screen.getByText('*')).toBeInTheDocument()
    })

    it('maintains accessibility attributes', () => {
        render(FormLabel, {
            slots: {
                default: 'Accessible label',
            },
        })

        const label = screen.getByText('Accessible label')
        const labelElement = label.closest('[data-slot="form-label"]')
        expect(labelElement).toHaveAttribute('for', 'test-form-item')
    })

    it('renders with required indicator', () => {
        const TestComponent = {
            components: { FormLabel },
            template: `
                <FormLabel>
                    Email Address
                    <span class="text-red-500 ml-1">*</span>
                </FormLabel>
            `,
        }

        render(TestComponent)

        const label = screen.getByText('Email Address')
        expect(label).toBeInTheDocument()
        expect(screen.getByText('*')).toBeInTheDocument()
    })

    it('combines variant and custom classes correctly', () => {
        render(FormLabel, {
            props: {
                class: 'my-custom-class',
            },
            slots: {
                default: 'Combined classes label',
            },
        })

        const label = screen.getByText('Combined classes label')
        const labelElement = label.closest('[data-slot="form-label"]')
        expect(labelElement).toHaveClass('text-sm', 'leading-none', 'font-medium', 'my-custom-class')
    })
})
