import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { CalendarGrid } from '../../../src/components/calendar/index'

// Mock reka-ui components
vi.mock('reka-ui', () => ({
    CalendarGrid: {
        name: 'CalendarGrid',
        template: '<div data-slot="calendar-grid"><slot /></div>',
    },
    useForwardProps: vi.fn(() => ({})),
    reactiveOmit: vi.fn((obj) => obj),
}))

describe('CalendarGrid Component', () => {
    it('renders correctly with default props', () => {
        render(CalendarGrid, {
            slots: {
                default: '<div>Grid Content</div>',
            },
        })

        const grid = document.querySelector('[data-slot="calendar-grid"]')
        expect(grid).toBeInTheDocument()
        expect(grid).toHaveTextContent('Grid Content')
    })

    it('renders with custom class', () => {
        render(CalendarGrid, {
            props: {
                class: 'custom-grid-class',
            },
            slots: {
                default: '<div>Grid Content</div>',
            },
        })

        const grid = document.querySelector('[data-slot="calendar-grid"]')
        expect(grid).toBeInTheDocument()
        expect(grid).toHaveClass('custom-grid-class')
    })

    it('applies default styling classes', () => {
        render(CalendarGrid, {
            slots: {
                default: '<div>Grid Content</div>',
            },
        })

        const grid = document.querySelector('[data-slot="calendar-grid"]')
        expect(grid).toBeInTheDocument()
        // Check for default styling classes
        expect(grid?.className).toContain('w-full')
        expect(grid?.className).toContain('border-collapse')
        expect(grid?.className).toContain('space-x-1')
    })

    it('forwards props correctly', () => {
        const mockProps = {
            class: 'test-class',
        }

        render(CalendarGrid, {
            props: mockProps,
            slots: {
                default: '<div>Grid Content</div>',
            },
        })

        const grid = document.querySelector('[data-slot="calendar-grid"]')
        expect(grid).toBeInTheDocument()
    })

    it('renders slot content', () => {
        render(CalendarGrid, {
            slots: {
                default: '<div data-testid="grid-content">Calendar Grid</div>',
            },
        })

        const content = document.querySelector('[data-testid="grid-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Calendar Grid')
    })

    it('has correct component name', () => {
        render(CalendarGrid, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const grid = document.querySelector('[data-slot="calendar-grid"]')
        expect(grid).toBeInTheDocument()
    })

    it('combines custom class with default classes', () => {
        render(CalendarGrid, {
            props: {
                class: 'custom-class',
            },
            slots: {
                default: '<div>Grid Content</div>',
            },
        })

        const grid = document.querySelector('[data-slot="calendar-grid"]')
        expect(grid).toBeInTheDocument()
        expect(grid).toHaveClass('custom-class')
        // Should still have default classes
        expect(grid?.className).toContain('w-full')
        expect(grid?.className).toContain('border-collapse')
    })

    it('handles multiple slot elements', () => {
        render(CalendarGrid, {
            slots: {
                default: `
                    <div data-testid="grid-head">Grid Head</div>
                    <div data-testid="grid-body">Grid Body</div>
                `,
            },
        })

        const gridHead = document.querySelector('[data-testid="grid-head"]')
        const gridBody = document.querySelector('[data-testid="grid-body"]')

        expect(gridHead).toBeInTheDocument()
        expect(gridBody).toBeInTheDocument()
        expect(gridHead).toHaveTextContent('Grid Head')
        expect(gridBody).toHaveTextContent('Grid Body')
    })

    it('renders as table-like structure', () => {
        render(CalendarGrid, {
            slots: {
                default: `
                    <table>
                        <thead data-testid="table-head">
                            <tr><th>Header</th></tr>
                        </thead>
                        <tbody data-testid="table-body">
                            <tr><td>Cell</td></tr>
                        </tbody>
                    </table>
                `,
            },
        })

        const tableHead = document.querySelector('[data-testid="table-head"]')
        const tableBody = document.querySelector('[data-testid="table-body"]')

        expect(tableHead).toBeInTheDocument()
        expect(tableBody).toBeInTheDocument()
    })
})
