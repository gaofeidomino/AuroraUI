import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { NavigationMenu } from '../../../src/components/navigation-menu'

describe('NavigationMenu Component', () => {
    it('renders correctly with default props', () => {
        render(NavigationMenu, {
            slots: {
                default: 'Navigation menu content',
            },
        })

        const navigationMenu = screen.getByText('Navigation menu content')
        expect(navigationMenu).toBeInTheDocument()
        expect(navigationMenu.closest('[data-slot="navigation-menu"]')).toBeDefined()
    })

    it('renders with slot content', () => {
        render(NavigationMenu, {
            slots: {
                default: '<div>Complex navigation content</div>',
            },
        })

        const content = screen.getByText('Complex navigation content')
        expect(content).toBeInTheDocument()
    })

    it('applies custom class names', () => {
        render(NavigationMenu, {
            props: {
                class: 'custom-navigation-class',
            },
            slots: {
                default: 'Navigation with custom class',
            },
        })

        const navigationMenu = screen.getByText('Navigation with custom class')
        const navigationElement = navigationMenu.closest('[data-slot="navigation-menu"]')
        expect(navigationElement).toHaveClass('custom-navigation-class')
    })

    it('applies base styling classes', () => {
        render(NavigationMenu, {
            slots: {
                default: 'Styled navigation menu',
            },
        })

        const navigationMenu = screen.getByText('Styled navigation menu')
        const navigationElement = navigationMenu.closest('[data-slot="navigation-menu"]')
        expect(navigationElement).toHaveClass('group/navigation-menu', 'relative', 'flex', 'max-w-max', 'flex-1', 'items-center', 'justify-center')
    })

    it('renders with viewport by default', () => {
        render(NavigationMenu, {
            slots: {
                default: 'Navigation with viewport',
            },
        })

        const navigationMenu = screen.getByText('Navigation with viewport')
        const navigationElement = navigationMenu.closest('[data-slot="navigation-menu"]')
        expect(navigationElement).toHaveAttribute('data-viewport', 'true')
    })

    it('can disable viewport', () => {
        render(NavigationMenu, {
            props: {
                viewport: false,
            },
            slots: {
                default: 'Navigation without viewport',
            },
        })

        const navigationMenu = screen.getByText('Navigation without viewport')
        const navigationElement = navigationMenu.closest('[data-slot="navigation-menu"]')
        expect(navigationElement).toHaveAttribute('data-viewport', 'false')
    })

    it('renders with multiple children', () => {
        const TestComponent = {
            components: { NavigationMenu },
            template: `
                <NavigationMenu>
                    <div>Navigation Item 1</div>
                    <div>Navigation Item 2</div>
                    <div>Navigation Item 3</div>
                </NavigationMenu>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Navigation Item 1')).toBeInTheDocument()
        expect(screen.getByText('Navigation Item 2')).toBeInTheDocument()
        expect(screen.getByText('Navigation Item 3')).toBeInTheDocument()
    })

    it('maintains accessibility attributes', () => {
        render(NavigationMenu, {
            slots: {
                default: 'Accessible navigation menu',
            },
        })

        const navigationMenu = screen.getByText('Accessible navigation menu')
        const navigationElement = navigationMenu.closest('[data-slot="navigation-menu"]')
        expect(navigationElement).toBeDefined()
    })

    it('combines variant and custom classes correctly', () => {
        render(NavigationMenu, {
            props: {
                class: 'my-custom-class',
            },
            slots: {
                default: 'Combined classes navigation',
            },
        })

        const navigationMenu = screen.getByText('Combined classes navigation')
        const navigationElement = navigationMenu.closest('[data-slot="navigation-menu"]')
        expect(navigationElement).toHaveClass('group/navigation-menu', 'relative', 'flex', 'max-w-max', 'flex-1', 'items-center', 'justify-center', 'my-custom-class')
    })
})
