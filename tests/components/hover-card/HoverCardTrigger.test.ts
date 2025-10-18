import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { HoverCard, HoverCardTrigger } from '../../../src/components/hover-card'

describe('HoverCardTrigger Component', () => {
    it('renders correctly with default props', () => {
        const TestComponent = {
            components: { HoverCard, HoverCardTrigger },
            template: `
                <HoverCard>
                    <HoverCardTrigger>
                        Trigger content
                    </HoverCardTrigger>
                </HoverCard>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByText('Trigger content')
        expect(trigger).toBeInTheDocument()
    })

    it('renders with button element', () => {
        const TestComponent = {
            components: { HoverCard, HoverCardTrigger },
            template: `
                <HoverCard>
                    <HoverCardTrigger>
                        <button>Hover me</button>
                    </HoverCardTrigger>
                </HoverCard>
            `,
        }

        render(TestComponent)

        const button = screen.getByRole('button', { name: 'Hover me' })
        expect(button).toBeInTheDocument()
    })

    it('renders with link element', () => {
        const TestComponent = {
            components: { HoverCard, HoverCardTrigger },
            template: `
                <HoverCard>
                    <HoverCardTrigger>
                        <a href="#">Hover link</a>
                    </HoverCardTrigger>
                </HoverCard>
            `,
        }

        render(TestComponent)

        const link = screen.getByRole('link', { name: 'Hover link' })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '#')
    })

    it('renders with custom element', () => {
        const TestComponent = {
            components: { HoverCard, HoverCardTrigger },
            template: `
                <HoverCard>
                    <HoverCardTrigger>
                        <div role="button" tabindex="0">Custom trigger</div>
                    </HoverCardTrigger>
                </HoverCard>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByRole('button', { name: 'Custom trigger' })
        expect(trigger).toBeInTheDocument()
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { HoverCard, HoverCardTrigger },
            template: `
                <HoverCard>
                    <HoverCardTrigger>
                        <div class="flex items-center gap-2">
                            <span>Icon</span>
                            <span>Text</span>
                        </div>
                    </HoverCardTrigger>
                </HoverCard>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Icon')).toBeInTheDocument()
        expect(screen.getByText('Text')).toBeInTheDocument()
    })
})
