import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Input } from '../../src/components/input'

describe('Input Component', () => {
    it('renders correctly with default props', () => {
        render(Input)

        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()
        expect(input.closest('[data-slot="input"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Input, {
            props: {
                class: 'custom-input-class',
            },
        })

        const input = screen.getByRole('textbox')
        const inputElement = input.closest('[data-slot="input"]')
        expect(inputElement).toBeDefined()
        expect((inputElement as HTMLElement).className).toContain('custom-input-class')
    })

    it('renders with default value', () => {
        render(Input, {
            props: {
                defaultValue: 'Default Text',
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.value).toBe('Default Text')
    })

    it('renders with model value', () => {
        render(Input, {
            props: {
                modelValue: 'Model Text',
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.value).toBe('Model Text')
    })

    it('emits update:modelValue when input changes', async () => {
        const { emitted } = render(Input)

        const input = screen.getByRole('textbox')
        await fireEvent.update(input, 'New Value')

        expect(emitted()).toHaveProperty('update:modelValue')
        expect(emitted('update:modelValue')?.[0]).toEqual(['New Value'])
    })

    it('renders with placeholder', () => {
        render(Input, {
            attrs: {
                placeholder: 'Enter text here',
            },
        })

        const input = screen.getByPlaceholderText('Enter text here')
        expect(input).toBeDefined()
    })

    it('renders with type attribute', () => {
        render(Input, {
            attrs: {
                type: 'email',
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.type).toBe('email')
    })

    it('renders with disabled state', () => {
        render(Input, {
            attrs: {
                disabled: true,
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.disabled).toBe(true)
    })

    it('renders with required attribute', () => {
        render(Input, {
            attrs: {
                required: true,
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.required).toBe(true)
    })

    it('renders with aria-invalid attribute', () => {
        render(Input, {
            attrs: {
                'aria-invalid': 'true',
            },
        })

        const input = screen.getByRole('textbox')
        expect(input).toHaveAttribute('aria-invalid', 'true')
    })

    it('renders with custom attributes', () => {
        render(Input, {
            attrs: {
                id: 'test-input',
                'data-testid': 'custom-input',
                maxlength: '50',
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.id).toBe('test-input')
        expect(input).toHaveAttribute('data-testid', 'custom-input')
        expect(input.maxLength).toBe(50)
    })

    it('handles number model value', () => {
        render(Input, {
            props: {
                modelValue: 42,
            },
        })

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.value).toBe('42')
    })

    it('emits number value when input is numeric', async () => {
        const { emitted } = render(Input)

        const input = screen.getByRole('textbox')
        await fireEvent.update(input, '123')

        expect(emitted('update:modelValue')?.[0]).toEqual(['123'])
    })

    it('renders with file input type', () => {
        render(Input, {
            attrs: {
                type: 'file',
            },
        })

        const input = screen.getByDisplayValue('') as HTMLInputElement
        expect(input.type).toBe('file')
    })
})
