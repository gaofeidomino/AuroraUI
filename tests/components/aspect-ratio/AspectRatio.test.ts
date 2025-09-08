import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { AspectRatio } from '../../../src/components/aspect-ratio'

describe('AspectRatio Component', () => {
    it('renders correctly with default props', () => {
        render(AspectRatio, {
            slots: {
                default: 'Aspect Ratio Content',
            },
        })

        const aspectRatio = screen.getByText('Aspect Ratio Content')
        expect(aspectRatio).toBeDefined()
        expect(aspectRatio.closest('[data-slot="aspect-ratio"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(AspectRatio, {
            props: {
                class: 'custom-aspect-ratio-class',
            },
            slots: {
                default: 'Aspect Ratio Content',
            },
        })

        const aspectRatio = screen.getByText('Aspect Ratio Content')
        const aspectRatioElement = aspectRatio.closest('[data-slot="aspect-ratio"]')
        expect(aspectRatioElement).toBeDefined()
        expect((aspectRatioElement as HTMLElement).className).toContain('custom-aspect-ratio-class')
    })

    it('renders with ratio prop', () => {
        render(AspectRatio, {
            props: {
                ratio: 16 / 9,
            },
            slots: {
                default: '16:9 Aspect Ratio',
            },
        })

        const aspectRatio = screen.getByText('16:9 Aspect Ratio')
        expect(aspectRatio).toBeDefined()
        expect(aspectRatio.closest('[data-slot="aspect-ratio"]')).toBeDefined()
    })

    it('renders with different ratio values', () => {
        const { rerender } = render(AspectRatio, {
            props: {
                ratio: 1,
            },
            slots: {
                default: '1:1 Aspect Ratio',
            },
        })

        expect(screen.getByText('1:1 Aspect Ratio')).toBeDefined()

        rerender({
            ratio: 4 / 3,
        })

        expect(screen.getByText('1:1 Aspect Ratio')).toBeDefined()
    })

    it('renders with complex content in slot', () => {
        const TestComponent = {
            components: { AspectRatio },
            template: `
                <AspectRatio>
                    <div>
                        <h3>Video Title</h3>
                        <p>Video description content</p>
                        <img src="test-image.jpg" alt="Test image" />
                    </div>
                </AspectRatio>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Video Title')).toBeDefined()
        expect(screen.getByText('Video description content')).toBeDefined()
        expect(screen.getByAltText('Test image')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(AspectRatio, {
            slots: {
                default: 'Test Content',
            },
        })

        const aspectRatioElement = screen.getByText('Test Content').closest('[data-slot="aspect-ratio"]')
        expect(aspectRatioElement).toBeDefined()
        expect(aspectRatioElement?.getAttribute('data-slot')).toBe('aspect-ratio')
    })

    it('passes through all props to underlying component', () => {
        render(AspectRatio, {
            props: {
                ratio: 21 / 9,
                class: 'ultra-wide-ratio',
                style: 'border: 1px solid red;',
            },
            slots: {
                default: 'Ultra Wide Content',
            },
        })

        const aspectRatio = screen.getByText('Ultra Wide Content')
        const aspectRatioElement = aspectRatio.closest('[data-slot="aspect-ratio"]')
        expect(aspectRatioElement).toBeDefined()
        expect((aspectRatioElement as HTMLElement).className).toContain('ultra-wide-ratio')
        expect((aspectRatioElement as HTMLElement).style.border).toContain('1px solid red')
    })

    it('renders without content when no slot provided', () => {
        render(AspectRatio)

        const aspectRatioElement = document.querySelector('[data-slot="aspect-ratio"]')
        expect(aspectRatioElement).toBeDefined()
        expect(aspectRatioElement?.textContent).toBe('')
    })

    it('handles multiple children in slot', () => {
        const TestComponent = {
            components: { AspectRatio },
            template: `
                <AspectRatio>
                    <div>First child</div>
                    <div>Second child</div>
                    <span>Third child</span>
                </AspectRatio>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('First child')).toBeDefined()
        expect(screen.getByText('Second child')).toBeDefined()
        expect(screen.getByText('Third child')).toBeDefined()
    })
})
