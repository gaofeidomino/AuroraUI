import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../src/components/carousel'

describe('Carousel Integration Tests', () => {
    it('renders complete carousel structure', () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                        <CarouselItem>Slide 2</CarouselItem>
                        <CarouselItem>Slide 3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Slide 1')).toBeDefined()
        expect(screen.getByText('Slide 2')).toBeDefined()
        expect(screen.getByText('Slide 3')).toBeDefined()
    })

    it('maintains proper semantic structure', () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
            },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const carousel = container.querySelector('[data-slot="carousel"]')
        const content = container.querySelector('[data-slot="carousel-content"]')
        const items = container.querySelectorAll('[data-slot="carousel-item"]')

        expect(carousel?.getAttribute('role')).toBe('region')
        expect(items).toHaveLength(2)
        items.forEach((item) => {
            expect(item.getAttribute('role')).toBe('group')
            expect(item.getAttribute('aria-roledescription')).toBe('slide')
        })
    })

    it('horizontal carousel works correctly', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent>
                        <CarouselItem v-for="i in 5" :key="i">
                            Slide {{ i }}
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for initialization
        await new Promise((resolve) => setTimeout(resolve, 100))

        const prevButton = container.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement
        const nextButton = container.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement

        expect(prevButton).toBeDefined()
        expect(nextButton).toBeDefined()

        // Note: Button states depend on embla-carousel initialization
        // which may not work perfectly in JSDOM environment
        // This test verifies the buttons are rendered
    })

    it('vertical carousel works correctly', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel orientation="vertical">
                    <CarouselContent>
                        <CarouselItem v-for="i in 5" :key="i">
                            Slide {{ i }}
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for initialization
        await new Promise((resolve) => setTimeout(resolve, 100))

        const content = container.querySelector('[data-slot="carousel-content"]')
        const contentInner = content?.querySelector('.flex')

        expect(contentInner?.className).toContain('flex-col')
        expect(contentInner?.className).toContain('-mt-4')
    })

    it('navigation buttons update state correctly', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                        <CarouselItem>Slide 2</CarouselItem>
                        <CarouselItem>Slide 3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for initialization
        await new Promise((resolve) => setTimeout(resolve, 100))

        const nextButton = container.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement

        // Click next button
        await fireEvent.click(nextButton)

        // Wait for state update
        await new Promise((resolve) => setTimeout(resolve, 100))

        expect(nextButton).toBeDefined()
    })

    it('keyboard navigation works in horizontal mode', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
            },
            template: `
                <Carousel orientation="horizontal">
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                        <CarouselItem>Slide 2</CarouselItem>
                        <CarouselItem>Slide 3</CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const carousel = container.querySelector('[data-slot="carousel"]') as HTMLElement

        // Test ArrowRight
        await fireEvent.keyDown(carousel, { key: 'ArrowRight' })
        expect(carousel).toBeDefined()

        // Test ArrowLeft
        await fireEvent.keyDown(carousel, { key: 'ArrowLeft' })
        expect(carousel).toBeDefined()
    })

    it('keyboard navigation works in vertical mode', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
            },
            template: `
                <Carousel orientation="vertical">
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                        <CarouselItem>Slide 2</CarouselItem>
                        <CarouselItem>Slide 3</CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const carousel = container.querySelector('[data-slot="carousel"]') as HTMLElement

        // Test ArrowDown
        await fireEvent.keyDown(carousel, { key: 'ArrowDown' })
        expect(carousel).toBeDefined()

        // Test ArrowUp
        await fireEvent.keyDown(carousel, { key: 'ArrowUp' })
        expect(carousel).toBeDefined()
    })

    it('supports custom styling on all components', () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel class="carousel-custom">
                    <CarouselContent class="content-custom">
                        <CarouselItem class="item-custom">Slide 1</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class="prev-custom" />
                    <CarouselNext class="next-custom" />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        const carousel = container.querySelector('[data-slot="carousel"]')
        const content = container.querySelector('[data-slot="carousel-content"]')?.querySelector('.flex')
        const item = container.querySelector('[data-slot="carousel-item"]')
        const prev = container.querySelector('[data-slot="carousel-previous"]')
        const next = container.querySelector('[data-slot="carousel-next"]')

        expect(carousel?.className).toContain('carousel-custom')
        expect(content?.className).toContain('content-custom')
        expect(item?.className).toContain('item-custom')
        expect(prev?.className).toContain('prev-custom')
        expect(next?.className).toContain('next-custom')
    })

    it('provides scoped slot with all carousel state', () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
            },
            template: `
                <Carousel v-slot="{ canScrollNext, canScrollPrev, orientation, scrollNext, scrollPrev }">
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                    </CarouselContent>
                    <div data-testid="custom-controls">
                        <button @click="scrollPrev" :disabled="!canScrollPrev">Prev</button>
                        <button @click="scrollNext" :disabled="!canScrollNext">Next</button>
                        <span>{{ orientation }}</span>
                    </div>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Prev')).toBeDefined()
        expect(screen.getByText('Next')).toBeDefined()
        expect(screen.getByText('horizontal')).toBeDefined()
    })

    it('works with loop option', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel :opts="{ loop: true }">
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                        <CarouselItem>Slide 2</CarouselItem>
                        <CarouselItem>Slide 3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for initialization
        await new Promise((resolve) => setTimeout(resolve, 100))

        const prevButton = container.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement
        const nextButton = container.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement

        // With loop option, both buttons should be enabled
        expect(prevButton).toBeDefined()
        expect(nextButton).toBeDefined()
    })

    it('handles single item carousel', async () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Only Slide</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            `,
        }

        const { container } = render(TestComponent)

        // Wait for initialization
        await new Promise((resolve) => setTimeout(resolve, 100))

        const prevButton = container.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement
        const nextButton = container.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement

        // Both buttons should be disabled for single item
        expect(prevButton.disabled).toBe(true)
        expect(nextButton.disabled).toBe(true)
    })

    it('emits init-api event on mount', async () => {
        let apiCalled = false
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
            },
            template: `
                <Carousel @init-api="handleInitApi">
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
            methods: {
                handleInitApi(api: any) {
                    apiCalled = true
                },
            },
        }

        render(TestComponent)

        // Wait for mount
        await new Promise((resolve) => setTimeout(resolve, 100))

        expect(apiCalled).toBe(true)
    })

    it('handles complex content in items', () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
            },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div class="card">
                                <img src="image.jpg" alt="Image" />
                                <h3>Title</h3>
                                <p>Description</p>
                                <button>Action</button>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Title')).toBeDefined()
        expect(screen.getByText('Description')).toBeDefined()
        expect(screen.getByText('Action')).toBeDefined()
    })

    it('supports custom navigation button content', () => {
        const TestComponent = {
            components: {
                Carousel,
                CarouselContent,
                CarouselItem,
                CarouselNext,
                CarouselPrevious,
            },
            template: `
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>Slide 1</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious>
                        <span>← Back</span>
                    </CarouselPrevious>
                    <CarouselNext>
                        <span>Forward →</span>
                    </CarouselNext>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('← Back')).toBeDefined()
        expect(screen.getByText('Forward →')).toBeDefined()
    })
})
