import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { Menubar } from '../../../src/components/menubar'

describe('Menubar Component', () => {
    it('renders correctly with default props', () => {
        render(Menubar, {
            slots: {
                default: 'Menubar content',
            },
        })

        const menubar = screen.getByText('Menubar content')
        expect(menubar).toBeInTheDocument()
        expect(menubar.closest('[data-slot="menubar"]')).toBeDefined()
    })

    it('renders with slot content', () => {
        render(Menubar, {
            slots: {
                default: '<div>Complex menubar content</div>',
            },
        })

        const content = screen.getByText('Complex menubar content')
        expect(content).toBeInTheDocument()
    })

    it('applies custom class names', () => {
        render(Menubar, {
            props: {
                class: 'custom-menubar-class',
            },
            slots: {
                default: 'Menubar with custom class',
            },
        })

        const menubar = screen.getByText('Menubar with custom class')
        const menubarElement = menubar.closest('[data-slot="menubar"]')
        expect(menubarElement).toHaveClass('custom-menubar-class')
    })

    it('applies base styling classes', () => {
        render(Menubar, {
            slots: {
                default: 'Styled menubar',
            },
        })

        const menubar = screen.getByText('Styled menubar')
        const menubarElement = menubar.closest('[data-slot="menubar"]')
        expect(menubarElement).toHaveClass('bg-background', 'flex', 'h-9', 'items-center', 'gap-1', 'rounded-md', 'border', 'p-1', 'shadow-xs')
    })

    it('renders with multiple children', () => {
        const TestComponent = {
            components: { Menubar },
            template: `
                <Menubar>
                    <div>Menu Item 1</div>
                    <div>Menu Item 2</div>
                    <div>Menu Item 3</div>
                </Menubar>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Menu Item 1')).toBeInTheDocument()
        expect(screen.getByText('Menu Item 2')).toBeInTheDocument()
        expect(screen.getByText('Menu Item 3')).toBeInTheDocument()
    })

    it('maintains accessibility attributes', () => {
        render(Menubar, {
            slots: {
                default: 'Accessible menubar',
            },
        })

        const menubar = screen.getByText('Accessible menubar')
        const menubarElement = menubar.closest('[data-slot="menubar"]')
        expect(menubarElement).toBeDefined()
    })

    it('renders with complex nested structure', () => {
        const TestComponent = {
            components: { Menubar },
            template: `
                <Menubar>
                    <div class="flex items-center gap-2">
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Help</span>
                    </div>
                </Menubar>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('File')).toBeInTheDocument()
        expect(screen.getByText('Edit')).toBeInTheDocument()
        expect(screen.getByText('View')).toBeInTheDocument()
        expect(screen.getByText('Help')).toBeInTheDocument()
    })

    it('combines variant and custom classes correctly', () => {
        render(Menubar, {
            props: {
                class: 'my-custom-class',
            },
            slots: {
                default: 'Combined classes menubar',
            },
        })

        const menubar = screen.getByText('Combined classes menubar')
        const menubarElement = menubar.closest('[data-slot="menubar"]')
        expect(menubarElement).toHaveClass('bg-background', 'flex', 'h-9', 'items-center', 'gap-1', 'rounded-md', 'border', 'p-1', 'shadow-xs', 'my-custom-class')
    })
})
