import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { BreadcrumbEllipsis } from '../../../src/components/breadcrumb/index'

describe('BreadcrumbEllipsis Component', () => {
    it('renders correctly with default props', () => {
        render(BreadcrumbEllipsis)

        const breadcrumbEllipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]')
        expect(breadcrumbEllipsis).toBeInTheDocument()
        expect(breadcrumbEllipsis).toHaveAttribute('data-slot', 'breadcrumb-ellipsis')
        expect(breadcrumbEllipsis?.tagName).toBe('SPAN')
    })

    it('applies default classes correctly', () => {
        render(BreadcrumbEllipsis)

        const breadcrumbEllipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]')
        expect(breadcrumbEllipsis).toHaveClass('flex')
        expect(breadcrumbEllipsis).toHaveClass('size-9')
        expect(breadcrumbEllipsis).toHaveClass('items-center')
        expect(breadcrumbEllipsis).toHaveClass('justify-center')
    })

    it('applies custom class correctly', () => {
        render(BreadcrumbEllipsis, {
            props: {
                class: 'custom-ellipsis-class',
            },
        })

        const breadcrumbEllipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]')
        expect(breadcrumbEllipsis).toHaveClass('custom-ellipsis-class')
    })

    it('renders default MoreHorizontal icon when no slot content', () => {
        render(BreadcrumbEllipsis)

        const breadcrumbEllipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]')
        const svg = breadcrumbEllipsis?.querySelector('svg')
        expect(svg).toBeInTheDocument()
        expect(svg).toHaveClass('size-4')
    })

    it('renders custom slot content when provided', () => {
        render(BreadcrumbEllipsis, {
            slots: {
                default: '<span data-testid="custom-ellipsis">...</span>',
            },
        })

        expect(screen.getByTestId('custom-ellipsis')).toBeInTheDocument()
        expect(screen.getByTestId('custom-ellipsis')).toHaveTextContent('...')
    })

    it('has correct accessibility attributes', () => {
        render(BreadcrumbEllipsis)

        const breadcrumbEllipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]')
        expect(breadcrumbEllipsis).toHaveAttribute('role', 'presentation')
        expect(breadcrumbEllipsis).toHaveAttribute('aria-hidden', 'true')
    })

    it('includes screen reader text for accessibility', () => {
        render(BreadcrumbEllipsis)

        const screenReaderText = document.querySelector('.sr-only')
        expect(screenReaderText).toBeInTheDocument()
        expect(screenReaderText).toHaveTextContent('More')
    })
})
