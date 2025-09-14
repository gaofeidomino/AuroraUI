import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { BreadcrumbItem } from '../../../src/components/breadcrumb/index'

describe('BreadcrumbItem Component', () => {
    it('renders correctly with default props', () => {
        render(BreadcrumbItem, {
            slots: {
                default: '<span>Breadcrumb Item</span>',
            },
        })

        const breadcrumbItem = document.querySelector('[data-slot="breadcrumb-item"]')
        expect(breadcrumbItem).toBeInTheDocument()
        expect(breadcrumbItem).toHaveAttribute('data-slot', 'breadcrumb-item')
        expect(breadcrumbItem?.tagName).toBe('LI')
    })

    it('applies default classes correctly', () => {
        render(BreadcrumbItem, {
            slots: {
                default: '<span>Breadcrumb Item</span>',
            },
        })

        const breadcrumbItem = document.querySelector('[data-slot="breadcrumb-item"]')
        expect(breadcrumbItem).toHaveClass('inline-flex')
        expect(breadcrumbItem).toHaveClass('items-center')
        expect(breadcrumbItem).toHaveClass('gap-1.5')
    })

    it('applies custom class correctly', () => {
        render(BreadcrumbItem, {
            props: {
                class: 'custom-item-class',
            },
            slots: {
                default: '<span>Breadcrumb Item</span>',
            },
        })

        const breadcrumbItem = document.querySelector('[data-slot="breadcrumb-item"]')
        expect(breadcrumbItem).toHaveClass('custom-item-class')
    })

    it('renders slot content correctly', () => {
        render(BreadcrumbItem, {
            slots: {
                default: '<span data-testid="item-content">Breadcrumb Item</span>',
            },
        })

        expect(screen.getByTestId('item-content')).toBeInTheDocument()
        expect(screen.getByTestId('item-content')).toHaveTextContent('Breadcrumb Item')
    })
})
