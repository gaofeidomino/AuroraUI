import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FormDescription } from '../../../src/components/form'

// Mock useFormField
vi.mock('../../../src/components/form/useFormField', () => ({
    useFormField: () => ({
        formDescriptionId: 'test-form-description',
    }),
}))

describe('FormDescription Component', () => {
    it('renders correctly with default props', () => {
        render(FormDescription, {
            slots: {
                default: 'Form description text',
            },
        })

        const description = screen.getByText('Form description text')
        expect(description).toBeInTheDocument()
        expect(description.closest('[data-slot="form-description"]')).toBeDefined()
    })

    it('renders with slot content', () => {
        render(FormDescription, {
            slots: {
                default: '<span>Description with HTML</span>',
            },
        })

        const description = screen.getByText('Description with HTML')
        expect(description).toBeInTheDocument()
    })

    it('applies correct id attribute', () => {
        render(FormDescription, {
            slots: {
                default: 'Description with ID',
            },
        })

        const description = screen.getByText('Description with ID')
        const descriptionElement = description.closest('[data-slot="form-description"]')
        expect(descriptionElement).toHaveAttribute('id', 'test-form-description')
    })

    it('applies base styling classes', () => {
        render(FormDescription, {
            slots: {
                default: 'Styled description',
            },
        })

        const description = screen.getByText('Styled description')
        const descriptionElement = description.closest('[data-slot="form-description"]')
        expect(descriptionElement).toHaveClass('text-sm', 'text-muted-foreground')
    })

    it('applies custom class names', () => {
        render(FormDescription, {
            props: {
                class: 'custom-description-class',
            },
            slots: {
                default: 'Description with custom class',
            },
        })

        const description = screen.getByText('Description with custom class')
        const descriptionElement = description.closest('[data-slot="form-description"]')
        expect(descriptionElement).toHaveClass('custom-description-class')
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { FormDescription },
            template: `
                <FormDescription>
                    <div>
                        <strong>Important:</strong>
                        <span>Please fill out this field correctly.</span>
                    </div>
                </FormDescription>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Important:')).toBeInTheDocument()
        expect(screen.getByText('Please fill out this field correctly.')).toBeInTheDocument()
    })

    it('maintains accessibility attributes', () => {
        render(FormDescription, {
            slots: {
                default: 'Accessible description',
            },
        })

        const description = screen.getByText('Accessible description')
        const descriptionElement = description.closest('[data-slot="form-description"]')
        expect(descriptionElement).toHaveAttribute('id', 'test-form-description')
    })

    it('renders with multiple text nodes', () => {
        const TestComponent = {
            components: { FormDescription },
            template: `
                <FormDescription>
                    First part of description.
                    Second part of description.
                </FormDescription>
            `,
        }

        render(TestComponent)

        const description = screen.getByText('First part of description. Second part of description.')
        expect(description).toBeInTheDocument()
    })

    it('combines variant and custom classes correctly', () => {
        render(FormDescription, {
            props: {
                class: 'my-custom-class',
            },
            slots: {
                default: 'Combined classes description',
            },
        })

        const description = screen.getByText('Combined classes description')
        const descriptionElement = description.closest('[data-slot="form-description"]')
        expect(descriptionElement).toHaveClass('text-sm', 'text-muted-foreground', 'my-custom-class')
    })
})
