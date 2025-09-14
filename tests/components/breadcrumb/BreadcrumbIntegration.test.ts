import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '../../../src/components/breadcrumb/index'

describe('Breadcrumb Integration Tests', () => {
    it('renders a complete breadcrumb navigation correctly', () => {
        render({
            components: {
                Breadcrumb,
                BreadcrumbList,
                BreadcrumbItem,
                BreadcrumbLink,
                BreadcrumbPage,
                BreadcrumbSeparator,
            },
            template: `
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Current Product</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            `,
        })

        // Check main breadcrumb container
        const breadcrumb = document.querySelector('[data-slot="breadcrumb"]')
        expect(breadcrumb).toBeInTheDocument()
        expect(breadcrumb).toHaveAttribute('aria-label', 'breadcrumb')

        // Check breadcrumb list
        const breadcrumbList = document.querySelector('[data-slot="breadcrumb-list"]')
        expect(breadcrumbList).toBeInTheDocument()

        // Check breadcrumb items
        const breadcrumbItems = document.querySelectorAll('[data-slot="breadcrumb-item"]')
        expect(breadcrumbItems).toHaveLength(3)

        // Check breadcrumb links
        const breadcrumbLinks = document.querySelectorAll('[data-slot="breadcrumb-link"]')
        expect(breadcrumbLinks).toHaveLength(2)
        expect(breadcrumbLinks[0]).toHaveAttribute('href', '/')
        expect(breadcrumbLinks[1]).toHaveAttribute('href', '/products')

        // Check breadcrumb page (current page)
        const breadcrumbPage = document.querySelector('[data-slot="breadcrumb-page"]')
        expect(breadcrumbPage).toBeInTheDocument()
        expect(breadcrumbPage).toHaveAttribute('aria-current', 'page')

        // Check separators
        const separators = document.querySelectorAll('[data-slot="breadcrumb-separator"]')
        expect(separators).toHaveLength(2)

        // Check text content
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Products')).toBeInTheDocument()
        expect(screen.getByText('Current Product')).toBeInTheDocument()
    })

    it('renders breadcrumb with custom separators', () => {
        render({
            components: {
                Breadcrumb,
                BreadcrumbList,
                BreadcrumbItem,
                BreadcrumbLink,
                BreadcrumbPage,
                BreadcrumbSeparator,
            },
            template: `
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Current</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            `,
        })

        const separator = document.querySelector('[data-slot="breadcrumb-separator"]')
        expect(separator).toHaveTextContent('/')
    })

    it('applies custom classes to breadcrumb components', () => {
        render({
            components: {
                Breadcrumb,
                BreadcrumbList,
                BreadcrumbItem,
                BreadcrumbLink,
                BreadcrumbPage,
                BreadcrumbSeparator,
            },
            template: `
                <Breadcrumb class="custom-breadcrumb">
                    <BreadcrumbList class="custom-list">
                        <BreadcrumbItem class="custom-item">
                            <BreadcrumbLink href="/" class="custom-link">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator class="custom-separator" />
                        <BreadcrumbItem class="custom-item">
                            <BreadcrumbPage class="custom-page">Current</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            `,
        })

        expect(document.querySelector('[data-slot="breadcrumb"]')).toHaveClass('custom-breadcrumb')
        expect(document.querySelector('[data-slot="breadcrumb-list"]')).toHaveClass('custom-list')
        expect(document.querySelectorAll('[data-slot="breadcrumb-item"]')[0]).toHaveClass('custom-item')
        expect(document.querySelector('[data-slot="breadcrumb-link"]')).toHaveClass('custom-link')
        expect(document.querySelector('[data-slot="breadcrumb-page"]')).toHaveClass('custom-page')
        expect(document.querySelector('[data-slot="breadcrumb-separator"]')).toHaveClass('custom-separator')
    })

    it('handles breadcrumb with ellipsis for long paths', () => {
        render({
            components: {
                Breadcrumb,
                BreadcrumbList,
                BreadcrumbItem,
                BreadcrumbLink,
                BreadcrumbPage,
                BreadcrumbSeparator,
                BreadcrumbEllipsis,
            },
            template: `
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Current Page</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            `,
        })

        const ellipsis = document.querySelector('[data-slot="breadcrumb-ellipsis"]')
        expect(ellipsis).toBeInTheDocument()
        expect(ellipsis).toHaveAttribute('aria-hidden', 'true')
        expect(ellipsis).toHaveAttribute('role', 'presentation')
    })
})
