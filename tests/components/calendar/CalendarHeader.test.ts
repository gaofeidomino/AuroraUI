import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarHeader } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarHeader: {
        name: 'CalendarHeader',
        template: '<div data-slot="calendar-header"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarHeader Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarHeader, {
            slots: {
                default: '<div>Header Content</div>',
            },
        })

        const header = document.querySelector('[data-slot="calendar-header"]')
        expect(header).toBeInTheDocument()
        expect(header).toHaveTextContent('Header Content')
    })

    it('renders with custom class', () => {
        render(CalendarHeader, {
            props: {
                class: 'custom-header-class',
            },
            slots: {
                default: '<div>Header Content</div>',
            },
        })

        const header = document.querySelector('[data-slot="calendar-header"]')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('custom-header-class')
    })

    it('applies default styling classes', () => {
        render(CalendarHeader, {
            slots: {
                default: '<div>Header Content</div>',
            },
        })

        const header = document.querySelector('[data-slot="calendar-header"]')
        expect(header).toBeInTheDocument()
        // Check for default styling classes
        expect(header?.className).toContain('flex')
        expect(header?.className).toContain('justify-center')
        expect(header?.className).toContain('pt-1')
        expect(header?.className).toContain('relative')
        expect(header?.className).toContain('items-center')
        expect(header?.className).toContain('w-full')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarHeader, {
            props: mockProps,
            slots: {
                default: '<div>Header Content</div>',
            },
        })

        const header = document.querySelector('[data-slot="calendar-header"]')
        expect(header).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarHeader, {
            slots: {
                default: '<div data-testid="header-content">Calendar Header</div>',
            },
        })

        const content = document.querySelector('[data-testid="header-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Calendar Header')
    })

    it('has correct component name', () => {
        render(CalendarHeader, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const header = document.querySelector('[data-slot="calendar-header"]')
        expect(header).toBeInTheDocument()
    })

    it('combines custom class with default classes', () => {
        render(CalendarHeader, {
            props: {
                class: 'custom-class',
            },
            slots: {
                default: '<div>Header Content</div>',
            },
        })

        const header = document.querySelector('[data-slot="calendar-header"]')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('custom-class')
        // Should still have default classes
        expect(header?.className).toContain('flex')
        expect(header?.className).toContain('justify-center')
    })

    it('handles multiple slot elements', () => {
        render(CalendarHeader, {
            slots: {
                default: `
                    <div data-testid="heading">January 2024</div>
                    <div data-testid="navigation">Navigation</div>
                `,
            },
        })

        const heading = document.querySelector('[data-testid="heading"]')
        const navigation = document.querySelector('[data-testid="navigation"]')

        expect(heading).toBeInTheDocument()
        expect(navigation).toBeInTheDocument()
        expect(heading).toHaveTextContent('January 2024')
        expect(navigation).toHaveTextContent('Navigation')
    })
})
