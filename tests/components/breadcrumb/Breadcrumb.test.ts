import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Breadcrumb } from '../../../src/components/breadcrumb/index'

describe('Breadcrumb Component', () => {
    it('renders correctly with default props', () => {
        render(Breadcrumb, {
            slots: {
                default: '<div>Breadcrumb Content</div>',
            },
        })

        const breadcrumb = document.querySelector('[data-slot="breadcrumb"]')
        expect(breadcrumb).toBeInTheDocument()
        expect(breadcrumb).toHaveAttribute('data-slot', 'breadcrumb')
        expect(breadcrumb).toHaveAttribute('aria-label', 'breadcrumb')
        expect(breadcrumb?.tagName).toBe('NAV')
    })

    it('applies custom class correctly', () => {
        render(Breadcrumb, {
            props: {
                class: 'custom-breadcrumb-class',
            },
            slots: {
                default: '<div>Breadcrumb Content</div>',
            },
        })

        const breadcrumb = document.querySelector('[data-slot="breadcrumb"]')
        expect(breadcrumb).toHaveClass('custom-breadcrumb-class')
    })

    it('renders slot content correctly', () => {
        render(Breadcrumb, {
            slots: {
                default: '<div data-testid="breadcrumb-content">Breadcrumb Content</div>',
            },
        })

        expect(screen.getByTestId('breadcrumb-content')).toBeInTheDocument()
        expect(screen.getByTestId('breadcrumb-content')).toHaveTextContent('Breadcrumb Content')
    })

    it('has correct accessibility attributes', () => {
        render(Breadcrumb, {
            slots: {
                default: '<div>Breadcrumb Content</div>',
            },
        })

        const breadcrumb = document.querySelector('[data-slot="breadcrumb"]')
        expect(breadcrumb).toHaveAttribute('aria-label', 'breadcrumb')
    })
})
