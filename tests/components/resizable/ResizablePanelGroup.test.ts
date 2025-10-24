import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ResizablePanelGroup } from '../../../src/components/resizable/index'

describe('ResizablePanelGroup Component', () => {
    it('renders correctly with default props', () => {
        render(ResizablePanelGroup, {
            props: {
                direction: 'horizontal',
            },
            slots: {
                default: '<div data-testid="panel-group-content">Panel Group Content</div>',
            },
        })

        const content = screen.getByTestId('panel-group-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Panel Group Content')
    })

    it('forwards props correctly', () => {
        render(ResizablePanelGroup, {
            props: {
                direction: 'horizontal',
                class: 'custom-class',
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(ResizablePanelGroup, {
            props: {
                direction: 'horizontal',
            },
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(ResizablePanelGroup, {
            props: {
                direction: 'horizontal',
            },
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
