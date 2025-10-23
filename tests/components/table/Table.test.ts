import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Table } from '../../../src/components/table/index'

describe('Table Component', () => {
    it('renders correctly with default props', () => {
        render(Table, {
            slots: {
                default: '<div>Table Content</div>',
            },
        })

        const table = document.querySelector('[data-slot="table"]')
        expect(table).toBeInTheDocument()
        expect(table).toHaveAttribute('data-slot', 'table')
    })

    it('forwards props correctly', () => {
        render(Table, {
            props: {
                class: 'custom-table',
            },
            slots: {
                default: '<div>Table Content</div>',
            },
        })

        const table = document.querySelector('[data-slot="table"]')
        expect(table).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Table, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Table, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const table = document.querySelector('[data-slot="table"]')
        expect(table).toBeInTheDocument()
    })
})
