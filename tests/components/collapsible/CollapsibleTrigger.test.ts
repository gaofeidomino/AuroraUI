import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Collapsible, CollapsibleTrigger } from '../../../src/components/collapsible'

describe('CollapsibleTrigger Component', () => {
    it('renders correctly within Collapsible context', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <Collapsible>
                    <CollapsibleTrigger>
                        Trigger Button
                    </CollapsibleTrigger>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByText('Trigger Button')
        expect(trigger).toBeDefined()
        expect(trigger.closest('[data-slot="collapsible-trigger"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <Collapsible>
                    <CollapsibleTrigger>
                        Test Trigger
                    </CollapsibleTrigger>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByText('Test Trigger').closest('[data-slot="collapsible-trigger"]')
        expect(trigger).toBeDefined()
        expect(trigger?.getAttribute('data-slot')).toBe('collapsible-trigger')
    })

    it('renders as button by default', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <Collapsible>
                    <CollapsibleTrigger>
                        Button Trigger
                    </CollapsibleTrigger>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByText('Button Trigger').closest('[data-slot="collapsible-trigger"]')
        expect(trigger?.tagName.toLowerCase()).toBe('button')
    })

    it('renders with complex content', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <Collapsible>
                    <CollapsibleTrigger>
                        <span>Icon</span>
                        <span>Trigger Text</span>
                        <span>Arrow</span>
                    </CollapsibleTrigger>
                </Collapsible>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Icon')).toBeDefined()
        expect(screen.getByText('Trigger Text')).toBeDefined()
        expect(screen.getByText('Arrow')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <Collapsible>
                    <CollapsibleTrigger />
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = document.querySelector('[data-slot="collapsible-trigger"]')
        expect(trigger).toBeDefined()
        expect(trigger?.textContent).toBe('')
    })

    it('maintains accessibility attributes', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <Collapsible>
                    <CollapsibleTrigger aria-label="Toggle collapsible">
                        Accessible Trigger
                    </CollapsibleTrigger>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByText('Accessible Trigger').closest('[data-slot="collapsible-trigger"]')
        expect(trigger?.getAttribute('aria-label')).toBe('Toggle collapsible')
        expect(trigger?.getAttribute('aria-expanded')).toBe('false')
    })

    it('handles multiple trigger instances', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleTrigger },
            template: `
                <div>
                    <Collapsible>
                        <CollapsibleTrigger data-testid="first">First Trigger</CollapsibleTrigger>
                    </Collapsible>
                    <Collapsible>
                        <CollapsibleTrigger data-testid="second">Second Trigger</CollapsibleTrigger>
                    </Collapsible>
                </div>
            `,
        }

        render(TestComponent)

        expect(screen.getByTestId('first')).toBeDefined()
        expect(screen.getByTestId('second')).toBeDefined()
        expect(screen.getByText('First Trigger')).toBeDefined()
        expect(screen.getByText('Second Trigger')).toBeDefined()
    })
})
