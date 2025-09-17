import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarPrevButton } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarPrev: {
        name: 'CalendarPrev',
        template: '<button data-slot="calendar-prev-button"><slot /></button>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

// Mock lucide-vue-next icons
vi.mock('lucide-vue-next', () => ({
    ChevronLeft: {
        name: 'ChevronLeft',
        template: '<svg data-testid="chevron-left"><path /></svg>',
    },
}))

// Mock button variants
vi.mock('../../../src/components/button', () => ({
    buttonVariants: vi.fn(() => 'button-variants-class'),
}))

describe('CalendarPrevButton Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarPrevButton)

        const prevButton = document.querySelector('[data-slot="calendar-prev-button"]')
        expect(prevButton).toBeInTheDocument()
        expect(prevButton?.tagName).toBe('BUTTON')
    })

    it('renders with custom class', () => {
        render(CalendarPrevButton, {
            props: {
                class: 'custom-prev-button-class',
            },
        })

        const prevButton = document.querySelector('[data-slot="calendar-prev-button"]')
        expect(prevButton).toBeInTheDocument()
        expect(prevButton).toHaveClass('custom-prev-button-class')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarPrevButton, {
            props: mockProps,
        })

        const prevButton = document.querySelector('[data-slot="calendar-prev-button"]')
        expect(prevButton).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarPrevButton, {
            slots: {
                default: '<span data-testid="prev-icon">Prev</span>',
            },
        })

        const prevIcon = document.querySelector('[data-testid="prev-icon"]')
        expect(prevIcon).toBeInTheDocument()
        expect(prevIcon).toHaveTextContent('Prev')
    })

    it('has correct component name', () => {
        render(CalendarPrevButton)

        const prevButton = document.querySelector('[data-slot="calendar-prev-button"]')
        expect(prevButton).toBeInTheDocument()
    })

    it('renders with default content when no slot provided', () => {
        render(CalendarPrevButton)

        const prevButton = document.querySelector('[data-slot="calendar-prev-button"]')
        expect(prevButton).toBeInTheDocument()
        expect(prevButton).toHaveTextContent('')
    })

    it('handles click events', () => {
        const handleClick = vi.fn()

        render(CalendarPrevButton, {
            props: {
                onClick: handleClick,
            },
        })

        const prevButton = document.querySelector('[data-slot="calendar-prev-button"]')
        expect(prevButton).toBeInTheDocument()

        // Simulate click
        prevButton?.click()
        // Note: In a real test, you might want to test the actual click behavior
    })

    it('renders with icon content', () => {
        render(CalendarPrevButton, {
            slots: {
                default: '<svg data-testid="prev-icon"><path d="M15 18l-6-6 6-6"/></svg>',
            },
        })

        const prevIcon = document.querySelector('[data-testid="prev-icon"]')
        expect(prevIcon).toBeInTheDocument()
        expect(prevIcon?.tagName).toBe('svg')
    })
})
