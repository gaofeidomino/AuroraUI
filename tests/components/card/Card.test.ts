import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../src/components/card'

describe('Card Component', () => {
    it('renders correctly with default props', () => {
        render(Card, {
            slots: {
                default: 'Card Content',
            },
        })

        const card = screen.getByText('Card Content')
        expect(card).toBeDefined()
        expect(card.closest('[data-slot="card"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Card, {
            props: {
                class: 'custom-card-class',
            },
            slots: {
                default: 'Card Content',
            },
        })

        const card = screen.getByText('Card Content')
        const cardElement = card.closest('[data-slot="card"]')
        expect(cardElement).toBeDefined()
        expect((cardElement as HTMLElement).className).toContain('custom-card-class')
    })

    it('renders with header content in default slot', () => {
        render(Card, {
            slots: {
                default: 'Card Header Content',
            },
        })

        expect(screen.getByText('Card Header Content')).toBeDefined()
    })

    it('renders with footer content in default slot', () => {
        render(Card, {
            slots: {
                default: 'Card Footer Content',
            },
        })

        expect(screen.getByText('Card Footer Content')).toBeDefined()
    })

    it('renders with all content in default slot', () => {
        render(Card, {
            slots: {
                default: 'All Card Content',
            },
        })

        expect(screen.getByText('All Card Content')).toBeDefined()
    })
})

describe('CardHeader Component', () => {
    it('renders correctly with default content', () => {
        render(CardHeader, {
            slots: {
                default: 'Header Content',
            },
        })

        const header = screen.getByText('Header Content')
        expect(header).toBeDefined()
    })

    it('renders with custom class', () => {
        render(CardHeader, {
            props: {
                class: 'custom-header-class',
            },
            slots: {
                default: 'Header Content',
            },
        })

        const header = screen.getByText('Header Content')
        const headerElement = header.closest('div')
        expect(headerElement).toBeDefined()
        expect((headerElement as HTMLElement).className).toContain('custom-header-class')
    })
})

describe('CardTitle Component', () => {
    it('renders correctly as h3 element', () => {
        render(CardTitle, {
            slots: {
                default: 'Card Title',
            },
        })

        const title = screen.getByText('Card Title')
        expect(title).toBeDefined()
        expect(title.tagName).toBe('H3')
    })

    it('renders with custom class', () => {
        render(CardTitle, {
            props: {
                class: 'custom-title-class',
            },
            slots: {
                default: 'Card Title',
            },
        })

        const title = screen.getByText('Card Title')
        expect((title as HTMLElement).className).toContain('custom-title-class')
    })
})

describe('CardDescription Component', () => {
    it('renders correctly as p element', () => {
        render(CardDescription, {
            slots: {
                default: 'Card Description',
            },
        })

        const description = screen.getByText('Card Description')
        expect(description).toBeDefined()
        expect(description.tagName).toBe('P')
    })

    it('renders with custom class', () => {
        render(CardDescription, {
            props: {
                class: 'custom-description-class',
            },
            slots: {
                default: 'Card Description',
            },
        })

        const description = screen.getByText('Card Description')
        expect((description as HTMLElement).className).toContain('custom-description-class')
    })
})

describe('CardContent Component', () => {
    it('renders correctly with default content', () => {
        render(CardContent, {
            slots: {
                default: 'Content Text',
            },
        })

        const content = screen.getByText('Content Text')
        expect(content).toBeDefined()
    })

    it('renders with custom class', () => {
        render(CardContent, {
            props: {
                class: 'custom-content-class',
            },
            slots: {
                default: 'Content Text',
            },
        })

        const content = screen.getByText('Content Text')
        const contentElement = content.closest('div')
        expect(contentElement).toBeDefined()
        expect((contentElement as HTMLElement).className).toContain('custom-content-class')
    })
})

describe('CardFooter Component', () => {
    it('renders correctly with default content', () => {
        render(CardFooter, {
            slots: {
                default: 'Footer Content',
            },
        })

        const footer = screen.getByText('Footer Content')
        expect(footer).toBeDefined()
    })

    it('renders with custom class', () => {
        render(CardFooter, {
            props: {
                class: 'custom-footer-class',
            },
            slots: {
                default: 'Footer Content',
            },
        })

        const footer = screen.getByText('Footer Content')
        const footerElement = footer.closest('div')
        expect(footerElement).toBeDefined()
        expect((footerElement as HTMLElement).className).toContain('custom-footer-class')
    })
})

describe('Card Component Integration', () => {
    it('renders complete card structure with individual components', () => {
        const TestComponent = {
            components: {
                Card,
                CardHeader,
                CardTitle,
                CardDescription,
                CardContent,
                CardFooter,
            },
            template: `
                <Card>
                    <CardHeader>
                        <CardTitle>Test Title</CardTitle>
                        <CardDescription>Test Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Test content paragraph</p>
                    </CardContent>
                    <CardFooter>
                        <button>Action Button</button>
                    </CardFooter>
                </Card>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Test Title')).toBeDefined()
        expect(screen.getByText('Test Description')).toBeDefined()
        expect(screen.getByText('Test content paragraph')).toBeDefined()
        expect(screen.getByText('Action Button')).toBeDefined()
    })

    it('maintains proper semantic structure', () => {
        const TestComponent = {
            components: {
                Card,
                CardHeader,
                CardTitle,
                CardContent,
            },
            template: `
                <Card>
                    <CardHeader>
                        <CardTitle>Semantic Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Semantic content</p>
                    </CardContent>
                </Card>
            `,
        }

        render(TestComponent)

        const title = screen.getByText('Semantic Title')
        const content = screen.getByText('Semantic content')

        expect(title.tagName).toBe('H3')
        expect(content.tagName).toBe('P')
    })
})
