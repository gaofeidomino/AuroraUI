import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Accordion, AccordionItem, AccordionTrigger } from '../../src/components/accordion/index'

describe('AccordionTrigger Component', () => {
    it('renders correctly with default props', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Trigger Text</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveAttribute('data-slot', 'accordion-trigger')
        expect(trigger).toHaveTextContent('Trigger Text')
    })

    it('applies default classes correctly', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50', 'flex', 'flex-1', 'items-start', 'justify-between', 'gap-4', 'rounded-md', 'py-4', 'text-left', 'text-sm', 'font-medium', 'transition-all', 'outline-none', 'hover:underline', 'focus-visible:ring-[3px]', 'disabled:pointer-events-none', 'disabled:opacity-50')
    })

    it('applies custom class names', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger class="custom-class">Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toHaveClass('custom-class')
    })

    it('renders default chevron icon', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const icon = document.querySelector('[data-slot="accordion-trigger"] svg')
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveClass('text-muted-foreground', 'pointer-events-none', 'size-4', 'shrink-0', 'translate-y-0.5', 'transition-transform', 'duration-200')
    })

    it('renders custom icon when provided', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Trigger
                            <template #icon>
                                <span data-testid="custom-icon">Custom Icon</span>
                            </template>
                        </AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const customIcon = screen.getByTestId('custom-icon')
        expect(customIcon).toBeInTheDocument()
        expect(customIcon).toHaveTextContent('Custom Icon')
    })

    it('forwards props correctly', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger disabled class="test-class">Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveClass('test-class')
    })

    it('renders with slot content', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <span data-testid="slot-content">Slot Content</span>
                        </AccordionTrigger>
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
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger disabled>Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
    })

    it('combines default and custom classes correctly', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger class="custom-class">Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toHaveClass('custom-class')
        expect(trigger).toHaveClass('focus-visible:border-ring', 'flex', 'flex-1')
    })

    it('has correct button role and accessibility', () => {
        render({
            components: { Accordion, AccordionItem, AccordionTrigger },
            template: `
                <Accordion>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Trigger</AccordionTrigger>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger.tagName).toBe('BUTTON')
    })
})
