import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Pagination, PaginationItem } from '../../../src/components/pagination/index'

describe('PaginationItem Component', () => {
    it('renders correctly within Pagination context', () => {
        render({
            components: { Pagination, PaginationItem },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationItem :value="1">
                        1
                    </PaginationItem>
                </Pagination>
            `,
        })

        const paginationItem = document.querySelector('[data-slot="pagination-item"]')
        expect(paginationItem).toBeInTheDocument()
        expect(paginationItem).toHaveAttribute('data-slot', 'pagination-item')
    })

    it('forwards props correctly within Pagination context', () => {
        render({
            components: { Pagination, PaginationItem },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationItem :value="2">
                        2
                    </PaginationItem>
                </Pagination>
            `,
        })

        const paginationItem = document.querySelector('[data-slot="pagination-item"]')
        expect(paginationItem).toBeInTheDocument()
    })

    it('renders with slot content within Pagination context', () => {
        render({
            components: { Pagination, PaginationItem },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationItem :value="1">
                        <div data-testid="slot-content">Slot Content</div>
                    </PaginationItem>
                </Pagination>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name within Pagination context', () => {
        render({
            components: { Pagination, PaginationItem },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationItem :value="1">
                        1
                    </PaginationItem>
                </Pagination>
            `,
        })

        const paginationItem = document.querySelector('[data-slot="pagination-item"]')
        expect(paginationItem).toBeInTheDocument()
    })
})
