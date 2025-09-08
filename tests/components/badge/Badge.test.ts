import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Badge } from '../../../src/components/badge'

describe('Badge Component', () => {
    it('renders correctly with default props', () => {
        render(Badge, {
            slots: {
                default: 'Badge Content',
            },
        })

        const badge = screen.getByText('Badge Content')
        expect(badge).toBeDefined()
        expect(badge.closest('[data-slot="badge"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Badge, {
            props: {
                class: 'custom-badge-class',
            },
            slots: {
                default: 'Badge Content',
            },
        })

        const badge = screen.getByText('Badge Content')
        const badgeElement = badge.closest('[data-slot="badge"]')
        expect(badgeElement).toBeDefined()
        expect((badgeElement as HTMLElement).className).toContain('custom-badge-class')
    })

    it('renders with default variant', () => {
        render(Badge, {
            slots: {
                default: 'Default Badge',
            },
        })

        const badge = screen.getByText('Default Badge')
        const badgeElement = badge.closest('[data-slot="badge"]')
        expect(badgeElement).toBeDefined()
    })

    it('renders with secondary variant', () => {
        render(Badge, {
            props: {
                variant: 'secondary',
            },
            slots: {
                default: 'Secondary Badge',
            },
        })

        const badge = screen.getByText('Secondary Badge')
        expect(badge).toBeDefined()
        expect(badge.closest('[data-slot="badge"]')).toBeDefined()
    })

    it('renders with destructive variant', () => {
        render(Badge, {
            props: {
                variant: 'destructive',
            },
            slots: {
                default: 'Destructive Badge',
            },
        })

        const badge = screen.getByText('Destructive Badge')
        expect(badge).toBeDefined()
        expect(badge.closest('[data-slot="badge"]')).toBeDefined()
    })

    it('renders with outline variant', () => {
        render(Badge, {
            props: {
                variant: 'outline',
            },
            slots: {
                default: 'Outline Badge',
            },
        })

        const badge = screen.getByText('Outline Badge')
        expect(badge).toBeDefined()
        expect(badge.closest('[data-slot="badge"]')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        render(Badge)

        const badgeElement = document.querySelector('[data-slot="badge"]')
        expect(badgeElement).toBeDefined()
        expect(badgeElement?.textContent).toBe('')
    })

    it('maintains proper data-slot attribute', () => {
        render(Badge, {
            slots: {
                default: 'Test Badge',
            },
        })

        const badgeElement = screen.getByText('Test Badge').closest('[data-slot="badge"]')
        expect(badgeElement).toBeDefined()
        expect(badgeElement?.getAttribute('data-slot')).toBe('badge')
    })

    it('renders with complex content in slot', () => {
        const TestComponent = {
            components: { Badge },
            template: `
                <Badge>
                    <span>Icon</span>
                    <span>Badge Text</span>
                </Badge>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Icon')).toBeDefined()
        expect(screen.getByText('Badge Text')).toBeDefined()
    })

    it('renders as different HTML elements', () => {
        const { rerender } = render(Badge, {
            props: {
                as: 'div',
            },
            slots: {
                default: 'Div Badge',
            },
        })

        let badgeElement = screen.getByText('Div Badge').closest('[data-slot="badge"]')
        expect(badgeElement?.tagName).toBe('DIV')

        rerender({
            as: 'span',
        })

        badgeElement = screen.getByText('Div Badge').closest('[data-slot="badge"]')
        expect(badgeElement?.tagName).toBe('SPAN')
    })

    it('passes through additional props', () => {
        render(Badge, {
            props: {
                id: 'test-badge',
                'data-testid': 'custom-badge',
                variant: 'secondary',
            },
            slots: {
                default: 'Badge with Props',
            },
        })

        const badge = screen.getByText('Badge with Props')
        const badgeElement = badge.closest('[data-slot="badge"]')
        expect(badgeElement?.getAttribute('id')).toBe('test-badge')
        expect(badgeElement?.getAttribute('data-testid')).toBe('custom-badge')
    })

    it('handles multiple variants correctly', () => {
        const variants = ['default', 'secondary', 'destructive', 'outline'] as const

        variants.forEach((variant) => {
            const { unmount } = render(Badge, {
                props: {
                    variant,
                },
                slots: {
                    default: `${variant} Badge`,
                },
            })

            const badge = screen.getByText(`${variant} Badge`)
            expect(badge).toBeDefined()
            expect(badge.closest('[data-slot="badge"]')).toBeDefined()

            unmount()
        })
    })
})
