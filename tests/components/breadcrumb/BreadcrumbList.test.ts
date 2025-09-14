import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { BreadcrumbList } from '../../../src/components/breadcrumb/index'

describe('BreadcrumbList Component', () => {
    it('renders correctly with default props', () => {
        render(BreadcrumbList, {
            slots: {
                default: '<li>Breadcrumb Item</li>',
            },
        })

        const breadcrumbList = document.querySelector('[data-slot="breadcrumb-list"]')
        expect(breadcrumbList).toBeInTheDocument()
        expect(breadcrumbList).toHaveAttribute('data-slot', 'breadcrumb-list')
        expect(breadcrumbList?.tagName).toBe('OL')
    })

    it('applies default classes correctly', () => {
        render(BreadcrumbList, {
            slots: {
                default: '<li>Breadcrumb Item</li>',
            },
        })

        const breadcrumbList = document.querySelector('[data-slot="breadcrumb-list"]')
        expect(breadcrumbList).toHaveClass('text-muted-foreground')
        expect(breadcrumbList).toHaveClass('flex')
        expect(breadcrumbList).toHaveClass('flex-wrap')
        expect(breadcrumbList).toHaveClass('items-center')
        expect(breadcrumbList).toHaveClass('gap-1.5')
        expect(breadcrumbList).toHaveClass('text-sm')
        expect(breadcrumbList).toHaveClass('break-words')
        expect(breadcrumbList).toHaveClass('sm:gap-2.5')
    })

    it('applies custom class correctly', () => {
        render(BreadcrumbList, {
            props: {
                class: 'custom-list-class',
            },
            slots: {
                default: '<li>Breadcrumb Item</li>',
            },
        })

        const breadcrumbList = document.querySelector('[data-slot="breadcrumb-list"]')
        expect(breadcrumbList).toHaveClass('custom-list-class')
    })

    it('renders slot content correctly', () => {
        render(BreadcrumbList, {
            slots: {
                default: '<li data-testid="breadcrumb-item">Breadcrumb Item</li>',
            },
        })

        expect(screen.getByTestId('breadcrumb-item')).toBeInTheDocument()
        expect(screen.getByTestId('breadcrumb-item')).toHaveTextContent('Breadcrumb Item')
    })
})
