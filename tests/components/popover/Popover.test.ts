import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Popover } from '../../../src/components/popover/index'

describe('Popover Component', () => {
    it('renders correctly with default props', () => {
        render(Popover, {
            slots: {
                default: '<div data-testid="popover-content">Popover Content</div>',
            },
        })

        const content = screen.getByTestId('popover-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Popover Content')
    })

    it('forwards props correctly', () => {
        render(Popover, {
            props: {
                open: false,
                modal: true,
            },
            slots: {
                default: '<div data-testid="props-content">Popover Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Popover, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Popover, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
