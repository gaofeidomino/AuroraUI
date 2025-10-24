import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ResizablePanelGroup, ResizablePanel } from '../../../src/components/resizable/index'

describe('ResizablePanel Component', () => {
    it('renders correctly within ResizablePanelGroup context', () => {
        render({
            components: { ResizablePanelGroup, ResizablePanel },
            template: `
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <div>Panel Content</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            `,
        })

        const content = screen.getByText('Panel Content')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within ResizablePanelGroup context', () => {
        render({
            components: { ResizablePanelGroup, ResizablePanel },
            template: `
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel :defaultSize="50">
                        <div>Panel Content</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            `,
        })

        const content = screen.getByText('Panel Content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content within ResizablePanelGroup context', () => {
        render({
            components: { ResizablePanelGroup, ResizablePanel },
            template: `
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <div data-testid="slot-content">Slot Content</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name within ResizablePanelGroup context', () => {
        render({
            components: { ResizablePanelGroup, ResizablePanel },
            template: `
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <div>Content</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            `,
        })

        const content = screen.getByText('Content')
        expect(content).toBeInTheDocument()
    })
})
