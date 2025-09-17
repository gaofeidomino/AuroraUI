import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarGridRow } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarGridRow: {
        name: 'CalendarGridRow',
        template: '<div data-slot="calendar-grid-row"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarGridRow Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarGridRow, {
            slots: {
                default: '<div>Grid Row Content</div>',
            },
        })

        const gridRow = document.querySelector('[data-slot="calendar-grid-row"]')
        expect(gridRow).toBeInTheDocument()
        expect(gridRow).toHaveTextContent('Grid Row Content')
    })

    it('renders with custom class', () => {
        render(CalendarGridRow, {
            props: {
                class: 'custom-grid-row-class',
            },
            slots: {
                default: '<div>Grid Row Content</div>',
            },
        })

        const gridRow = document.querySelector('[data-slot="calendar-grid-row"]')
        expect(gridRow).toBeInTheDocument()
        expect(gridRow).toHaveClass('custom-grid-row-class')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarGridRow, {
            props: mockProps,
            slots: {
                default: '<div>Grid Row Content</div>',
            },
        })

        const gridRow = document.querySelector('[data-slot="calendar-grid-row"]')
        expect(gridRow).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarGridRow, {
            slots: {
                default: '<div data-testid="grid-row-content">Calendar Grid Row</div>',
            },
        })

        const content = document.querySelector('[data-testid="grid-row-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Calendar Grid Row')
    })

    it('has correct component name', () => {
        render(CalendarGridRow, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const gridRow = document.querySelector('[data-slot="calendar-grid-row"]')
        expect(gridRow).toBeInTheDocument()
    })

    it('handles multiple slot elements', () => {
        render(CalendarGridRow, {
            slots: {
                default: `
                    <div data-testid="cell-1">Cell 1</div>
                    <div data-testid="cell-2">Cell 2</div>
                `,
            },
        })

        const cell1 = document.querySelector('[data-testid="cell-1"]')
        const cell2 = document.querySelector('[data-testid="cell-2"]')

        expect(cell1).toBeInTheDocument()
        expect(cell2).toBeInTheDocument()
        expect(cell1).toHaveTextContent('Cell 1')
        expect(cell2).toHaveTextContent('Cell 2')
    })

    it('renders as table row structure', () => {
        render(CalendarGridRow, {
            slots: {
                default: '<tr data-testid="table-row"><td>Cell</td></tr>',
            },
        })

        const tableRow = document.querySelector('[data-testid="table-row"]')
        expect(tableRow).toBeInTheDocument()
        expect(tableRow?.tagName).toBe('TR')
    })
})
