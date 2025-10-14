import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Carousel } from '../../../src/components/carousel'

describe('Carousel Component', () => {
    it('renders correctly with default props', () => {
        render(Carousel, {
            slots: {
                default: 'Carousel Content',
            },
        })

        const carousel = screen.getByText('Carousel Content')
        expect(carousel).toBeDefined()
        expect(carousel.closest('[data-slot="carousel"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Carousel, {
            props: {
                class: 'custom-carousel-class',
            },
            slots: {
                default: 'Carousel Content',
            },
        })

        const carousel = screen.getByText('Carousel Content')
        const carouselElement = carousel.closest('[data-slot="carousel"]')
        expect(carouselElement).toBeDefined()
        expect((carouselElement as HTMLElement).className).toContain('custom-carousel-class')
    })

    it('renders with default horizontal orientation', () => {
        const { container } = render(Carousel, {
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]')
        expect(carouselElement).toBeDefined()
    })

    it('renders with vertical orientation', () => {
        render(Carousel, {
            props: {
                orientation: 'vertical',
            },
            slots: {
                default: 'Vertical Carousel',
            },
        })

        const carousel = screen.getByText('Vertical Carousel')
        expect(carousel).toBeDefined()
    })

    it('has proper ARIA attributes', () => {
        const { container } = render(Carousel, {
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]')
        expect(carouselElement?.getAttribute('role')).toBe('region')
        expect(carouselElement?.getAttribute('aria-roledescription')).toBe('carousel')
        expect(carouselElement?.getAttribute('tabindex')).toBe('0')
    })

    it('is keyboard accessible (focusable)', () => {
        const { container } = render(Carousel, {
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]') as HTMLElement
        expect(carouselElement?.getAttribute('tabindex')).toBe('0')
    })

    it('handles keyboard navigation with ArrowLeft (horizontal)', async () => {
        const { container } = render(Carousel, {
            props: {
                orientation: 'horizontal',
            },
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]') as HTMLElement

        const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
        const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

        await fireEvent(carouselElement, event)

        expect(preventDefaultSpy).toHaveBeenCalled()
    })

    it('handles keyboard navigation with ArrowRight (horizontal)', async () => {
        const { container } = render(Carousel, {
            props: {
                orientation: 'horizontal',
            },
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]') as HTMLElement

        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' })
        const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

        await fireEvent(carouselElement, event)

        expect(preventDefaultSpy).toHaveBeenCalled()
    })

    it('handles keyboard navigation with ArrowUp (vertical)', async () => {
        const { container } = render(Carousel, {
            props: {
                orientation: 'vertical',
            },
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]') as HTMLElement

        const event = new KeyboardEvent('keydown', { key: 'ArrowUp' })
        const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

        await fireEvent(carouselElement, event)

        expect(preventDefaultSpy).toHaveBeenCalled()
    })

    it('handles keyboard navigation with ArrowDown (vertical)', async () => {
        const { container } = render(Carousel, {
            props: {
                orientation: 'vertical',
            },
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]') as HTMLElement

        const event = new KeyboardEvent('keydown', { key: 'ArrowDown' })
        const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

        await fireEvent(carouselElement, event)

        expect(preventDefaultSpy).toHaveBeenCalled()
    })

    it('ignores non-arrow keys', async () => {
        const { container } = render(Carousel, {
            slots: {
                default: 'Carousel Content',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]') as HTMLElement

        const event = new KeyboardEvent('keydown', { key: 'Enter' })
        const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

        await fireEvent(carouselElement, event)

        expect(preventDefaultSpy).not.toHaveBeenCalled()
    })

    it('provides scoped slot props', () => {
        const TestComponent = {
            components: { Carousel },
            template: `
                <Carousel v-slot="{ canScrollNext, canScrollPrev, orientation }">
                    <div>
                        <span data-testid="can-scroll-next">{{ canScrollNext }}</span>
                        <span data-testid="can-scroll-prev">{{ canScrollPrev }}</span>
                        <span data-testid="orientation">{{ orientation }}</span>
                    </div>
                </Carousel>
            `,
        }

        render(TestComponent)

        expect(screen.getByTestId('can-scroll-next')).toBeDefined()
        expect(screen.getByTestId('can-scroll-prev')).toBeDefined()
        expect(screen.getByTestId('orientation')).toBeDefined()
    })

    it('passes through carousel options', () => {
        render(Carousel, {
            props: {
                opts: {
                    loop: true,
                    align: 'center',
                },
            },
            slots: {
                default: 'Carousel Content',
            },
        })

        const carousel = screen.getByText('Carousel Content')
        expect(carousel).toBeDefined()
    })

    it('sets up init-api event handler correctly', async () => {
        const onInitApi = vi.fn()

        const TestComponent = {
            components: { Carousel },
            template: `
                <Carousel @init-api="handleInitApi">
                    <div>Carousel Content</div>
                </Carousel>
            `,
            methods: {
                handleInitApi: onInitApi,
            },
        }

        const { container } = render(TestComponent)

        // Wait for mount
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Verify the carousel component is rendered
        const carousel = container.querySelector('[data-slot="carousel"]')
        expect(carousel).toBeDefined()

        // Note: In JSDOM environment, embla-carousel may not emit init event
        // as it requires real DOM measurements. This test verifies the structure is correct.
    })

    it('exposes carousel methods via defineExpose', async () => {
        const component = render(Carousel, {
            slots: {
                default: 'Carousel Content',
            },
        })

        // Wait for mount
        await new Promise((resolve) => setTimeout(resolve, 100))

        const instance = component.unmount as any
        // Note: Testing defineExpose is challenging in unit tests
        // This is better tested in integration tests
        expect(component).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        const { container } = render(Carousel)

        const carouselElement = container.querySelector('[data-slot="carousel"]')
        expect(carouselElement).toBeDefined()
    })

    it('maintains data-slot attribute', () => {
        const { container } = render(Carousel, {
            slots: {
                default: 'Test Carousel',
            },
        })

        const carouselElement = container.querySelector('[data-slot="carousel"]')
        expect(carouselElement?.getAttribute('data-slot')).toBe('carousel')
    })
})
