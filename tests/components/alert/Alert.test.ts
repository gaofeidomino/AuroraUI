import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { Alert } from '../../../src/components/alert'

describe('Alert Component', () => {
    it('renders correctly with default variant', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: 'Alert content',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveTextContent('Alert content')
        expect(alert).toHaveClass('bg-card', 'text-card-foreground')
    })

    it('renders correctly with destructive variant', () => {
        render(Alert, {
            props: {
                variant: 'destructive',
            },
            slots: {
                default: 'Destructive alert content',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveTextContent('Destructive alert content')
        expect(alert).toHaveClass('text-destructive', 'bg-card')
    })

    it('applies custom class names', () => {
        render(Alert, {
            props: {
                variant: 'default',
                class: 'custom-alert-class',
            },
            slots: {
                default: 'Alert with custom class',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveClass('custom-alert-class')
    })

    it('has correct data-slot attribute', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: 'Alert content',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveAttribute('data-slot', 'alert')
    })

    it('renders with slot content', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: '<span>Slot Content</span>',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveTextContent('Slot Content')
    })

    it('applies base classes correctly', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: 'Alert content',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveClass('relative', 'w-full', 'rounded-lg', 'border', 'px-4', 'py-3', 'text-sm', 'grid')
    })

    it('handles grid layout classes for icon support', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: 'Alert with grid layout',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveClass('has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr]', 'grid-cols-[0_1fr]', 'has-[>svg]:gap-x-3', 'gap-y-0.5', 'items-start')
    })

    it('applies icon-related classes', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: 'Alert with icon classes',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveClass('[&>svg]:size-4', '[&>svg]:translate-y-0.5', '[&>svg]:text-current')
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { Alert },
            template: `
                <Alert variant="default">
                    <div>
                        <h4>Alert Title</h4>
                        <p>Alert description with multiple elements</p>
                        <button>Action</button>
                    </div>
                </Alert>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Alert Title')).toBeInTheDocument()
        expect(screen.getByText('Alert description with multiple elements')).toBeInTheDocument()
        expect(screen.getByText('Action')).toBeInTheDocument()
    })

    it('maintains accessibility with role="alert"', () => {
        render(Alert, {
            props: {
                variant: 'default',
            },
            slots: {
                default: 'Accessible alert content',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveAttribute('role', 'alert')
    })

    it('combines variant and custom classes correctly', () => {
        render(Alert, {
            props: {
                variant: 'destructive',
                class: 'my-custom-class',
            },
            slots: {
                default: 'Combined classes alert',
            },
        })

        const alert = screen.getByRole('alert')
        expect(alert).toHaveClass('text-destructive', 'bg-card', 'my-custom-class')
    })
})
