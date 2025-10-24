import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Skeleton } from '../../../src/components/skeleton/index'

describe('Skeleton Component', () => {
    it('renders correctly with default props', () => {
        render(Skeleton)

        const skeleton = document.querySelector('[data-slot="skeleton"]')
        expect(skeleton).toBeInTheDocument()
        expect(skeleton).toHaveAttribute('data-slot', 'skeleton')
    })

    it('forwards props correctly', () => {
        render(Skeleton, {
            props: {
                class: 'custom-class',
            },
        })

        const skeleton = document.querySelector('[data-slot="skeleton"]')
        expect(skeleton).toBeInTheDocument()
        expect(skeleton).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Skeleton)

        const skeleton = document.querySelector('[data-slot="skeleton"]')
        expect(skeleton).toBeInTheDocument()
    })

    it('has correct component name', () => {
        render(Skeleton)

        const skeleton = document.querySelector('[data-slot="skeleton"]')
        expect(skeleton).toBeInTheDocument()
        expect(skeleton).toHaveAttribute('data-slot', 'skeleton')
    })
})
