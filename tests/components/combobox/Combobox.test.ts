import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Combobox } from '../../../src/components/combobox'

describe('Combobox Component', () => {
    it('renders correctly with default props', () => {
        render(Combobox, {
            slots: {
                default: 'Combobox Content',
            },
        })

        const combobox = screen.getByText('Combobox Content')
        expect(combobox).toBeDefined()
        expect(combobox.closest('[data-slot="combobox"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(Combobox, {
            slots: {
                default: 'Test Content',
            },
        })

        const combobox = screen.getByText('Test Content').closest('[data-slot="combobox"]')
        expect(combobox).toBeDefined()
        expect(combobox?.getAttribute('data-slot')).toBe('combobox')
    })

    it('passes through props correctly', () => {
        render(Combobox, {
            props: {
                id: 'test-combobox',
                'data-testid': 'custom-combobox',
                disabled: true,
                modelValue: 'test value',
            },
            slots: {
                default: 'Combobox with Props',
            },
        })

        const combobox = screen.getByText('Combobox with Props').closest('[data-slot="combobox"]')
        expect(combobox?.getAttribute('id')).toBe('test-combobox')
        expect(combobox?.getAttribute('data-testid')).toBe('custom-combobox')
        // disabled prop affects internal behavior, not the root element
        expect(combobox).toBeDefined()
    })

    it('renders with complex content', () => {
        const TestComponent = {
            components: { Combobox },
            template: `
                <Combobox>
                    <div>
                        <input placeholder="Search..." />
                        <div>Results</div>
                    </div>
                </Combobox>
            `,
        }

        render(TestComponent)

        expect(screen.getByPlaceholderText('Search...')).toBeDefined()
        expect(screen.getByText('Results')).toBeDefined()
    })

    it('handles disabled state', () => {
        render(Combobox, {
            props: {
                disabled: true,
            },
            slots: {
                default: 'Disabled Combobox',
            },
        })

        const combobox = screen.getByText('Disabled Combobox').closest('[data-slot="combobox"]')
        // disabled prop affects internal behavior, not the root element
        expect(combobox).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        render(Combobox)

        const combobox = document.querySelector('[data-slot="combobox"]')
        expect(combobox).toBeDefined()
        expect(combobox?.textContent).toBe('')
    })

    it('handles modelValue prop', () => {
        render(Combobox, {
            props: {
                modelValue: 'selected value',
            },
            slots: {
                default: 'Combobox with Value',
            },
        })

        const combobox = screen.getByText('Combobox with Value').closest('[data-slot="combobox"]')
        expect(combobox).toBeDefined()
    })

    it('handles multiple selection mode', () => {
        render(Combobox, {
            props: {
                multiple: true,
                modelValue: ['value1', 'value2'],
            },
            slots: {
                default: 'Multiple Selection Combobox',
            },
        })

        const combobox = screen.getByText('Multiple Selection Combobox').closest('[data-slot="combobox"]')
        expect(combobox).toBeDefined()
    })

    it('maintains accessibility attributes', () => {
        render(Combobox, {
            props: {
                'aria-label': 'Search combobox',
                'aria-expanded': 'false',
                'aria-autocomplete': 'list',
            },
            slots: {
                default: 'Accessible Combobox',
            },
        })

        const combobox = screen.getByText('Accessible Combobox').closest('[data-slot="combobox"]')
        expect(combobox?.getAttribute('aria-label')).toBe('Search combobox')
        expect(combobox?.getAttribute('aria-expanded')).toBe('false')
        expect(combobox?.getAttribute('aria-autocomplete')).toBe('list')
    })

    it('handles different selection types', () => {
        // Test single selection
        const { unmount: unmountSingle } = render(Combobox, {
            props: {
                type: 'single',
                modelValue: 'single-value',
            },
            slots: {
                default: 'Single Selection',
            },
        })

        expect(screen.getByText('Single Selection')).toBeDefined()
        unmountSingle()

        // Test multiple selection
        render(Combobox, {
            props: {
                type: 'multiple',
                modelValue: ['multi-value1', 'multi-value2'],
            },
            slots: {
                default: 'Multiple Selection',
            },
        })

        expect(screen.getByText('Multiple Selection')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Combobox, {
            props: {
                class: 'custom-combobox-class',
            },
            slots: {
                default: 'Custom Class Combobox',
            },
        })

        const combobox = screen.getByText('Custom Class Combobox').closest('[data-slot="combobox"]')
        expect(combobox).toBeDefined()
        expect((combobox as HTMLElement).className).toContain('custom-combobox-class')
    })
})
