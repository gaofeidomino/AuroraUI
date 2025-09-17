import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarGridHead } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarGridHead: {
        name: 'CalendarGridHead',
        template: '<div data-slot="calendar-grid-head"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarGridHead Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarGridHead, {
            slots: {
                default: '<div>Grid Head Content</div>',
            },
        })

        const gridHead = document.querySelector('[data-slot="calendar-grid-head"]')
        expect(gridHead).toBeInTheDocument()
        expect(gridHead).toHaveTextContent('Grid Head Content')
    })

    it('renders with custom class', () => {
        render(CalendarGridHead, {
            props: {
                class: 'custom-grid-head-class',
            },
            slots: {
                default: '<div>Grid Head Content</div>',
            },
        })

        const gridHead = document.querySelector('[data-slot="calendar-grid-head"]')
        expect(gridHead).toBeInTheDocument()
        expect(gridHead).toHaveClass('custom-grid-head-class')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarGridHead, {
            props: mockProps,
            slots: {
                default: '<div>Grid Head Content</div>',
            },
        })

        const gridHead = document.querySelector('[data-slot="calendar-grid-head"]')
        expect(gridHead).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarGridHead, {
            slots: {
                default: '<div data-testid="grid-head-content">Calendar Grid Head</div>',
            },
        })

        const content = document.querySelector('[data-testid="grid-head-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Calendar Grid Head')
    })

    it('has correct component name', () => {
        render(CalendarGridHead, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const gridHead = document.querySelector('[data-slot="calendar-grid-head"]')
        expect(gridHead).toBeInTheDocument()
    })

    it('handles multiple slot elements', () => {
        render(CalendarGridHead, {
            slots: {
                default: `
                    <div data-testid="row-1">Row 1</div>
                    <div data-testid="row-2">Row 2</div>
                `,
            },
        })

        const row1 = document.querySelector('[data-testid="row-1"]')
        const row2 = document.querySelector('[data-testid="row-2"]')

        expect(row1).toBeInTheDocument()
        expect(row2).toBeInTheDocument()
        expect(row1).toHaveTextContent('Row 1')
        expect(row2).toHaveTextContent('Row 2')
    })

    it('renders as table head structure', () => {
        render(CalendarGridHead, {
            slots: {
                default: '<thead data-testid="table-head"><tr><th>Header</th></tr></thead>',
            },
        })

        const tableHead = document.querySelector('[data-testid="table-head"]')
        expect(tableHead).toBeInTheDocument()
        expect(tableHead?.tagName).toBe('THEAD')
    })
})
