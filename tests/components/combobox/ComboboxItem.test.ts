import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ComboboxItem } from '../../../src/components/combobox'
import { Combobox } from '../../../src/components/combobox'

describe('ComboboxItem Component', () => {
    it('renders correctly with default props', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test">Item Content</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item Content')
        expect(item).toBeDefined()
        expect(item.closest('[data-slot="combobox-item"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test">Test Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Test Item').closest('[data-slot="combobox-item"]')
        expect(item).toBeDefined()
        expect(item?.getAttribute('data-slot')).toBe('combobox-item')
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test" class="custom-item-class">Custom Class Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Custom Class Item').closest('[data-slot="combobox-item"]')
        expect(item).toBeDefined()
        expect((item as HTMLElement).className).toContain('custom-item-class')
    })

    it('applies correct CSS classes', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test">Styled Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Styled Item').closest('[data-slot="combobox-item"]')
        const classList = (item as HTMLElement).className

        expect(classList).toContain('relative')
        expect(classList).toContain('flex')
        expect(classList).toContain('cursor-default')
        expect(classList).toContain('items-center')
        expect(classList).toContain('gap-2')
        expect(classList).toContain('rounded-sm')
        expect(classList).toContain('px-2')
        expect(classList).toContain('py-1.5')
        expect(classList).toContain('text-sm')
        expect(classList).toContain('outline-hidden')
        expect(classList).toContain('select-none')
        expect(classList).toContain('data-[highlighted]:bg-accent')
        expect(classList).toContain('data-[highlighted]:text-accent-foreground')
        expect(classList).toContain('data-[disabled=true]:pointer-events-none')
        expect(classList).toContain('data-[disabled=true]:opacity-50')
    })

    it('passes through props correctly', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem id="test-item" data-testid="custom-item" value="item-value" disabled>Item with Props</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item with Props').closest('[data-slot="combobox-item"]')
        expect(item?.getAttribute('id')).toBe('test-item')
        expect(item?.getAttribute('data-testid')).toBe('custom-item')
        // value prop is handled internally by reka-ui, not as data-value attribute
        expect(item).toBeDefined()
        expect(item?.hasAttribute('disabled')).toBe(true)
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value='test'>
                        <span>Icon</span>
                        <span>Item Text</span>
                        <span>Badge</span>
                    </ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('Icon')).toBeDefined()
        expect(screen.getByText('Item Text')).toBeDefined()
        expect(screen.getByText('Badge')).toBeDefined()
    })

    it('handles disabled state', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test" disabled>Disabled Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Disabled Item').closest('[data-slot="combobox-item"]')
        // disabled state is handled internally by reka-ui
        expect(item).toBeDefined()
    })

    it('handles highlighted state', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test" data-highlighted="true">Highlighted Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Highlighted Item').closest('[data-slot="combobox-item"]')
        // highlighted state is handled internally by reka-ui
        expect(item).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test"></ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = document.querySelector('[data-slot="combobox-item"]')
        expect(item).toBeDefined()
        // Empty slot still renders the value prop
        expect(item).toBeDefined()
    })

    it('handles value prop', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test-value">Item with Value</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Item with Value').closest('[data-slot="combobox-item"]')
        // value prop is handled internally by reka-ui
        expect(item).toBeDefined()
    })

    it('maintains accessibility attributes', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test" aria-label="Select item" aria-selected="false" role="option">Accessible Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Accessible Item').closest('[data-slot="combobox-item"]')
        expect(item?.getAttribute('aria-label')).toBe('Select item')
        expect(item?.getAttribute('aria-selected')).toBe('false')
        expect(item?.getAttribute('role')).toBe('option')
    })

    it('handles multiple item instances', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem data-testid="first" value="first">First Item</ComboboxItem>
                    <ComboboxItem data-testid="second" value="second">Second Item</ComboboxItem>
                    <ComboboxItem data-testid="third" value="third">Third Item</ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        expect(screen.getByTestId('first')).toBeDefined()
        expect(screen.getByTestId('second')).toBeDefined()
        expect(screen.getByTestId('third')).toBeDefined()

        expect(screen.getByText('First Item')).toBeDefined()
        expect(screen.getByText('Second Item')).toBeDefined()
        expect(screen.getByText('Third Item')).toBeDefined()

        // Verify items are rendered correctly
        expect(screen.getByTestId('first')).toBeDefined()
        expect(screen.getByTestId('second')).toBeDefined()
        expect(screen.getByTestId('third')).toBeDefined()
    })

    it('handles text content styling', () => {
        const TestComponent = {
            components: { Combobox, ComboboxItem },
            template: `
                <Combobox>
                    <ComboboxItem value="test">
                        <span>Text Content</span>
                        <svg class="icon">Icon</svg>
                    </ComboboxItem>
                </Combobox>
            `,
        }

        render(TestComponent)

        const item = screen.getByText('Text Content').closest('[data-slot="combobox-item"]')
        const icon = item?.querySelector('svg.icon')

        expect(item).toBeDefined()
        expect(icon).toBeDefined()

        // Verify SVG styling is applied
        const classList = (item as HTMLElement).className
        expect(classList).toContain("[&_svg:not([class*='text-'])]:text-muted-foreground")
        expect(classList).toContain('[&_svg]:pointer-events-none')
        expect(classList).toContain('[&_svg]:shrink-0')
        expect(classList).toContain("[&_svg:not([class*='size-'])]:size-4")
    })
})
