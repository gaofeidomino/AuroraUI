import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Accordion, AccordionItem, AccordionContent } from '../../src/components/accordion/index'

describe('AccordionContent Component', () => {
    it('renders correctly with default props', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent>Content Text</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveAttribute('data-slot', 'accordion-content')
        expect(content).toHaveTextContent('Content Text')
    })

    it('applies default classes correctly', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')
        expect(content).toHaveClass('data-[state=closed]:animate-accordion-up', 'data-[state=open]:animate-accordion-down', 'overflow-hidden', 'text-sm')
    })

    it('applies custom class names', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent class="custom-class">Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')
        expect(content).toBeInTheDocument()

        // Check that custom class is applied to the inner div
        const innerDiv = content.querySelector('div')
        expect(innerDiv).toHaveClass('custom-class')
    })

    it('forwards props correctly', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent class="test-class">Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')
        expect(content).toBeInTheDocument()

        const innerDiv = content.querySelector('div')
        expect(innerDiv).toHaveClass('test-class')
    })

    it('renders with slot content', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent>
                            <span data-testid="slot-content">Slot Content</span>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct inner div structure', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')
        const innerDiv = content.querySelector('div')

        expect(innerDiv).toBeInTheDocument()
        expect(innerDiv).toHaveClass('pt-0', 'pb-4')
    })

    it('combines default and custom classes correctly', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent class="custom-class">Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')
        expect(content).toHaveClass('data-[state=closed]:animate-accordion-up', 'data-[state=open]:animate-accordion-down')

        const innerDiv = content.querySelector('div')
        expect(innerDiv).toHaveClass('pt-0', 'pb-4', 'custom-class')
    })

    it('has correct animation classes for accordion states', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const content = document.querySelector('[data-slot="accordion-content"]')

        // Check for accordion animation classes
        expect(content).toHaveClass('data-[state=closed]:animate-accordion-up')
        expect(content).toHaveClass('data-[state=open]:animate-accordion-down')
    })

    it('renders with complex slot content', () => {
        render({
            components: { Accordion, AccordionItem, AccordionContent },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionContent>
                            <div data-testid="complex-content">
                                <h3>Title</h3>
                                <p>Description</p>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const complexContent = screen.getByTestId('complex-content')
        expect(complexContent).toBeInTheDocument()
        expect(complexContent).toHaveTextContent('Title')
        expect(complexContent).toHaveTextContent('Description')
        expect(complexContent).toHaveTextContent('Item 1')
        expect(complexContent).toHaveTextContent('Item 2')
    })
})
