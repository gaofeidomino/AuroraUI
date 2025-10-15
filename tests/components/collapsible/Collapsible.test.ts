import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Collapsible } from '../../../src/components/collapsible'

describe('Collapsible Component', () => {
    it('renders correctly with default props', () => {
        render(Collapsible, {
            slots: {
                default: 'Collapsible Content',
            },
        })

        const collapsible = screen.getByText('Collapsible Content')
        expect(collapsible).toBeDefined()
        expect(collapsible.closest('[data-slot="collapsible"]')).toBeDefined()
    })

    it('provides open state to slot', () => {
        const TestComponent = {
            components: { Collapsible },
            template: `
                <Collapsible>
                    <template #default="{ open }">
                        <span data-testid="open-state">{{ open ? 'Open' : 'Closed' }}</span>
                    </template>
                </Collapsible>
            `,
        }

        render(TestComponent)

        const openState = screen.getByTestId('open-state')
        expect(openState).toBeDefined()
        expect(openState.textContent).toBe('Closed') // Default state is closed
    })

    it('renders with default open state', () => {
        render(Collapsible, {
            props: {
                defaultOpen: true,
            },
            slots: {
                default: 'Open Content',
            },
        })

        const collapsible = screen.getByText('Open Content')
        expect(collapsible).toBeDefined()
        expect(collapsible.closest('[data-slot="collapsible"]')).toBeDefined()
    })

    it('renders with open prop', () => {
        render(Collapsible, {
            props: {
                open: true,
            },
            slots: {
                default: 'Controlled Open Content',
            },
        })

        const collapsible = screen.getByText('Controlled Open Content')
        expect(collapsible).toBeDefined()
        expect(collapsible.closest('[data-slot="collapsible"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(Collapsible, {
            slots: {
                default: 'Test Content',
            },
        })

        const collapsible = screen.getByText('Test Content').closest('[data-slot="collapsible"]')
        expect(collapsible).toBeDefined()
        expect(collapsible?.getAttribute('data-slot')).toBe('collapsible')
    })

    it('passes through additional props', () => {
        render(Collapsible, {
            props: {
                id: 'test-collapsible',
                'data-testid': 'custom-collapsible',
            },
            slots: {
                default: 'Content with Props',
            },
        })

        const collapsible = screen.getByText('Content with Props').closest('[data-slot="collapsible"]')
        expect(collapsible?.getAttribute('id')).toBe('test-collapsible')
        expect(collapsible?.getAttribute('data-testid')).toBe('custom-collapsible')
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { Collapsible },
            template: `
                <Collapsible>
                    <template #default="{ open }">
                        <div>
                            <h3>Header</h3>
                            <p>State: {{ open ? 'Open' : 'Closed' }}</p>
                        </div>
                    </template>
                </Collapsible>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Header')).toBeDefined()
        expect(screen.getByText('State: Closed')).toBeDefined()
    })

    it('handles disabled state', () => {
        render(Collapsible, {
            props: {
                disabled: true,
            },
            slots: {
                default: 'Disabled Content',
            },
        })

        const collapsible = screen.getByText('Disabled Content').closest('[data-slot="collapsible"]')
        expect(collapsible).toBeDefined()
        // Note: disabled prop may not be directly applied to the root element
        // but affects the internal behavior
    })

    it('renders without content when no slot provided', () => {
        render(Collapsible)

        const collapsible = document.querySelector('[data-slot="collapsible"]')
        expect(collapsible).toBeDefined()
        expect(collapsible?.textContent).toBe('')
    })

    it('provides correct open state in different scenarios', () => {
        // Test with defaultOpen
        const { unmount: unmountDefault } = render(Collapsible, {
            props: {
                defaultOpen: true,
            },
            slots: {
                default: ({ open }: { open: boolean }) => `Default Open: ${open}`,
            },
        })

        expect(screen.getByText('Default Open: true')).toBeDefined()
        unmountDefault()

        // Test with controlled open
        render(Collapsible, {
            props: {
                open: false,
            },
            slots: {
                default: ({ open }: { open: boolean }) => `Controlled: ${open}`,
            },
        })

        expect(screen.getByText('Controlled: false')).toBeDefined()
    })

    it('handles multiple collapsible instances', () => {
        const TestComponent = {
            components: { Collapsible },
            template: `
                <div>
                    <Collapsible>
                        <template #default="{ open }">
                            <span data-testid="first">{{ open ? 'First Open' : 'First Closed' }}</span>
                        </template>
                    </Collapsible>
                    <Collapsible>
                        <template #default="{ open }">
                            <span data-testid="second">{{ open ? 'Second Open' : 'Second Closed' }}</span>
                        </template>
                    </Collapsible>
                </div>
            `,
        }

        render(TestComponent)

        expect(screen.getByTestId('first').textContent).toBe('First Closed')
        expect(screen.getByTestId('second').textContent).toBe('Second Closed')
    })
})
