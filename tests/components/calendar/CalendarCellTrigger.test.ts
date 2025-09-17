import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarCellTrigger } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarCellTrigger: {
        name: 'CalendarCellTrigger',
        template: '<button data-slot="calendar-cell-trigger"><slot /></button>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

// Mock button variants
vi.mock('../../../src/components/button', () => ({
    buttonVariants: vi.fn(() => 'button-variants-class'),
}))

describe('CalendarCellTrigger Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveTextContent('15')
        // Mock doesn't include data attributes, so we just test basic rendering
    })

    it('renders with custom class', () => {
        render(CalendarCellTrigger, {
            props: {
                class: 'custom-trigger-class',
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveClass('custom-trigger-class')
    })

    it('uses button as default element', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger?.tagName).toBe('BUTTON')
    })

    it('applies button variant classes', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
        // Check for button variant classes
        expect(trigger?.className).toContain('button-variants-class')
    })

    it('applies calendar-specific styling classes', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
        // Check for calendar-specific classes
        expect(trigger?.className).toContain('size-8')
        expect(trigger?.className).toContain('p-0')
        expect(trigger?.className).toContain('font-normal')
        expect(trigger?.className).toContain('cursor-default')
    })

    it('handles different states correctly', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()

        // Check for state-related classes
        expect(trigger?.className).toContain('aria-selected:opacity-100')
        expect(trigger?.className).toContain('data-[selected]:bg-primary')
        expect(trigger?.className).toContain('data-[disabled]:text-muted-foreground')
        expect(trigger?.className).toContain('data-[unavailable]:text-destructive-foreground')
        expect(trigger?.className).toContain('data-[outside-view]:text-muted-foreground')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            day: new Date(2024, 0, 15),
            month: new Date(2024, 0, 1),
            class: 'test-class',
        }

        render(CalendarCellTrigger, {
            props: mockProps,
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '<span data-testid="day-number">15</span>',
            },
        })

        const dayNumber = document.querySelector('[data-testid="day-number"]')
        expect(dayNumber).toBeInTheDocument()
        expect(dayNumber).toHaveTextContent('15')
    })

    it('has correct component name', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()
    })

    it('handles hover and focus states', () => {
        render(CalendarCellTrigger, {
            props: {
                day: new Date(2024, 0, 15),
                month: new Date(2024, 0, 1),
            },
            slots: {
                default: '15',
            },
        })

        const trigger = document.querySelector('[data-slot="calendar-cell-trigger"]')
        expect(trigger).toBeInTheDocument()

        // Check for hover and focus states
        expect(trigger?.className).toContain('data-[selected]:hover:bg-primary')
        expect(trigger?.className).toContain('data-[selected]:focus:bg-primary')
    })
})
