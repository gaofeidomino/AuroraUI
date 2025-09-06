import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Accordion, AccordionItem } from '../../../src/components/accordion/index'

describe('AccordionItem Component', () => {
    it('renders correctly with default props', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <div>Item Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordionItem = document.querySelector('[data-slot="accordion-item"]')
        expect(accordionItem).toBeInTheDocument()
        expect(accordionItem).toHaveAttribute('data-slot', 'accordion-item')
        expect(accordionItem).toHaveAttribute('data-state', 'closed')
    })

    it('applies default classes correctly', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <div>Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordionItem = document.querySelector('[data-slot="accordion-item"]')
        expect(accordionItem).toHaveClass('border-b', 'last:border-b-0')
    })

    it('applies custom class names', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1" class="custom-class">
                        <div>Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordionItem = document.querySelector('[data-slot="accordion-item"]')
        expect(accordionItem).toHaveClass('custom-class')
    })

    it('forwards props correctly', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1" disabled class="test-class">
                        <div>Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordionItem = document.querySelector('[data-slot="accordion-item"]')
        expect(accordionItem).toBeInTheDocument()
        expect(accordionItem).toHaveClass('test-class')
    })

    it('renders with slot content', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <div data-testid="slot-content">Slot Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('handles disabled state', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1" disabled>
                        <div>Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordionItem = document.querySelector('[data-slot="accordion-item"]')
        expect(accordionItem).toBeInTheDocument()
    })

    it('combines default and custom classes correctly', () => {
        render({
            components: { Accordion, AccordionItem },
            template: `
                <Accordion>
                    <AccordionItem value="item-1" class="custom-class">
                        <div>Content</div>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordionItem = document.querySelector('[data-slot="accordion-item"]')
        expect(accordionItem).toHaveClass('border-b', 'last:border-b-0', 'custom-class')
    })
})
