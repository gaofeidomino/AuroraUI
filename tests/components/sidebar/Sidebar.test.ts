import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Sidebar, SidebarProvider } from '../../../src/components/sidebar/index'

describe('Sidebar Component', () => {
    it('renders correctly with default props', () => {
        render({
            components: { Sidebar, SidebarProvider },
            template: `
                <SidebarProvider>
                    <Sidebar>
                        <div data-testid="sidebar-content">Sidebar Content</div>
                    </Sidebar>
                </SidebarProvider>
            `,
        })

        const content = screen.getByTestId('sidebar-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Sidebar Content')
    })

    it('forwards props correctly', () => {
        render({
            components: { Sidebar, SidebarProvider },
            template: `
                <SidebarProvider>
                    <Sidebar side="right" variant="floating" class="custom-class">
                        <div data-testid="props-content">Props Content</div>
                    </Sidebar>
                </SidebarProvider>
            `,
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render({
            components: { Sidebar, SidebarProvider },
            template: `
                <SidebarProvider>
                    <Sidebar>
                        <div data-testid="slot-content">Slot Content</div>
                    </Sidebar>
                </SidebarProvider>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render({
            components: { Sidebar, SidebarProvider },
            template: `
                <SidebarProvider>
                    <Sidebar>
                        <div data-testid="name-content">Content</div>
                    </Sidebar>
                </SidebarProvider>
            `,
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
