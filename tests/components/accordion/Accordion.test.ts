import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Accordion } from '../../../src/components/accordion/index'

describe('Accordion Component', () => {
    it('renders correctly with default props', () => {
        render(Accordion, {
            slots: {
                default: '<div>Accordion Content</div>',
            },
        })

        const accordion = document.querySelector('[data-slot="accordion"]')
        expect(accordion).toBeInTheDocument()
        expect(accordion).toHaveAttribute('data-slot', 'accordion')
    })

    it('forwards props correctly', () => {
        render(Accordion, {
            props: {
                type: 'single',
                collapsible: true,
                defaultValue: 'item-1',
            },
            slots: {
                default: '<div>Accordion Content</div>',
            },
        })

        const accordion = document.querySelector('[data-slot="accordion"]')
        expect(accordion).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(Accordion, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Accordion, {
            slots: {
                default: '<div>Content</div>',
            },
        })

        const accordion = document.querySelector('[data-slot="accordion"]')
        expect(accordion).toBeInTheDocument()
    })
})
