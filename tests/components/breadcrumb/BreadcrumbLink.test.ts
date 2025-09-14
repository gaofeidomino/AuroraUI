import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { BreadcrumbLink } from '../../../src/components/breadcrumb/index'

describe('BreadcrumbLink Component', () => {
    it('renders correctly with default props', () => {
        render(BreadcrumbLink, {
            slots: {
                default: 'Link Text',
            },
        })

        const breadcrumbLink = document.querySelector('[data-slot="breadcrumb-link"]')
        expect(breadcrumbLink).toBeInTheDocument()
        expect(breadcrumbLink).toHaveAttribute('data-slot', 'breadcrumb-link')
        expect(breadcrumbLink?.tagName).toBe('A')
    })

    it('applies default classes correctly', () => {
        render(BreadcrumbLink, {
            slots: {
                default: 'Link Text',
            },
        })

        const breadcrumbLink = document.querySelector('[data-slot="breadcrumb-link"]')
        expect(breadcrumbLink).toHaveClass('hover:text-foreground')
        expect(breadcrumbLink).toHaveClass('transition-colors')
    })

    it('applies custom class correctly', () => {
        render(BreadcrumbLink, {
            props: {
                class: 'custom-link-class',
            },
            slots: {
                default: 'Link Text',
            },
        })

        const breadcrumbLink = document.querySelector('[data-slot="breadcrumb-link"]')
        expect(breadcrumbLink).toHaveClass('custom-link-class')
    })

    it('renders slot content correctly', () => {
        render(BreadcrumbLink, {
            slots: {
                default: '<span data-testid="link-content">Link Text</span>',
            },
        })

        expect(screen.getByTestId('link-content')).toBeInTheDocument()
        expect(screen.getByTestId('link-content')).toHaveTextContent('Link Text')
    })

    it('accepts href prop for navigation', () => {
        render(BreadcrumbLink, {
            props: {
                href: '/home',
            },
            slots: {
                default: 'Home',
            },
        })

        const breadcrumbLink = document.querySelector('[data-slot="breadcrumb-link"]')
        expect(breadcrumbLink).toHaveAttribute('href', '/home')
    })

    it('accepts as prop to change element type', () => {
        render(BreadcrumbLink, {
            props: {
                as: 'button',
            },
            slots: {
                default: 'Button Text',
            },
        })

        const breadcrumbLink = document.querySelector('[data-slot="breadcrumb-link"]')
        expect(breadcrumbLink?.tagName).toBe('BUTTON')
    })
})
