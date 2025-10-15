import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Collapsible, CollapsibleContent } from '../../../src/components/collapsible'

describe('CollapsibleContent Component', () => {
    it('renders correctly within Collapsible context', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleContent },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleContent>
                        Collapsible Content
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const content = screen.getByText('Collapsible Content')
        expect(content).toBeDefined()
        expect(content.closest('[data-slot="collapsible-content"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleContent },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleContent>
                        Test Content
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const content = screen.getByText('Test Content').closest('[data-slot="collapsible-content"]')
        expect(content).toBeDefined()
        expect(content?.getAttribute('data-slot')).toBe('collapsible-content')
    })

    it('renders with complex content', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleContent },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleContent>
                        <div>
                            <h3>Content Title</h3>
                            <p>Content description</p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                            </ul>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Content Title')).toBeDefined()
        expect(screen.getByText('Content description')).toBeDefined()
        expect(screen.getByText('Item 1')).toBeDefined()
        expect(screen.getByText('Item 2')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleContent },
            template: `
                <Collapsible defaultOpen>
                    <CollapsibleContent />
                </Collapsible>
            `,
        }

        render(TestComponent)

        const content = document.querySelector('[data-slot="collapsible-content"]')
        expect(content).toBeDefined()
        expect(content?.textContent).toBe('')
    })

    it('handles forceMount prop', () => {
        const TestComponent = {
            components: { Collapsible, CollapsibleContent },
            template: `
                <Collapsible>
                    <CollapsibleContent forceMount>
                        Force Mounted Content
                    </CollapsibleContent>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const content = screen.getByText('Force Mounted Content')
        expect(content).toBeDefined()
        expect(content.closest('[data-slot="collapsible-content"]')).toBeDefined()
    })
})
