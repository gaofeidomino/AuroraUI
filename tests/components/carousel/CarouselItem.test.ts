import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Carousel, CarouselContent, CarouselItem } from '../../../src/components/carousel'

describe('CarouselItem Component', () => {
    it('renders correctly within CarouselContent', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            Item Content
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item Content')
        expect(item).toBeDefined()
        expect(item.closest('[data-slot="carousel-item"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem class="custom-item-class">
                            Item Content
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item Content')
        const itemElement = item.closest('[data-slot="carousel-item"]')
        expect(itemElement?.className).toContain('custom-item-class')
    })

    it('has proper ARIA attributes', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            Item Content
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const itemElement = container.querySelector('[data-slot="carousel-item"]')
        expect(itemElement?.getAttribute('role')).toBe('group')
        expect(itemElement?.getAttribute('aria-roledescription')).toBe('slide')
    })

    it('applies horizontal padding by default', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent>
                        <CarouselItem>
                            Item Content
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item Content')
        const itemElement = item.closest('[data-slot="carousel-item"]')
        expect(itemElement?.className).toContain('pl-4')
    })

    it('applies vertical padding when orientation is vertical', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel orientation="vertical">
                    <CarouselContent>
                        <CarouselItem>
                            Item Content
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item Content')
        const itemElement = item.closest('[data-slot="carousel-item"]')
        expect(itemElement?.className).toContain('pt-4')
    })

    it('has basis-full class for full width', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            Item Content
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item Content')
        const itemElement = item.closest('[data-slot="carousel-item"]')
        expect(itemElement?.className).toContain('basis-full')
        expect(itemElement?.className).toContain('shrink-0')
        expect(itemElement?.className).toContain('grow-0')
        expect(itemElement?.className).toContain('min-w-0')
    })

    it('renders multiple items', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                        <CarouselItem>Item 3</CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Item 1')).toBeDefined()
        expect(screen.getByText('Item 2')).toBeDefined()
        expect(screen.getByText('Item 3')).toBeDefined()
    })

    it('renders complex content in slot', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div class="image">Image</div>
                            <h3>Title</h3>
                            <p>Description</p>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Image')).toBeDefined()
        expect(screen.getByText('Title')).toBeDefined()
        expect(screen.getByText('Description')).toBeDefined()
    })

    it('throws error when used outside Carousel', () => {
        // Suppress console.error for this test
        const consoleError = console.error
        console.error = () => {}

        expect(() => {
            render(CarouselItem, {
                slots: {
                    default: 'Item',
                },
            })
        }).toThrow('useCarousel must be used within a <Carousel />')

        console.error = consoleError
    })

    it('maintains data-slot attribute', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            Item
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const itemElement = container.querySelector('[data-slot="carousel-item"]')
        expect(itemElement?.getAttribute('data-slot')).toBe('carousel-item')
    })

    it('renders without content when slot is empty', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem />
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const itemElement = container.querySelector('[data-slot="carousel-item"]')
        expect(itemElement).toBeDefined()
        expect(itemElement?.textContent?.trim()).toBe('')
    })

    it('applies custom classes along with default classes', () => {
        const TestComponent = {
            components: { Carousel, CarouselContent, CarouselItem },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem class="bg-blue-500 p-4">
                            Item
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item')
        const itemElement = item.closest('[data-slot="carousel-item"]')
        expect(itemElement?.className).toContain('bg-blue-500')
        expect(itemElement?.className).toContain('p-4')
        expect(itemElement?.className).toContain('basis-full')
    })
})
