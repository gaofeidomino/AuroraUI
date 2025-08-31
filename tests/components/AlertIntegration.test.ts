import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { Alert, AlertTitle, AlertDescription } from '../../src/components/alert'

describe('Alert Component Integration', () => {
    it('renders complete alert structure with all components', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="default">
                    <AlertTitle>Alert Title</AlertTitle>
                    <AlertDescription>
                        This is a complete alert description with all components working together.
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()

        const title = screen.getByText('Alert Title')
        expect(title).toBeInTheDocument()
        expect(title).toHaveAttribute('data-slot', 'alert-title')

        const description = screen.getByText('This is a complete alert description with all components working together.')
        expect(description).toBeInTheDocument()
        expect(description).toHaveAttribute('data-slot', 'alert-description')
    })

    it('renders destructive alert with all components', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="destructive">
                    <AlertTitle>Error Alert</AlertTitle>
                    <AlertDescription>
                        This is a destructive alert indicating an error condition.
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveClass('text-destructive', 'bg-card')

        const title = screen.getByText('Error Alert')
        expect(title).toBeInTheDocument()

        const description = screen.getByText('This is a destructive alert indicating an error condition.')
        expect(description).toBeInTheDocument()
    })

    it('renders alert with icon and all components', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="default">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <AlertTitle>Info Alert</AlertTitle>
                    <AlertDescription>
                        This alert includes an icon along with the title and description.
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()

        const icon = alert.querySelector('svg')
        expect(icon).toBeInTheDocument()

        const title = screen.getByText('Info Alert')
        expect(title).toBeInTheDocument()

        const description = screen.getByText('This alert includes an icon along with the title and description.')
        expect(description).toBeInTheDocument()
    })

    it('renders alert with multiple descriptions', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="default">
                    <AlertTitle>Multi-part Alert</AlertTitle>
                    <AlertDescription>
                        <p>First description paragraph.</p>
                        <p>Second description paragraph with additional details.</p>
                        <ul>
                            <li>Important point 1</li>
                            <li>Important point 2</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()

        const title = screen.getByText('Multi-part Alert')
        expect(title).toBeInTheDocument()

        expect(screen.getByText('First description paragraph.')).toBeInTheDocument()
        expect(screen.getByText('Second description paragraph with additional details.')).toBeInTheDocument()
        expect(screen.getByText('Important point 1')).toBeInTheDocument()
        expect(screen.getByText('Important point 2')).toBeInTheDocument()
    })

    it('renders alert with custom classes on all components', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="default" class="custom-alert">
                    <AlertTitle class="custom-title">Custom Alert</AlertTitle>
                    <AlertDescription class="custom-description">
                        This alert has custom classes applied to all components.
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toHaveClass('custom-alert')

        const title = screen.getByText('Custom Alert')
        expect(title).toHaveClass('custom-title')

        const description = screen.getByText('This alert has custom classes applied to all components.')
        expect(description).toHaveClass('custom-description')
    })

    it('maintains proper semantic structure and accessibility', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="destructive">
                    <AlertTitle>Accessibility Test</AlertTitle>
                    <AlertDescription>
                        This alert maintains proper semantic structure for screen readers.
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveAttribute('role', 'alert')

        const title = screen.getByText('Accessibility Test')
        expect(title).toHaveAttribute('data-slot', 'alert-title')

        const description = screen.getByText('This alert maintains proper semantic structure for screen readers.')
        expect(description).toHaveAttribute('data-slot', 'alert-description')
    })

    it('renders alert with only title (no description)', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
            },
            template: `
                <Alert variant="default">
                    <AlertTitle>Title Only Alert</AlertTitle>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()

        const title = screen.getByText('Title Only Alert')
        expect(title).toBeInTheDocument()
        expect(title).toHaveAttribute('data-slot', 'alert-title')
    })

    it('renders alert with only description (no title)', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertDescription,
            },
            template: `
                <Alert variant="default">
                    <AlertDescription>
                        Description only alert without a title.
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()

        const description = screen.getByText('Description only alert without a title.')
        expect(description).toBeInTheDocument()
        expect(description).toHaveAttribute('data-slot', 'alert-description')
    })

    it('renders multiple alerts with different variants', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <div>
                    <Alert variant="default">
                        <AlertTitle>Default Alert</AlertTitle>
                        <AlertDescription>This is a default alert.</AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                        <AlertTitle>Destructive Alert</AlertTitle>
                        <AlertDescription>This is a destructive alert.</AlertDescription>
                    </Alert>
                </div>
            `,
        }

        render(TestComponent)

        const alerts = screen.getAllByRole('alert')
        expect(alerts).toHaveLength(2)

        const defaultAlert = alerts[0]
        expect(defaultAlert).toHaveClass('bg-card', 'text-card-foreground')

        const destructiveAlert = alerts[1]
        expect(destructiveAlert).toHaveClass('text-destructive', 'bg-card')

        expect(screen.getByText('Default Alert')).toBeInTheDocument()
        expect(screen.getByText('This is a default alert.')).toBeInTheDocument()
        expect(screen.getByText('Destructive Alert')).toBeInTheDocument()
        expect(screen.getByText('This is a destructive alert.')).toBeInTheDocument()
    })

    it('handles complex nested content in description', () => {
        const TestComponent = {
            components: {
                Alert,
                AlertTitle,
                AlertDescription,
            },
            template: `
                <Alert variant="default">
                    <AlertTitle>Complex Content Alert</AlertTitle>
                    <AlertDescription>
                        <div>
                            <p>This is a complex alert with nested content.</p>
                            <div>
                                <strong>Important:</strong> This contains multiple levels of nesting.
                                <ul>
                                    <li>Nested list item 1</li>
                                    <li>Nested list item 2</li>
                                </ul>
                            </div>
                            <p>Final paragraph with <a href="#">a link</a>.</p>
                        </div>
                    </AlertDescription>
                </Alert>
            `,
        }

        render(TestComponent)

        const alert = screen.getByRole('alert')
        expect(alert).toBeInTheDocument()

        const title = screen.getByText('Complex Content Alert')
        expect(title).toBeInTheDocument()

        expect(screen.getByText('This is a complex alert with nested content.')).toBeInTheDocument()
        expect(screen.getByText('Important:')).toBeInTheDocument()
        expect(screen.getByText('This contains multiple levels of nesting.')).toBeInTheDocument()
        expect(screen.getByText('Nested list item 1')).toBeInTheDocument()
        expect(screen.getByText('Nested list item 2')).toBeInTheDocument()
        expect(screen.getByText(/Final paragraph with/)).toBeInTheDocument()
        expect(screen.getByText('a link')).toBeInTheDocument()
    })
})
