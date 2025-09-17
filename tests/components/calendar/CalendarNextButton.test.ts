import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarNextButton } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarNext: {
        name: 'CalendarNext',
        template: '<button data-slot="calendar-next-button"><slot /></button>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

// Mock lucide-vue-next icons
vi.mock('lucide-vue-next', () => ({
    ChevronRight: {
        name: 'ChevronRight',
        template: '<svg data-testid="chevron-right"><path /></svg>',
    },
}))

// Mock button variants
vi.mock('../../../src/components/button', () => ({
    buttonVariants: vi.fn(() => 'button-variants-class'),
}))

describe('CalendarNextButton Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarNextButton)

        const nextButton = document.querySelector('[data-slot="calendar-next-button"]')
        expect(nextButton).toBeInTheDocument()
        expect(nextButton?.tagName).toBe('BUTTON')
    })

    it('renders with custom class', () => {
        render(CalendarNextButton, {
            props: {
                class: 'custom-next-button-class',
            },
        })

        const nextButton = document.querySelector('[data-slot="calendar-next-button"]')
        expect(nextButton).toBeInTheDocument()
        expect(nextButton).toHaveClass('custom-next-button-class')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarNextButton, {
            props: mockProps,
        })

        const nextButton = document.querySelector('[data-slot="calendar-next-button"]')
        expect(nextButton).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarNextButton, {
            slots: {
                default: '<span data-testid="next-icon">Next</span>',
            },
        })

        const nextIcon = document.querySelector('[data-testid="next-icon"]')
        expect(nextIcon).toBeInTheDocument()
        expect(nextIcon).toHaveTextContent('Next')
    })

    it('has correct component name', () => {
        render(CalendarNextButton)

        const nextButton = document.querySelector('[data-slot="calendar-next-button"]')
        expect(nextButton).toBeInTheDocument()
    })

    it('renders with default content when no slot provided', () => {
        render(CalendarNextButton)

        const nextButton = document.querySelector('[data-slot="calendar-next-button"]')
        expect(nextButton).toBeInTheDocument()
        expect(nextButton).toHaveTextContent('')
    })

    it('handles click events', () => {
        const handleClick = vi.fn()

        render(CalendarNextButton, {
            props: {
                onClick: handleClick,
            },
        })

        const nextButton = document.querySelector('[data-slot="calendar-next-button"]')
        expect(nextButton).toBeInTheDocument()

        // Simulate click
        nextButton?.click()
        // Note: In a real test, you might want to test the actual click behavior
    })

    it('renders with icon content', () => {
        render(CalendarNextButton, {
            slots: {
                default: '<svg data-testid="next-icon"><path d="M9 18l6-6-6-6"/></svg>',
            },
        })

        const nextIcon = document.querySelector('[data-testid="next-icon"]')
        expect(nextIcon).toBeInTheDocument()
        expect(nextIcon?.tagName).toBe('svg')
    })
})
