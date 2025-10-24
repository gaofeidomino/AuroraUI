import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Textarea } from '../../../src/components/textarea/index'

describe('Textarea Component', () => {
    it('renders correctly with default props', () => {
        render(Textarea)

        const textarea = document.querySelector('textarea[data-slot="textarea"]')
        expect(textarea).toBeInTheDocument()
        expect(textarea).toHaveAttribute('data-slot', 'textarea')
    })

    it('forwards props correctly', () => {
        render(Textarea, {
            props: {
                modelValue: 'test value',
                class: 'custom-class',
            },
        })

        const textarea = document.querySelector('textarea[data-slot="textarea"]')
        expect(textarea).toBeInTheDocument()
        expect(textarea).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Textarea)

        const textarea = document.querySelector('textarea[data-slot="textarea"]')
        expect(textarea).toBeInTheDocument()
    })

    it('has correct component name', () => {
        render(Textarea)

        const textarea = document.querySelector('textarea[data-slot="textarea"]')
        expect(textarea).toBeInTheDocument()
        expect(textarea).toHaveAttribute('data-slot', 'textarea')
    })
})
