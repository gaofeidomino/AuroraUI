import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertTitle } from '../../src/components/alert'

describe('AlertTitle Component', () => {
    it('renders correctly with default content', () => {
        render(AlertTitle, {
            slots: {
                default: 'Alert Title',
            },
        })

        const title = screen.getByText('Alert Title')
        expect(title).toBeInTheDocument()
        expect(title).toHaveClass('col-start-2', 'line-clamp-1', 'min-h-4', 'font-medium', 'tracking-tight')
    })

    it('applies custom class names', () => {
        render(AlertTitle, {
            props: {
                class: 'custom-title-class',
            },
            slots: {
                default: 'Custom Title',
            },
        })

        const title = screen.getByText('Custom Title')
        expect(title).toHaveClass('custom-title-class')
    })

    it('has correct data-slot attribute', () => {
        render(AlertTitle, {
            slots: {
                default: 'Title with data-slot',
            },
        })

        const title = screen.getByText('Title with data-slot')
        expect(title).toHaveAttribute('data-slot', 'alert-title')
    })

    it('renders with slot content', () => {
        render(AlertTitle, {
            slots: {
                default: '<span>Slot Title Content</span>',
            },
        })

        const title = screen.getByText('Slot Title Content')
        expect(title).toBeInTheDocument()
    })

    it('applies base classes correctly', () => {
        render(AlertTitle, {
            slots: {
                default: 'Base classes test',
            },
        })

        const title = screen.getByText('Base classes test')
        expect(title).toHaveClass('col-start-2', 'line-clamp-1', 'min-h-4', 'font-medium', 'tracking-tight')
    })

    it('handles long title text with line-clamp', () => {
        const longTitle = 'This is a very long title that should be clamped to one line and not overflow the container'

        render(AlertTitle, {
            slots: {
                default: longTitle,
            },
        })

        const title = screen.getByText(longTitle)
        expect(title).toBeInTheDocument()
        expect(title).toHaveClass('line-clamp-1')
    })

    it('renders with HTML content in slot', () => {
        const TestComponent = {
            components: { AlertTitle },
            template: `
                <AlertTitle>
                    <strong>Bold Title</strong> with <em>emphasis</em>
                </AlertTitle>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Bold Title')).toBeInTheDocument()
        expect(screen.getByText('emphasis')).toBeInTheDocument()
    })

    it('maintains proper grid positioning', () => {
        render(AlertTitle, {
            slots: {
                default: 'Grid positioned title',
            },
        })

        const title = screen.getByText('Grid positioned title')
        expect(title).toHaveClass('col-start-2')
    })

    it('applies typography classes correctly', () => {
        render(AlertTitle, {
            slots: {
                default: 'Typography test',
            },
        })

        const title = screen.getByText('Typography test')
        expect(title).toHaveClass('font-medium', 'tracking-tight')
    })

    it('combines custom and default classes correctly', () => {
        render(AlertTitle, {
            props: {
                class: 'my-custom-title-class',
            },
            slots: {
                default: 'Combined classes title',
            },
        })

        const title = screen.getByText('Combined classes title')
        expect(title).toHaveClass('col-start-2', 'line-clamp-1', 'min-h-4', 'font-medium', 'tracking-tight', 'my-custom-title-class')
    })

    it('renders with minimum height constraint', () => {
        render(AlertTitle, {
            slots: {
                default: 'Min height test',
            },
        })

        const title = screen.getByText('Min height test')
        expect(title).toHaveClass('min-h-4')
    })

    it('handles empty content gracefully', () => {
        render(AlertTitle, {
            slots: {
                default: '',
            },
        })

        const titleElement = document.querySelector('[data-slot="alert-title"]')
        expect(titleElement).toBeInTheDocument()
        expect(titleElement).toHaveClass('col-start-2', 'line-clamp-1', 'min-h-4', 'font-medium', 'tracking-tight')
    })
})
