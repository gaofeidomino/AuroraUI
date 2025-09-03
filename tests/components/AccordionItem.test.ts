import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { AccordionItem } from '../../src/components/accordion/index'

describe('AccordionItem Component', () => {
    it('renders correctly with default props', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
            },
            slots: {
                default: '<div>Item Content</div>',
            },
        })

        const accordionItem = screen.getByTestId('accordion-item')
        expect(accordionItem).toBeInTheDocument()
        expect(accordionItem).toHaveAttribute('data-slot', 'accordion-item')
        expect(accordionItem).toHaveAttribute('data-state', 'closed')
    })

    it('applies default classes correctly', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
            },
            slots: {
                default: '<div>Content</div>',
            },
        })

        const accordionItem = screen.getByTestId('accordion-item')
        expect(accordionItem).toHaveClass('border-b', 'last:border-b-0')
    })

    it('applies custom class names', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
                class: 'custom-class',
            },
            slots: {
                default: '<div>Content</div>',
            },
        })

        const accordionItem = screen.getByTestId('accordion-item')
        expect(accordionItem).toHaveClass('custom-class')
    })

    it('forwards props correctly', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
                disabled: true,
                class: 'test-class',
            },
            slots: {
                default: '<div>Content</div>',
            },
        })

        const accordionItem = screen.getByTestId('accordion-item')
        expect(accordionItem).toBeInTheDocument()
        expect(accordionItem).toHaveClass('test-class')
    })

    it('renders with slot content', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
            },
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('handles disabled state', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
                disabled: true,
            },
            slots: {
                default: '<div>Content</div>',
            },
        })

        const accordionItem = screen.getByTestId('accordion-item')
        expect(accordionItem).toBeInTheDocument()
    })

    it('combines default and custom classes correctly', () => {
        render(AccordionItem, {
            props: {
                value: 'item-1',
                class: 'custom-class',
            },
            slots: {
                default: '<div>Content</div>',
            },
        })

        const accordionItem = screen.getByTestId('accordion-item')
        expect(accordionItem).toHaveClass('border-b', 'last:border-b-0', 'custom-class')
    })
})
