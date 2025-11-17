import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { FieldError } from '../../../src/components/field/index'

describe('FieldError Component', () => {
    it('renders correctly with slot content', () => {
        render(FieldError, {
            slots: {
                default: 'Error message',
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        expect(error).toHaveTextContent('Error message')
        expect(error).toHaveAttribute('role', 'alert')
    })

    it('renders with string error', () => {
        render(FieldError, {
            props: {
                errors: ['This is an error'],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        expect(error).toHaveTextContent('This is an error')
    })

    it('renders with object error', () => {
        render(FieldError, {
            props: {
                errors: [{ message: 'This is an error message' }],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        expect(error).toHaveTextContent('This is an error message')
    })

    it('renders multiple errors as list', () => {
        render(FieldError, {
            props: {
                errors: ['Error 1', 'Error 2', 'Error 3'],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        
        const list = error?.querySelector('ul')
        expect(list).toBeInTheDocument()
        expect(list).toHaveClass('ml-4', 'flex', 'list-disc', 'flex-col', 'gap-1')
        
        const items = list?.querySelectorAll('li')
        expect(items).toHaveLength(3)
        expect(items?.[0]).toHaveTextContent('Error 1')
        expect(items?.[1]).toHaveTextContent('Error 2')
        expect(items?.[2]).toHaveTextContent('Error 3')
    })

    it('renders multiple object errors as list', () => {
        render(FieldError, {
            props: {
                errors: [
                    { message: 'Error 1' },
                    { message: 'Error 2' },
                    { message: 'Error 3' },
                ],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        
        const list = error?.querySelector('ul')
        expect(list).toBeInTheDocument()
        
        const items = list?.querySelectorAll('li')
        expect(items).toHaveLength(3)
        expect(items?.[0]).toHaveTextContent('Error 1')
        expect(items?.[1]).toHaveTextContent('Error 2')
        expect(items?.[2]).toHaveTextContent('Error 3')
    })

    it('removes duplicate errors', () => {
        render(FieldError, {
            props: {
                errors: ['Error 1', 'Error 1', 'Error 2'],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        
        const list = error?.querySelector('ul')
        const items = list?.querySelectorAll('li')
        expect(items).toHaveLength(2)
    })

    it('filters out undefined errors', () => {
        render(FieldError, {
            props: {
                errors: ['Error 1', undefined, 'Error 2', undefined],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toBeInTheDocument()
        
        const list = error?.querySelector('ul')
        const items = list?.querySelectorAll('li')
        expect(items).toHaveLength(2)
    })

    it('does not render when no errors and no slot', () => {
        const { container } = render(FieldError, {
            props: {
                errors: [],
            },
        })

        const error = container.querySelector('[data-slot="field-error"]')
        expect(error).not.toBeInTheDocument()
    })

    it('does not render when errors is undefined and no slot', () => {
        const { container } = render(FieldError)

        const error = container.querySelector('[data-slot="field-error"]')
        expect(error).not.toBeInTheDocument()
    })

    it('applies custom class names', () => {
        render(FieldError, {
            props: {
                errors: ['Error message'],
                class: 'custom-error-class',
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toHaveClass('custom-error-class')
    })

    it('has correct base classes', () => {
        render(FieldError, {
            props: {
                errors: ['Error message'],
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toHaveClass('text-destructive', 'text-sm', 'font-normal')
    })

    it('prioritizes slot over errors prop', () => {
        render(FieldError, {
            props: {
                errors: ['Error from prop'],
            },
            slots: {
                default: 'Error from slot',
            },
        })

        const error = document.querySelector('[data-slot="field-error"]')
        expect(error).toHaveTextContent('Error from slot')
    })
})

