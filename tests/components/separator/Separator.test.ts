import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Separator } from '../../../src/components/separator/index'

describe('Separator Component', () => {
    it('renders correctly with default props', () => {
        render(Separator)

        const separator = document.querySelector('[data-slot="separator-root"]')
        expect(separator).toBeInTheDocument()
        expect(separator).toHaveAttribute('data-slot', 'separator-root')
    })

    it('forwards props correctly', () => {
        render(Separator, {
            props: {
                orientation: 'vertical',
                class: 'custom-class',
            },
        })

        const separator = document.querySelector('[data-slot="separator-root"]')
        expect(separator).toBeInTheDocument()
        expect(separator).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Separator)

        const separator = document.querySelector('[data-slot="separator-root"]')
        expect(separator).toBeInTheDocument()
    })

    it('has correct component name', () => {
        render(Separator)

        const separator = document.querySelector('[data-slot="separator-root"]')
        expect(separator).toBeInTheDocument()
        expect(separator).toHaveAttribute('data-slot', 'separator-root')
    })
})
