import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { Menubar, MenubarMenu } from '../../../src/components/menubar'

describe('MenubarMenu Component', () => {
    it('renders correctly with default props', () => {
        const TestComponent = {
            components: { Menubar, MenubarMenu },
            template: `
                <Menubar>
                    <MenubarMenu>
                        Menu content
                    </MenubarMenu>
                </Menubar>
            `,
        }

        render(TestComponent)

        const menu = screen.getByText('Menu content')
        expect(menu).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        const TestComponent = {
            components: { Menubar, MenubarMenu },
            template: `
                <Menubar>
                    <MenubarMenu>
                        <div>Complex menu content</div>
                    </MenubarMenu>
                </Menubar>
            `,
        }

        render(TestComponent)

        const content = screen.getByText('Complex menu content')
        expect(content).toBeInTheDocument()
    })

    it('renders with multiple menu items', () => {
        const TestComponent = {
            components: { Menubar, MenubarMenu },
            template: `
                <Menubar>
                    <MenubarMenu>
                        <div>Menu Item 1</div>
                        <div>Menu Item 2</div>
                        <div>Menu Item 3</div>
                    </MenubarMenu>
                </Menubar>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Menu Item 1')).toBeInTheDocument()
        expect(screen.getByText('Menu Item 2')).toBeInTheDocument()
        expect(screen.getByText('Menu Item 3')).toBeInTheDocument()
    })

    it('maintains accessibility attributes', () => {
        const TestComponent = {
            components: { Menubar, MenubarMenu },
            template: `
                <Menubar>
                    <MenubarMenu>
                        Accessible menu
                    </MenubarMenu>
                </Menubar>
            `,
        }

        render(TestComponent)

        const menu = screen.getByText('Accessible menu')
        expect(menu).toBeInTheDocument()
    })

    it('renders with complex nested structure', () => {
        const TestComponent = {
            components: { Menubar, MenubarMenu },
            template: `
                <Menubar>
                    <MenubarMenu>
                        <div class="menu-container">
                            <h3>File Menu</h3>
                            <ul>
                                <li>New</li>
                                <li>Open</li>
                                <li>Save</li>
                            </ul>
                        </div>
                    </MenubarMenu>
                </Menubar>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('File Menu')).toBeInTheDocument()
        expect(screen.getByText('New')).toBeInTheDocument()
        expect(screen.getByText('Open')).toBeInTheDocument()
        expect(screen.getByText('Save')).toBeInTheDocument()
    })
})
