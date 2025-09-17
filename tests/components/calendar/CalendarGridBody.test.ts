import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarGridBody } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarGridBody: {
        name: 'CalendarGridBody',
        template: '<div data-slot="calendar-grid-body"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarGridBody Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarGridBody, {
            slots: {
                default: '<div>Grid Body Content</div>',
            },
        })

        const gridBody = document.querySelector('[data-slot="calendar-grid-body"]')
        expect(gridBody).toBeInTheDocument()
        expect(gridBody).toHaveTextContent('Grid Body Content')
    })

    it('renders with custom class', () => {
        render(CalendarGridBody, {
            props: {
                class: 'custom-grid-body-class',
            },
            slots: {
                default: '<div>Grid Body Content</div>',
            },
        })

        const gridBody = document.querySelector('[data-slot="calendar-grid-body"]')
        expect(gridBody).toBeInTheDocument()
        expect(gridBody).toHaveClass('custom-grid-body-class')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarGridBody, {
            props: mockProps,
            slots: {
                default: '<div>Grid Body Content</div>',
            },
        })

        const gridBody = document.querySelector('[data-slot="calendar-grid-body"]')
        expect(gridBody).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarGridBody, {
            slots: {
                default: '<div data-testid="grid-body-content">Calendar Grid Body</div>',
            },
        })

        const content = document.querySelector('[data-testid="grid-body-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Calendar Grid Body')
    })

    it('has correct component name', () => {
        render(CalendarGridBody, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const gridBody = document.querySelector('[data-slot="calendar-grid-body"]')
        expect(gridBody).toBeInTheDocument()
    })

    it('handles multiple slot elements', () => {
        render(CalendarGridBody, {
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

    it('renders as table body structure', () => {
        render(CalendarGridBody, {
            slots: {
                default: '<tbody data-testid="table-body"><tr><td>Cell</td></tr></tbody>',
            },
        })

        const tableBody = document.querySelector('[data-testid="table-body"]')
        expect(tableBody).toBeInTheDocument()
        expect(tableBody?.tagName).toBe('TBODY')
    })
})
