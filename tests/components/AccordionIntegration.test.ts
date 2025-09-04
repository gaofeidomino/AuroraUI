import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../src/components/accordion/index'

describe('Accordion Integration', () => {
    it('renders complete accordion structure correctly', () => {
        render({
            components: {
                Accordion,
                AccordionItem,
                AccordionTrigger,
                AccordionContent,
            },
            template: `
                <Accordion :defaultValue="['item-1', 'item-2']">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Section 1</AccordionTrigger>
                        <AccordionContent>Content for section 1</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Section 2</AccordionTrigger>
                        <AccordionContent>Content for section 2</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        // Check main accordion container
        const accordion = document.querySelector('[data-slot="accordion"]')
        expect(accordion).toBeInTheDocument()

        // Check accordion items
        const items = document.querySelectorAll('[data-slot="accordion-item"]')
        expect(items).toHaveLength(2)

        // Check triggers
        const triggers = document.querySelectorAll('[data-slot="accordion-trigger"]')
        expect(triggers).toHaveLength(2)
        expect(triggers[0]).toHaveTextContent('Section 1')
        expect(triggers[1]).toHaveTextContent('Section 2')

        // Check content areas
        const contents = document.querySelectorAll('[data-slot="accordion-content"]')
        expect(contents).toHaveLength(2)
        expect(contents[0]).toHaveTextContent('Content for section 1')
        expect(contents[1]).toHaveTextContent('Content for section 2')
    })

    it('renders accordion with custom styling', () => {
        render({
            components: {
                Accordion,
                AccordionItem,
                AccordionTrigger,
                AccordionContent,
            },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1" class="custom-item">
                        <AccordionTrigger class="custom-trigger">Custom Trigger</AccordionTrigger>
                        <AccordionContent class="custom-content">Custom Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const item = document.querySelector('[data-slot="accordion-item"]')
        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        const content = document.querySelector('[data-slot="accordion-content"]')

        expect(item).toHaveClass('custom-item')
        expect(trigger).toHaveClass('custom-trigger')

        // Custom class should be applied to inner div
        const innerDiv = content.querySelector('div')
        expect(innerDiv).toHaveClass('custom-content')
    })

    it('renders accordion with multiple items and complex content', () => {
        render({
            components: {
                Accordion,
                AccordionItem,
                AccordionTrigger,
                AccordionContent,
            },
            template: `
                <Accordion :defaultValue="['faq-1', 'faq-2']">
                    <AccordionItem value="faq-1">
                        <AccordionTrigger>What is AuroraUI?</AccordionTrigger>
                        <AccordionContent>
                            <p>AuroraUI is a modern Vue.js component library.</p>
                            <ul>
                                <li>Built with Vue 3</li>
                                <li>TypeScript support</li>
                                <li>Tailwind CSS styling</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                        <AccordionTrigger>How to use components?</AccordionTrigger>
                        <AccordionContent>
                            <p>Import and use components in your Vue templates.</p>
                            <code>import { Button } from 'aurora-ui'</code>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        // Check FAQ structure
        const items = document.querySelectorAll('[data-slot="accordion-item"]')
        expect(items).toHaveLength(2)

        // Check questions
        const questions = document.querySelectorAll('[data-slot="accordion-trigger"]')
        expect(questions[0]).toHaveTextContent('What is AuroraUI?')
        expect(questions[1]).toHaveTextContent('How to use components?')

        // Check answers
        const answers = document.querySelectorAll('[data-slot="accordion-content"]')
        expect(answers[0]).toHaveTextContent('AuroraUI is a modern Vue.js component library')
        expect(answers[0]).toHaveTextContent('Built with Vue 3')
        expect(answers[1]).toHaveTextContent('Import and use components in your Vue templates')
    })

    it('renders accordion with icon slots', () => {
        render({
            components: {
                Accordion,
                AccordionItem,
                AccordionTrigger,
                AccordionContent,
            },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Section with Icon
                            <template #icon>
                                <span data-testid="custom-icon">🔽</span>
                            </template>
                        </AccordionTrigger>
                        <AccordionContent>Content with custom icon</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const customIcon = screen.getByTestId('custom-icon')
        expect(customIcon).toBeInTheDocument()
        expect(customIcon).toHaveTextContent('🔽')

        // Default chevron should not be present when custom icon is provided
        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        const defaultChevron = trigger.querySelector('svg')
        expect(defaultChevron).not.toBeInTheDocument()
    })

    it('maintains proper DOM structure and accessibility', () => {
        render({
            components: {
                Accordion,
                AccordionItem,
                AccordionTrigger,
                AccordionContent,
            },
            template: `
                <Accordion :defaultValue="['item-1']">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Accessible Section</AccordionTrigger>
                        <AccordionContent>Accessible content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            `,
        })

        const accordion = document.querySelector('[data-slot="accordion"]')
        const item = document.querySelector('[data-slot="accordion-item"]')
        const trigger = document.querySelector('[data-slot="accordion-trigger"]')
        const content = document.querySelector('[data-slot="accordion-content"]')

        // Check proper nesting
        expect(accordion).toContainElement(item)
        expect(item).toContainElement(trigger)
        expect(item).toContainElement(content)

        // Check data attributes for styling and state management
        expect(accordion).toHaveAttribute('data-slot', 'accordion')
        expect(item).toHaveAttribute('data-slot', 'accordion-item')
        expect(trigger).toHaveAttribute('data-slot', 'accordion-trigger')
        expect(content).toHaveAttribute('data-slot', 'accordion-content')

        // Check button role for trigger
        expect(trigger.tagName).toBe('BUTTON')
    })
})
