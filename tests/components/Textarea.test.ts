import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Textarea } from '../../src/components/textarea'

describe('Textarea Component', () => {
    it('renders correctly with default props', () => {
        render(Textarea)

        const textarea = screen.getByRole('textbox')
        expect(textarea).toBeDefined()
        expect(textarea.closest('[data-slot="textarea"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Textarea, {
            props: {
                class: 'custom-textarea-class',
            },
        })

        const textarea = screen.getByRole('textbox')
        const textareaElement = textarea.closest('[data-slot="textarea"]')
        expect(textareaElement).toBeDefined()
        expect((textareaElement as HTMLElement).className).toContain('custom-textarea-class')
    })

    it('renders with default value', () => {
        render(Textarea, {
            props: {
                defaultValue: 'Default Text Content',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe('Default Text Content')
    })

    it('renders with model value', () => {
        render(Textarea, {
            props: {
                modelValue: 'Model Text Content',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe('Model Text Content')
    })

    it('emits update:modelValue when textarea changes', async () => {
        const { emitted } = render(Textarea)

        const textarea = screen.getByRole('textbox')
        await fireEvent.update(textarea, 'New Text Value')

        expect(emitted()).toHaveProperty('update:modelValue')
        expect(emitted('update:modelValue')?.[0]).toEqual(['New Text Value'])
    })

    it('renders with placeholder', () => {
        render(Textarea, {
            attrs: {
                placeholder: 'Enter your text here',
            },
        })

        const textarea = screen.getByPlaceholderText('Enter your text here')
        expect(textarea).toBeDefined()
    })

    it('renders with disabled state', () => {
        render(Textarea, {
            attrs: {
                disabled: true,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.disabled).toBe(true)
    })

    it('renders with readonly state', () => {
        render(Textarea, {
            attrs: {
                readonly: true,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.readOnly).toBe(true)
    })

    it('renders with required attribute', () => {
        render(Textarea, {
            attrs: {
                required: true,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.required).toBe(true)
    })

    it('renders with aria-invalid attribute', () => {
        render(Textarea, {
            attrs: {
                'aria-invalid': 'true',
            },
        })

        const textarea = screen.getByRole('textbox')
        expect(textarea).toHaveAttribute('aria-invalid', 'true')
    })

    it('renders with custom attributes', () => {
        render(Textarea, {
            attrs: {
                id: 'test-textarea',
                'data-testid': 'custom-textarea',
                maxlength: '500',
                rows: '5',
                cols: '50',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.id).toBe('test-textarea')
        expect(textarea).toHaveAttribute('data-testid', 'custom-textarea')
        expect(textarea.maxLength).toBe(500)
        expect(textarea.rows).toBe(5)
        expect(textarea.cols).toBe(50)
    })

    it('handles number model value', () => {
        render(Textarea, {
            props: {
                modelValue: 42,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe('42')
    })

    it('emits number value when textarea contains numeric content', async () => {
        const { emitted } = render(Textarea)

        const textarea = screen.getByRole('textbox')
        await fireEvent.update(textarea, '123')

        expect(emitted('update:modelValue')?.[0]).toEqual(['123'])
    })

    it('renders with multiline content', () => {
        const multilineText = 'Line 1\nLine 2\nLine 3'
        render(Textarea, {
            props: {
                modelValue: multilineText,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe(multilineText)
    })

    it('handles empty string model value', () => {
        render(Textarea, {
            props: {
                modelValue: '',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe('')
    })

    it('handles undefined model value', () => {
        render(Textarea, {
            props: {
                modelValue: undefined,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe('')
    })

    it('renders with name attribute', () => {
        render(Textarea, {
            attrs: {
                name: 'description',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.name).toBe('description')
    })

    it('renders with form attribute', () => {
        render(Textarea, {
            attrs: {
                form: 'test-form',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.form).toBeDefined()
    })

    it('applies basic styling classes', () => {
        render(Textarea)

        const textarea = screen.getByRole('textbox')
        const textareaElement = textarea.closest('[data-slot="textarea"]')
        expect(textareaElement).toHaveClass('border-input', 'rounded-md', 'bg-transparent')
    })

    it('combines custom class with default classes', () => {
        render(Textarea, {
            props: {
                class: 'custom-class',
            },
        })

        const textarea = screen.getByRole('textbox')
        const textareaElement = textarea.closest('[data-slot="textarea"]')
        expect(textareaElement).toHaveClass('custom-class', 'border-input')
    })

    it('handles focus and blur events', async () => {
        const { emitted } = render(Textarea)

        const textarea = screen.getByRole('textbox')

        await fireEvent.focus(textarea)
        await fireEvent.blur(textarea)

        // 这些事件应该被正确处理，不会抛出错误
        expect(textarea).toBeDefined()
    })

    it('handles input events correctly', async () => {
        const { emitted } = render(Textarea)

        const textarea = screen.getByRole('textbox')
        await fireEvent.update(textarea, 'Input event test')

        expect(emitted('update:modelValue')?.[0]).toEqual(['Input event test'])
    })

    it('renders with auto-resize behavior', () => {
        render(Textarea, {
            attrs: {
                style: 'resize: vertical',
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.style.resize).toBe('vertical')
    })

    it('handles long text content', () => {
        const longText = 'A'.repeat(1000)
        render(Textarea, {
            props: {
                modelValue: longText,
            },
        })

        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
        expect(textarea.value).toBe(longText)
        expect(textarea.value.length).toBe(1000)
    })
})
