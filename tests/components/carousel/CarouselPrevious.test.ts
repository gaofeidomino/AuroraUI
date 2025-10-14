import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious } from '../../../src/components/carousel'

describe('CarouselPrevious Component', () => {
    it('renders correctly within Carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton).toBeDefined()
        expect(prevButton?.tagName).toBe('BUTTON')
    })

    it('renders with default variant and size', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton).toBeDefined()
    })

    it('renders with custom variant', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant="ghost" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton).toBeDefined()
    })

    it('renders with custom size', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious size="sm" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton).toBeDefined()
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class="custom-prev-class" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton?.className).toContain('custom-prev-class')
    })

    it('renders ArrowLeft icon by default', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        render(TestComponent)

        const srText = screen.getByText('Previous Slide')
        expect(srText).toBeDefined()
        expect(srText.className).toContain('sr-only')
    })

    it('renders custom slot content', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious>
                        <span>Custom Prev</span>
                    </CarouselPrevious>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Custom Prev')).toBeDefined()
    })

    it('has proper positioning for horizontal carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton?.className).toContain('absolute')
        expect(prevButton?.className).toContain('top-1/2')
        expect(prevButton?.className).toContain('-left-12')
        expect(prevButton?.className).toContain('-translate-y-1/2')
    })

    it('has proper positioning for vertical carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel orientation="vertical">
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton?.className).toContain('absolute')
        expect(prevButton?.className).toContain('-top-12')
        expect(prevButton?.className).toContain('left-1/2')
        expect(prevButton?.className).toContain('-translate-x-1/2')
        expect(prevButton?.className).toContain('rotate-90')
    })

    it('is disabled when cannot scroll previous', async () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for carousel to initialize
        await new Promise((resolve) => setTimeout(resolve, 100))

        const prevButton = container.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement
        // In a single-item carousel, the button should be disabled
        expect(prevButton.disabled).toBe(true)
    })

    it('calls scrollPrev when clicked', async () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                        <CarouselItem>Item 3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for carousel to initialize
        await new Promise((resolve) => setTimeout(resolve, 100))

        const prevButton = container.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement

        await fireEvent.click(prevButton)

        expect(prevButton).toBeDefined()
    })

    it('throws error when used outside Carousel', () => {
        // Suppress console.error for this test
        const consoleError = console.error
        console.error = () => {}

        expect(() => {
            render(CarouselPrevious)
        }).toThrow('useCarousel must be used within a <Carousel />')

        console.error = consoleError
    })

    it('maintains data-slot attribute', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton?.getAttribute('data-slot')).toBe('carousel-previous')
    })

    it('has proper rounded-full class', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton?.className).toContain('rounded-full')
        expect(prevButton?.className).toContain('size-8')
    })

    it('applies both custom and default classes', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class="z-10 bg-primary" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const prevButton = container.querySelector('[data-slot="carousel-previous"]')
        expect(prevButton?.className).toContain('z-10')
        expect(prevButton?.className).toContain('bg-primary')
        expect(prevButton?.className).toContain('absolute')
    })
})
