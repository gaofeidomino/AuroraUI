import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Tabs } from '../../../src/components/tabs/index'

describe('Tabs Component', () => {
    it('renders correctly with default props', () => {
        render(Tabs, {
            slots: {
                default: '<div>Tabs Content</div>',
            },
        })

        const tabs = document.querySelector('[data-slot="tabs"]')
        expect(tabs).toBeInTheDocument()
        expect(tabs).toHaveAttribute('data-slot', 'tabs')
    })

    it('forwards props correctly', () => {
        render(Tabs, {
            props: {
                modelValue: 'tab1',
                orientation: 'horizontal',
            },
            slots: {
                default: '<div>Tabs Content</div>',
            },
        })

        const tabs = document.querySelector('[data-slot="tabs"]')
        expect(tabs).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Tabs, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })
})
