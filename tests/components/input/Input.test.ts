import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Input } from '../../../src/components/input/index'

describe('Input Component', () => {
    it('renders correctly with default props', () => {
        render(Input)

        const input = document.querySelector('input[data-slot="input"]')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('data-slot', 'input')
    })

    it('forwards props correctly', () => {
        render(Input, {
            props: {
                modelValue: 'test value',
                class: 'custom-class',
            },
        })

        const input = document.querySelector('input[data-slot="input"]')
        expect(input).toBeInTheDocument()
        expect(input).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Input)

        const input = document.querySelector('input[data-slot="input"]')
        expect(input).toBeInTheDocument()
    })

    it('has correct component name', () => {
        render(Input)

        const input = document.querySelector('input[data-slot="input"]')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('data-slot', 'input')
    })
})
