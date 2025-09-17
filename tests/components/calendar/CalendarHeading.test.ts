import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarHeading } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarHeading: {
        name: 'CalendarHeading',
        template: '<div data-slot="calendar-heading"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarHeading Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarHeading)

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        expect(heading).toBeInTheDocument()
    })

    it('renders with custom class', () => {
        render(CalendarHeading, {
            props: {
                class: 'custom-heading-class',
            },
        })

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveClass('custom-heading-class')
    })

    it('applies default styling classes', () => {
        render(CalendarHeading)

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        expect(heading).toBeInTheDocument()
        // Check for default styling classes
        expect(heading?.className).toContain('text-sm')
        expect(heading?.className).toContain('font-medium')
    })

    it('provides headingValue to slot', () => {
        render(CalendarHeading, {
            slots: {
                default: '<span data-testid="heading-value">January 2024</span>',
            },
        })

        const headingValue = document.querySelector('[data-testid="heading-value"]')
        expect(headingValue).toBeInTheDocument()
        expect(headingValue).toHaveTextContent('January 2024')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarHeading, {
            props: mockProps,
        })

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        expect(heading).toBeInTheDocument()
    })

    it('renders custom slot content with headingValue', () => {
        render(CalendarHeading, {
            slots: {
                default: '<div data-testid="custom-heading">Month: January 2024</div>',
            },
        })

        const customHeading = document.querySelector('[data-testid="custom-heading"]')
        expect(customHeading).toBeInTheDocument()
        expect(customHeading).toHaveTextContent('Month: January 2024')
    })

    it('has correct component name', () => {
        render(CalendarHeading)

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        expect(heading).toBeInTheDocument()
    })

    it('combines custom class with default classes', () => {
        render(CalendarHeading, {
            props: {
                class: 'custom-class',
            },
        })

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveClass('custom-class')
        // Should still have default classes
        expect(heading?.className).toContain('text-sm')
        expect(heading?.className).toContain('font-medium')
    })

    it('handles slot content without using headingValue', () => {
        render(CalendarHeading, {
            slots: {
                default: '<div data-testid="static-heading">Static Heading</div>',
            },
        })

        const staticHeading = document.querySelector('[data-testid="static-heading"]')
        expect(staticHeading).toBeInTheDocument()
        expect(staticHeading).toHaveTextContent('Static Heading')
    })

    it('renders both default content and slot content', () => {
        render(CalendarHeading, {
            slots: {
                default: '<span data-testid="slot-content">Custom: January 2024</span>',
            },
        })

        const heading = document.querySelector('[data-slot="calendar-heading"]')
        const slotContent = document.querySelector('[data-testid="slot-content"]')

        expect(heading).toBeInTheDocument()
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Custom: January 2024')
    })
})
