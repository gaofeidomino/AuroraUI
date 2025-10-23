import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Pagination, PaginationContent } from '../../../src/components/pagination/index'

describe('PaginationContent Component', () => {
    it('renders correctly within Pagination context', () => {
        render({
            components: { Pagination, PaginationContent },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationContent>
                        <div>PaginationContent Content</div>
                    </PaginationContent>
                </Pagination>
            `,
        })

        const paginationContent = document.querySelector('[data-slot="pagination-content"]')
        expect(paginationContent).toBeInTheDocument()
        expect(paginationContent).toHaveAttribute('data-slot', 'pagination-content')
    })

    it('forwards props correctly within Pagination context', () => {
        render({
            components: { Pagination, PaginationContent },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationContent class="custom-class">
                        <div>PaginationContent Content</div>
                    </PaginationContent>
                </Pagination>
            `,
        })

        const paginationContent = document.querySelector('[data-slot="pagination-content"]')
        expect(paginationContent).toBeInTheDocument()
    })

    it('renders with slot content within Pagination context', () => {
        render({
            components: { Pagination, PaginationContent },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationContent>
                        <div data-testid="slot-content">Slot Content</div>
                    </PaginationContent>
                </Pagination>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name within Pagination context', () => {
        render({
            components: { Pagination, PaginationContent },
            template: `
                <Pagination :itemsPerPage="10" :totalItems="100">
                    <PaginationContent>
                        <div>Content</div>
                    </PaginationContent>
                </Pagination>
            `,
        })

        const paginationContent = document.querySelector('[data-slot="pagination-content"]')
        expect(paginationContent).toBeInTheDocument()
    })
})
