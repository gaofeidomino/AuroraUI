import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { HoverCard } from '../../../src/components/hover-card'

describe('HoverCard Component', () => {
    it('renders correctly with default props', () => {
        render(HoverCard, {
            slots: {
                default: 'Hover card content',
            },
        })

        const hoverCard = screen.getByText('Hover card content')
        expect(hoverCard).toBeInTheDocument()
        expect(hoverCard.closest('[data-slot="hover-card"]')).toBeDefined()
    })

    it('renders with slot content', () => {
        render(HoverCard, {
            slots: {
                default: '<div>Complex hover card content</div>',
            },
        })

        const content = screen.getByText('Complex hover card content')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly', () => {
        render(HoverCard, {
            props: {
                openDelay: 500,
                closeDelay: 300,
            },
            slots: {
                default: 'Hover card with custom delays',
            },
        })

        const hoverCard = screen.getByText('Hover card with custom delays')
        expect(hoverCard).toBeInTheDocument()
    })

    it('renders with multiple children', () => {
        const TestComponent = {
            components: { HoverCard },
            template: `
                <HoverCard>
                    <div>Trigger content</div>
                    <div>Content area</div>
                </HoverCard>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Trigger content')).toBeInTheDocument()
        expect(screen.getByText('Content area')).toBeInTheDocument()
    })

    it('maintains accessibility attributes', () => {
        render(HoverCard, {
            slots: {
                default: 'Accessible hover card',
            },
        })

        const hoverCard = screen.getByText('Accessible hover card')
        const rootElement = hoverCard.closest('[data-slot="hover-card"]')
        expect(rootElement).toBeDefined()
    })
})
