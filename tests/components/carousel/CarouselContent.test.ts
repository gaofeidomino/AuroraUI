import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Carousel, CarouselContent } from '../../../src/components/carousel'

describe('CarouselContent Component', () => {
    it('renders correctly within Carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent>
                        Content Text
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const content = screen.getByText('Content Text')
        expect(content).toBeDefined()
        expect(content.closest('[data-slot="carousel-content"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent class="custom-content-class">
                        Content Text
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const content = container.querySelector('[data-slot="carousel-content"]')
        const flexContainer = content?.querySelector('.flex')
        expect(flexContainer?.className).toContain('custom-content-class')
    })

    it('has overflow-hidden on outer container', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent>
                        Content Text
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const contentElement = container.querySelector('[data-slot="carousel-content"]')
        expect(contentElement?.className).toContain('overflow-hidden')
    })

    it('applies horizontal layout classes by default', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent>
                        Content Text
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const content = container.querySelector('[data-slot="carousel-content"]')
        const flexContainer = content?.querySelector('.flex')
        expect(flexContainer?.className).toContain('flex')
        expect(flexContainer?.className).toContain('-ml-4')
    })

    it('applies vertical layout classes when orientation is vertical', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel orientation="vertical">
                    <CarouselContent>
                        Content Text
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const content = container.querySelector('[data-slot="carousel-content"]')
        const flexContainer = content?.querySelector('.flex')
        expect(flexContainer?.className).toContain('flex')
        expect(flexContainer?.className).toContain('-mt-4')
        expect(flexContainer?.className).toContain('flex-col')
    })

    it('inherits attrs correctly with inheritAttrs: false', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent data-testid="carousel-content-test">
                        Content Text
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const content = container.querySelector('[data-slot="carousel-content"]')
        const flexContainer = content?.querySelector('.flex')
        expect(flexContainer?.getAttribute('data-testid')).toBe('carousel-content-test')
    })

    it('renders multiple children in slot', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent>
                        <div>Child 1</div>
                        <div>Child 2</div>
                        <div>Child 3</div>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Child 1')).toBeDefined()
        expect(screen.getByText('Child 2')).toBeDefined()
        expect(screen.getByText('Child 3')).toBeDefined()
    })

    it('maintains data-slot attribute', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent>
                        Content
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const contentElement = container.querySelector('[data-slot="carousel-content"]')
        expect(contentElement?.getAttribute('data-slot')).toBe('carousel-content')
    })

    it('throws error when used outside Carousel', () => {
        // Suppress console.error for this test
        const consoleError = console.error
        console.error = () => {}

        expect(() => {
            render(CarouselContent, {
                slots: {
                    default: 'Content',
                },
            })
        }).toThrow('useCarousel must be used within a <Carousel />')

        console.error = consoleError
    })

    it('renders without content when slot is empty', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel>
                    <CarouselContent />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const contentElement = container.querySelector('[data-slot="carousel-content"]')
        expect(contentElement).toBeDefined()
    })

    it('applies combined custom classes with orientation classes', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent class="gap-4 p-2">
                        Content
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const content = container.querySelector('[data-slot="carousel-content"]')
        const flexContainer = content?.querySelector('.flex')
        expect(flexContainer?.className).toContain('gap-4')
        expect(flexContainer?.className).toContain('p-2')
        expect(flexContainer?.className).toContain('-ml-4')
    })
})
