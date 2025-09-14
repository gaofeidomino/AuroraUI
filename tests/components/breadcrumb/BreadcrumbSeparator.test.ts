import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { BreadcrumbSeparator } from '../../../src/components/breadcrumb/index'

describe('BreadcrumbSeparator Component', () => {
    it('renders correctly with default props', () => {
        render(BreadcrumbSeparator)

        const breadcrumbSeparator = document.querySelector('[data-slot="breadcrumb-separator"]')
        expect(breadcrumbSeparator).toBeInTheDocument()
        expect(breadcrumbSeparator).toHaveAttribute('data-slot', 'breadcrumb-separator')
        expect(breadcrumbSeparator?.tagName).toBe('LI')
    })

    it('applies default classes correctly', () => {
        render(BreadcrumbSeparator)

        const breadcrumbSeparator = document.querySelector('[data-slot="breadcrumb-separator"]')
        expect(breadcrumbSeparator).toHaveClass('[&>svg]:size-3.5')
    })

    it('applies custom class correctly', () => {
        render(BreadcrumbSeparator, {
            props: {
                class: 'custom-separator-class',
            },
        })

        const breadcrumbSeparator = document.querySelector('[data-slot="breadcrumb-separator"]')
        expect(breadcrumbSeparator).toHaveClass('custom-separator-class')
    })

    it('renders default ChevronRight icon when no slot content', () => {
        render(BreadcrumbSeparator)

        const breadcrumbSeparator = document.querySelector('[data-slot="breadcrumb-separator"]')
        const svg = breadcrumbSeparator?.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })

    it('renders custom slot content when provided', () => {
        render(BreadcrumbSeparator, {
            slots: {
                default: '<span data-testid="custom-separator">/</span>',
            },
        })

        expect(screen.getByTestId('custom-separator')).toBeInTheDocument()
        expect(screen.getByTestId('custom-separator')).toHaveTextContent('/')
    })

    it('has correct accessibility attributes', () => {
        render(BreadcrumbSeparator)

        const breadcrumbSeparator = document.querySelector('[data-slot="breadcrumb-separator"]')
        expect(breadcrumbSeparator).toHaveAttribute('role', 'presentation')
        expect(breadcrumbSeparator).toHaveAttribute('aria-hidden', 'true')
    })
})
