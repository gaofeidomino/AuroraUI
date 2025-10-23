import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TableCell } from '../../../src/components/table/index'

describe('TableCell Component', () => {
    it('renders correctly with default props', () => {
        render(TableCell, {
            slots: {
                default: 'Cell Content',
            },
        })

        const tableCell = document.querySelector('[data-slot="table-cell"]')
        expect(tableCell).toBeInTheDocument()
        expect(tableCell).toHaveAttribute('data-slot', 'table-cell')
    })

    it('renders with slot content', () => {
        render(TableCell, {
            slots: {
                default: '<span data-testid="cell-content">Cell Content</span>',
            },
        })

        const cellContent = screen.getByTestId('cell-content')
        expect(cellContent).toBeInTheDocument()
        expect(cellContent).toHaveTextContent('Cell Content')
    })
})
