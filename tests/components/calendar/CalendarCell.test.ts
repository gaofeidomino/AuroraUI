import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarCell } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarCell: {
        name: 'CalendarCell',
        template: '<div data-slot="calendar-cell"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarCell Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarCell, {
            props: {
                date: new Date(2024, 0, 15),
            },
            slots: {
                default: '<span>Cell Content</span>',
            },
        })

        const cell = document.querySelector('[data-slot="calendar-cell"]')
        expect(cell).toBeInTheDocument()
        expect(cell).toHaveTextContent('Cell Content')
    })

    it('renders with custom class', () => {
        render(CalendarCell, {
            props: {
                date: new Date(2024, 0, 15),
                class: 'custom-cell-class',
            },
            slots: {
                default: '<span>Cell Content</span>',
            },
        })

        const cell = document.querySelector('[data-slot="calendar-cell"]')
        expect(cell).toBeInTheDocument()
        expect(cell).toHaveClass('custom-cell-class')
    })

    it('applies basic styling classes', () => {
        render(CalendarCell, {
            slots: {
                default: '<span>Cell Content</span>',
            },
        })

        const cell = document.querySelector('[data-slot="calendar-cell"]')
        expect(cell).toBeInTheDocument()
        // Check for basic styling classes that should be applied
        expect(cell?.className).toContain('relative')
        expect(cell?.className).toContain('p-0')
        expect(cell?.className).toContain('text-center')
        expect(cell?.className).toContain('text-sm')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            date: new Date(2024, 0, 15),
            class: 'test-class',
        }

        render(CalendarCell, {
            props: mockProps,
            slots: {
                default: '<span>Cell Content</span>',
            },
        })

        const cell = document.querySelector('[data-slot="calendar-cell"]')
        expect(cell).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarCell, {
            slots: {
                default: '<button data-testid="cell-trigger">15</button>',
            },
        })

        const trigger = document.querySelector('[data-testid="cell-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveTextContent('15')
    })

    it('has correct component name', () => {
        render(CalendarCell, {
            slots: {
                default: '<span>Content</span>',
            },
        })

        const cell = document.querySelector('[data-slot="calendar-cell"]')
        expect(cell).toBeInTheDocument()
    })

    it('handles focus-within states correctly', () => {
        render(CalendarCell, {
            slots: {
                default: '<button>Cell</button>',
            },
        })

        const cell = document.querySelector('[data-slot="calendar-cell"]')
        expect(cell).toBeInTheDocument()
        // Check for focus-within related classes
        expect(cell?.className).toContain('focus-within:relative')
        expect(cell?.className).toContain('focus-within:z-20')
    })
})
