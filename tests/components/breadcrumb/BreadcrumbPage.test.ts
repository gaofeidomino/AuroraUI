import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { BreadcrumbPage } from '../../../src/components/breadcrumb/index'

describe('BreadcrumbPage Component', () => {
    it('renders correctly with default props', () => {
        render(BreadcrumbPage, {
            slots: {
                default: 'Current Page',
            },
        })

        const breadcrumbPage = document.querySelector('[data-slot="breadcrumb-page"]')
        expect(breadcrumbPage).toBeInTheDocument()
        expect(breadcrumbPage).toHaveAttribute('data-slot', 'breadcrumb-page')
        expect(breadcrumbPage?.tagName).toBe('SPAN')
    })

    it('applies default classes correctly', () => {
        render(BreadcrumbPage, {
            slots: {
                default: 'Current Page',
            },
        })

        const breadcrumbPage = document.querySelector('[data-slot="breadcrumb-page"]')
        expect(breadcrumbPage).toHaveClass('text-foreground')
        expect(breadcrumbPage).toHaveClass('font-normal')
    })

    it('applies custom class correctly', () => {
        render(BreadcrumbPage, {
            props: {
                class: 'custom-page-class',
            },
            slots: {
                default: 'Current Page',
            },
        })

        const breadcrumbPage = document.querySelector('[data-slot="breadcrumb-page"]')
        expect(breadcrumbPage).toHaveClass('custom-page-class')
    })

    it('renders slot content correctly', () => {
        render(BreadcrumbPage, {
            slots: {
                default: '<span data-testid="page-content">Current Page</span>',
            },
        })

        expect(screen.getByTestId('page-content')).toBeInTheDocument()
        expect(screen.getByTestId('page-content')).toHaveTextContent('Current Page')
    })

    it('has correct accessibility attributes', () => {
        render(BreadcrumbPage, {
            slots: {
                default: 'Current Page',
            },
        })

        const breadcrumbPage = document.querySelector('[data-slot="breadcrumb-page"]')
        expect(breadcrumbPage).toHaveAttribute('role', 'link')
        expect(breadcrumbPage).toHaveAttribute('aria-disabled', 'true')
        expect(breadcrumbPage).toHaveAttribute('aria-current', 'page')
    })
})
