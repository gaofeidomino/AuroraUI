import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TableBody } from '../../../src/components/table/index'

describe('TableBody Component', () => {
    it('renders correctly with default props', () => {
        render(TableBody, {
            slots: {
                default: '<tr><td>Body Content</td></tr>',
            },
        })

        const tableBody = document.querySelector('[data-slot="table-body"]')
        expect(tableBody).toBeInTheDocument()
        expect(tableBody).toHaveAttribute('data-slot', 'table-body')
    })

    it('renders with slot content', () => {
        render(TableBody, {
            slots: {
                default: '<tr data-testid="table-row"><td>Row Content</td></tr>',
            },
        })

        const tableRow = screen.getByTestId('table-row')
        expect(tableRow).toBeInTheDocument()
        expect(tableRow).toHaveTextContent('Row Content')
    })
})
