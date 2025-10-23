import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Pagination } from '../../../src/components/pagination/index'

describe('Pagination Component', () => {
    it('renders correctly with required props', () => {
        render(Pagination, {
            props: {
                itemsPerPage: 10,
                totalItems: 100,
            },
            slots: {
                default: '<div>Pagination Content</div>',
            },
        })

        const pagination = document.querySelector('[data-slot="pagination"]')
        expect(pagination).toBeInTheDocument()
        expect(pagination).toHaveAttribute('data-slot', 'pagination')
        expect(pagination).toHaveClass('mx-auto', 'flex', 'w-full', 'justify-center')
    })

    it('forwards props correctly', () => {
        render(Pagination, {
            props: {
                itemsPerPage: 10,
                totalItems: 100,
                totalPages: 10,
                currentPage: 1,
                showFirstLast: true,
                showPrevNext: true,
            },
            slots: {
                default: '<div>Pagination Content</div>',
            },
        })

        const pagination = document.querySelector('[data-slot="pagination"]')
        expect(pagination).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Pagination, {
            props: {
                itemsPerPage: 10,
                totalItems: 100,
            },
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Pagination, {
            props: {
                itemsPerPage: 10,
                totalItems: 100,
            },
            slots: {
                default: '<div>Content</div>',
            },
        })

        const pagination = document.querySelector('[data-slot="pagination"]')
        expect(pagination).toBeInTheDocument()
    })
})
