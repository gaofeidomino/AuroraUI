import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../src/components/collapsible'

describe('Collapsible Integration Tests', () => {
    it('renders complete collapsible with trigger and content', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleTrigger>Toggle</CollapsibleTrigger>
                    <CollapsibleContent>Collapsible Content</CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Toggle')).toBeDefined()
        expect(screen.getByText('Collapsible Content')).toBeDefined()

        const trigger = screen.getByText('Toggle').closest('[data-slot="collapsible-trigger"]')
        const content = screen.getByText('Collapsible Content').closest('[data-slot="collapsible-content"]')

        expect(trigger).toBeDefined()
        expect(content).toBeDefined()
    })

    it('maintains proper component hierarchy', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <Collapsible>
                    <CollapsibleTrigger data-testid="trigger">Toggle Content</CollapsibleTrigger>
                    <CollapsibleContent data-testid="content">
                        <div>
                            <h3>Content Title</h3>
                            <p>Content description</p>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = screen.getByTestId('trigger')
        const content = screen.getByTestId('content')

        expect(trigger).toBeDefined()
        expect(content).toBeDefined()

        // Check that they are properly nested within the collapsible
        const collapsible = document.querySelector('[data-slot="collapsible"]')
        expect(collapsible?.contains(trigger)).toBe(true)
        expect(collapsible?.contains(content)).toBe(true)
    })

    it('handles multiple collapsible instances independently', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <div>
                    <Collapsible defaultOpen>
                        <CollapsibleTrigger>First Toggle</CollapsibleTrigger>
                        <CollapsibleContent>First Content</CollapsibleContent>
                    </Collapsible>
                    <Collapsible defaultOpen>
                        <CollapsibleTrigger>Second Toggle</CollapsibleTrigger>
                        <CollapsibleContent>Second Content</CollapsibleContent>
                    </Collapsible>
                </div>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('First Toggle')).toBeDefined()
        expect(screen.getByText('First Content')).toBeDefined()
        expect(screen.getByText('Second Toggle')).toBeDefined()
        expect(screen.getByText('Second Content')).toBeDefined()

        // Verify they are in separate collapsible containers
        const collapsibles = document.querySelectorAll('[data-slot="collapsible"]')
        expect(collapsibles).toHaveLength(2)
    })

    it('renders with custom styling and props', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <Collapsible class="custom-collapsible" id="test-collapsible" defaultOpen>
                    <CollapsibleTrigger class="custom-trigger" id="test-trigger">
                        Custom Trigger
                    </CollapsibleTrigger>
                    <CollapsibleContent class="custom-content">
                        Custom Content
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const collapsible = document.querySelector('[data-slot="collapsible"]')
        const trigger = document.querySelector('[data-slot="collapsible-trigger"]')
        const content = document.querySelector('[data-slot="collapsible-content"]')

        expect(collapsible?.getAttribute('id')).toBe('test-collapsible')
        expect(trigger?.getAttribute('id')).toBe('test-trigger')
        expect(content).toBeDefined()

        expect((collapsible as HTMLElement).className).toContain('custom-collapsible')
        expect((trigger as HTMLElement).className).toContain('custom-trigger')
        expect((content as HTMLElement).className).toContain('custom-content')
    })

    it('handles nested collapsible components', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleTrigger>Main Toggle</CollapsibleTrigger>
                    <CollapsibleContent>
                        <div>Main Content</div>
                        <Collapsible defaultOpen>
                            <CollapsibleTrigger>Nested Toggle</CollapsibleTrigger>
                            <CollapsibleContent>Nested Content</CollapsibleContent>
                        </Collapsible>
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Main Toggle')).toBeDefined()
        expect(screen.getByText('Main Content')).toBeDefined()
        expect(screen.getByText('Nested Toggle')).toBeDefined()
        expect(screen.getByText('Nested Content')).toBeDefined()

        // Verify nested structure
        const mainCollapsible = document.querySelector('[data-slot="collapsible"]')
        const nestedCollapsible = mainCollapsible?.querySelector('[data-slot="collapsible"]')

        expect(nestedCollapsible).toBeDefined()
    })

    it('renders with default open state', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleTrigger>Open Toggle</CollapsibleTrigger>
                    <CollapsibleContent>Open Content</CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Open Toggle')).toBeDefined()
        expect(screen.getByText('Open Content')).toBeDefined()

        const collapsible = document.querySelector('[data-slot="collapsible"]')
        expect(collapsible).toBeDefined()
    })

    it('handles disabled state across components', () => {
        const TestComponent = {
            components: {
                Collapsible,
                CollapsibleTrigger,
                CollapsibleContent,
            },
            template: `
                <Collapsible disabled>
                    <CollapsibleTrigger disabled>Disabled Toggle</CollapsibleTrigger>
                    <CollapsibleContent>Disabled Content</CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const trigger = document.querySelector('[data-slot="collapsible-trigger"]')
        const content = document.querySelector('[data-slot="collapsible-content"]')

        expect(trigger?.hasAttribute('disabled')).toBe(true)
        expect(content).toBeDefined()
    })
})
