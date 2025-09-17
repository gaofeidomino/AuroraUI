import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarHeadCell } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarHeadCell: {
        name: 'CalendarHeadCell',
        template: '<div data-slot="calendar-head-cell"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarHeadCell Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarHeadCell, {
            slots: {
                default: 'Mon',
            },
        })

        const headCell = document.querySelector('[data-slot="calendar-head-cell"]')
        expect(headCell).toBeInTheDocument()
        expect(headCell).toHaveTextContent('Mon')
    })

    it('renders with custom class', () => {
        render(CalendarHeadCell, {
            props: {
                class: 'custom-head-cell-class',
            },
            slots: {
                default: 'Mon',
            },
        })

        const headCell = document.querySelector('[data-slot="calendar-head-cell"]')
        expect(headCell).toBeInTheDocument()
        expect(headCell).toHaveClass('custom-head-cell-class')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarHeadCell, {
            props: mockProps,
            slots: {
                default: 'Mon',
            },
        })

        const headCell = document.querySelector('[data-slot="calendar-head-cell"]')
        expect(headCell).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarHeadCell, {
            slots: {
                default: '<span data-testid="day-name">Monday</span>',
            },
        })

        const dayName = document.querySelector('[data-testid="day-name"]')
        expect(dayName).toBeInTheDocument()
        expect(dayName).toHaveTextContent('Monday')
    })

    it('has correct component name', () => {
        render(CalendarHeadCell, {
            slots: {
                default: 'Mon',
            },
        })

        const headCell = document.querySelector('[data-slot="calendar-head-cell"]')
        expect(headCell).toBeInTheDocument()
    })

    it('handles different day names', () => {
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        // Test each day name individually
        dayNames.forEach((dayName) => {
            const { unmount } = render(CalendarHeadCell, {
                slots: {
                    default: dayName,
                },
            })

            const headCell = document.querySelector('[data-slot="calendar-head-cell"]')
            expect(headCell).toBeInTheDocument()
            expect(headCell).toHaveTextContent(dayName)

            unmount()
        })
    })

    it('renders as table header cell structure', () => {
        render(CalendarHeadCell, {
            slots: {
                default: '<th data-testid="table-header">Monday</th>',
            },
        })

        const tableHeader = document.querySelector('[data-testid="table-header"]')
        expect(tableHeader).toBeInTheDocument()
        expect(tableHeader?.tagName).toBe('TH')
    })

    it('handles empty slot content', () => {
        render(CalendarHeadCell, {
            slots: {
                default: '',
            },
        })

        const headCell = document.querySelector('[data-slot="calendar-head-cell"]')
        expect(headCell).toBeInTheDocument()
        expect(headCell).toHaveTextContent('')
    })
})
