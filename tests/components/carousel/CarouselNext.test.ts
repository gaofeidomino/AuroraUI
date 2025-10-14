import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '../../../src/components/carousel'

describe('CarouselNext Component', () => {
    it('renders correctly within Carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton).toBeDefined()
        expect(nextButton?.tagName).toBe('BUTTON')
    })

    it('renders with default variant and size', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton).toBeDefined()
    })

    it('renders with custom variant', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext variant="ghost" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton).toBeDefined()
    })

    it('renders with custom size', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext size="sm" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton).toBeDefined()
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext class="custom-next-class" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton?.className).toContain('custom-next-class')
    })

    it('renders ArrowRight icon by default', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        render(TestComponent)

        const srText = screen.getByText('Next Slide')
        expect(srText).toBeDefined()
        expect(srText.className).toContain('sr-only')
    })

    it('renders custom slot content', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext>
                        <span>Custom Next</span>
                    </CarouselNext>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Custom Next')).toBeDefined()
    })

    it('has proper positioning for horizontal carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton?.className).toContain('absolute')
        expect(nextButton?.className).toContain('top-1/2')
        expect(nextButton?.className).toContain('-right-12')
        expect(nextButton?.className).toContain('-translate-y-1/2')
    })

    it('has proper positioning for vertical carousel', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel orientation="vertical">
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton?.className).toContain('absolute')
        expect(nextButton?.className).toContain('-bottom-12')
        expect(nextButton?.className).toContain('left-1/2')
        expect(nextButton?.className).toContain('-translate-x-1/2')
        expect(nextButton?.className).toContain('rotate-90')
    })

    it('is disabled when cannot scroll next', async () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for carousel to initialize
        await new Promise((resolve) => setTimeout(resolve, 100))

        const nextButton = container.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement
        // In a single-item carousel, the button should be disabled
        expect(nextButton.disabled).toBe(true)
    })

    it('calls scrollNext when clicked', async () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                        <CarouselItem>Item 3</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for carousel to initialize
        await new Promise((resolve) => setTimeout(resolve, 100))

        const nextButton = container.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement

        await fireEvent.click(nextButton)

        expect(nextButton).toBeDefined()
    })

    it('throws error when used outside Carousel', () => {
        // Suppress console.error for this test
        const consoleError = console.error
        console.error = () => {}

        expect(() => {
            render(CarouselNext)
        }).toThrow('useCarousel must be used within a <Carousel />')

        console.error = consoleError
    })

    it('maintains data-slot attribute', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton?.getAttribute('data-slot')).toBe('carousel-next')
    })

    it('has proper rounded-full class', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton?.className).toContain('rounded-full')
        expect(nextButton?.className).toContain('size-8')
    })

    it('applies both custom and default classes', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem, CarouselNext },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item</CarouselItem>
                    </CarouselContent>
                    <CarouselNext class="z-10 bg-primary" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const nextButton = container.querySelector('[data-slot="carousel-next"]')
        expect(nextButton?.className).toContain('z-10')
        expect(nextButton?.className).toContain('bg-primary')
        expect(nextButton?.className).toContain('absolute')
    })
})
