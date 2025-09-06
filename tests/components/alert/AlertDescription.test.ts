import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDescription } from '../../../src/components/alert'

describe('AlertDescription Component', () => {
    it('renders correctly with default content', () => {
        render(AlertDescription, {
            slots: {
                default: 'Alert Description',
            },
        })

        const description = screen.getByText('Alert Description')
        expect(description).toBeInTheDocument()
        expect(description).toHaveClass('text-muted-foreground', 'col-start-2', 'grid', 'justify-items-start', 'gap-1', 'text-sm')
    })

    it('applies custom class names', () => {
        render(AlertDescription, {
            props: {
                class: 'custom-description-class',
            },
            slots: {
                default: 'Custom Description',
            },
        })

        const description = screen.getByText('Custom Description')
        expect(description).toHaveClass('custom-description-class')
    })

    it('has correct data-slot attribute', () => {
        render(AlertDescription, {
            slots: {
                default: 'Description with data-slot',
            },
        })

        const description = screen.getByText('Description with data-slot')
        expect(description).toHaveAttribute('data-slot', 'alert-description')
    })

    it('renders with slot content', () => {
        render(AlertDescription, {
            slots: {
                default: '<span>Slot Description Content</span>',
            },
        })

        const description = screen.getByText('Slot Description Content')
        expect(description).toBeInTheDocument()
    })

    it('applies base classes correctly', () => {
        render(AlertDescription, {
            slots: {
                default: 'Base classes test',
            },
        })

        const description = screen.getByText('Base classes test')
        expect(description).toHaveClass('text-muted-foreground', 'col-start-2', 'grid', 'justify-items-start', 'gap-1', 'text-sm')
    })

    it('applies paragraph styling classes', () => {
        render(AlertDescription, {
            slots: {
                default: 'Paragraph styling test',
            },
        })

        const description = screen.getByText('Paragraph styling test')
        expect(description).toHaveClass('[&_p]:leading-relaxed')
    })

    it('renders with HTML content in slot', () => {
        const TestComponent = {
            components: { AlertDescription },
            template: `
                <AlertDescription>
                    <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
                    <p>Another paragraph with more content.</p>
                </AlertDescription>
            `,
        }

        render(TestComponent)

        expect(screen.getByText(/This is a paragraph with/)).toBeInTheDocument()
        expect(screen.getByText('bold text')).toBeInTheDocument()
        expect(screen.getByText('italic text')).toBeInTheDocument()
        expect(screen.getByText('Another paragraph with more content.')).toBeInTheDocument()
    })

    it('maintains proper grid positioning', () => {
        render(AlertDescription, {
            slots: {
                default: 'Grid positioned description',
            },
        })

        const description = screen.getByText('Grid positioned description')
        expect(description).toHaveClass('col-start-2')
    })

    it('applies grid layout classes correctly', () => {
        render(AlertDescription, {
            slots: {
                default: 'Grid layout test',
            },
        })

        const description = screen.getByText('Grid layout test')
        expect(description).toHaveClass('grid', 'justify-items-start', 'gap-1')
    })

    it('applies typography classes correctly', () => {
        render(AlertDescription, {
            slots: {
                default: 'Typography test',
            },
        })

        const description = screen.getByText('Typography test')
        expect(description).toHaveClass('text-muted-foreground', 'text-sm')
    })

    it('combines custom and default classes correctly', () => {
        render(AlertDescription, {
            props: {
                class: 'my-custom-description-class',
            },
            slots: {
                default: 'Combined classes description',
            },
        })

        const description = screen.getByText('Combined classes description')
        expect(description).toHaveClass('text-muted-foreground', 'col-start-2', 'grid', 'justify-items-start', 'gap-1', 'text-sm', '[&_p]:leading-relaxed', 'my-custom-description-class')
    })

    it('handles multiple paragraphs with proper styling', () => {
        const TestComponent = {
            components: { AlertDescription },
            template: `
                <AlertDescription>
                    <p>First paragraph with some content.</p>
                    <p>Second paragraph with more content.</p>
                    <p>Third paragraph with additional content.</p>
                </AlertDescription>
            `,
        }

        render(TestComponent)

        const description = screen.getByText('First paragraph with some content.')
        const descriptionElement = description.closest('[data-slot="alert-description"]')

        expect(descriptionElement).toBeInTheDocument()
        expect(descriptionElement).toHaveClass('[&_p]:leading-relaxed')
    })

    it('renders with complex nested content', () => {
        const TestComponent = {
            components: { AlertDescription },
            template: `
                <AlertDescription>
                    <div>
                        <p>Main description paragraph</p>
                        <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                        </ul>
                        <p>Another paragraph after the list</p>
                    </div>
                </AlertDescription>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Main description paragraph')).toBeInTheDocument()
        expect(screen.getByText('List item 1')).toBeInTheDocument()
        expect(screen.getByText('List item 2')).toBeInTheDocument()
        expect(screen.getByText('Another paragraph after the list')).toBeInTheDocument()
    })

    it('handles empty content gracefully', () => {
        render(AlertDescription, {
            slots: {
                default: '',
            },
        })

        const descriptionElement = document.querySelector('[data-slot="alert-description"]')
        expect(descriptionElement).toBeInTheDocument()
        expect(descriptionElement).toHaveClass('text-muted-foreground', 'col-start-2', 'grid', 'justify-items-start', 'gap-1', 'text-sm', '[&_p]:leading-relaxed')
    })

    it('maintains proper spacing and alignment', () => {
        render(AlertDescription, {
            slots: {
                default: 'Spacing and alignment test',
            },
        })

        const description = screen.getByText('Spacing and alignment test')
        expect(description).toHaveClass('gap-1', 'justify-items-start')
    })
})
