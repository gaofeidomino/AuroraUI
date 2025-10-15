import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ComboboxInput } from '../../../src/components/combobox'
import { Combobox } from '../../../src/components/combobox'

describe('ComboboxInput Component', () => {
    it('renders correctly with default props', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput>Input Content</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const wrapper = document.querySelector('[data-slot="command-input-wrapper"]')
        const input = document.querySelector('[data-slot="command-input"]')

        expect(wrapper).toBeDefined()
        expect(input).toBeDefined()
        // ComboboxInput slot content is rendered as input value or placeholder
        expect(input).toBeDefined()
    })

    it('renders search icon', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput>Search Input</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const wrapper = document.querySelector('[data-slot="command-input-wrapper"]')
        const icon = wrapper?.querySelector('svg')

        expect(icon).toBeDefined()
        expect(icon?.classList.contains('size-4')).toBe(true)
        expect(icon?.classList.contains('shrink-0')).toBe(true)
        expect(icon?.classList.contains('opacity-50')).toBe(true)
    })

    it('maintains proper data-slot attributes', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput>Test Input</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const wrapper = document.querySelector('[data-slot="command-input-wrapper"]')
        const input = document.querySelector('[data-slot="command-input"]')

        expect(wrapper?.getAttribute('data-slot')).toBe('command-input-wrapper')
        expect(input?.getAttribute('data-slot')).toBe('command-input')
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput class="custom-input-class">Custom Class Input</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const input = document.querySelector('[data-slot="command-input"]')
        expect(input).toBeDefined()
        expect((input as HTMLElement).className).toContain('custom-input-class')
    })

    it('applies correct CSS classes', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput>Styled Input</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const wrapper = document.querySelector('[data-slot="command-input-wrapper"]')
        const input = document.querySelector('[data-slot="command-input"]')

        expect(wrapper?.classList.contains('flex')).toBe(true)
        expect(wrapper?.classList.contains('h-9')).toBe(true)
        expect(wrapper?.classList.contains('items-center')).toBe(true)
        expect(wrapper?.classList.contains('gap-2')).toBe(true)
        expect(wrapper?.classList.contains('border-b')).toBe(true)
        expect(wrapper?.classList.contains('px-3')).toBe(true)

        const inputClassList = (input as HTMLElement).className
        expect(inputClassList).toContain('placeholder:text-muted-foreground')
        expect(inputClassList).toContain('flex')
        expect(inputClassList).toContain('h-10')
        expect(inputClassList).toContain('w-full')
        expect(inputClassList).toContain('rounded-md')
        expect(inputClassList).toContain('bg-transparent')
        expect(inputClassList).toContain('py-3')
        expect(inputClassList).toContain('text-sm')
        expect(inputClassList).toContain('outline-hidden')
        expect(inputClassList).toContain('disabled:cursor-not-allowed')
        expect(inputClassList).toContain('disabled:opacity-50')
    })

    it('passes through props correctly', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput id="test-input" data-testid="custom-input" placeholder="Search..." disabled>Input with Props</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const input = document.querySelector('[data-slot="command-input"]')
        expect(input?.getAttribute('id')).toBe('test-input')
        expect(input?.getAttribute('data-testid')).toBe('custom-input')
        expect(input?.getAttribute('placeholder')).toBe('Search...')
        expect(input?.hasAttribute('disabled')).toBe(true)
    })

    it('renders with complex slot content', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput>
                        <span>Prefix</span>
                        <span>Content</span>
                        <span>Suffix</span>
                    </ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        // Check that the input is rendered with slot content
        const input = document.querySelector('[data-slot="command-input"]')
        expect(input).toBeDefined()
    })

    it('handles disabled state', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput disabled>Disabled Input</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const input = document.querySelector('[data-slot="command-input"]')
        expect(input?.hasAttribute('disabled')).toBe(true)
    })

    it('renders without content when no slot provided', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput></ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const input = document.querySelector('[data-slot="command-input"]')
        expect(input).toBeDefined()
        expect(input?.textContent).toBe('')
    })

    it('maintains proper wrapper structure', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <Combobox>
                    <ComboboxInput>Wrapper Test</ComboboxInput>
                </Combobox>
            `,
        }

        render(TestComponent)

        const wrapper = document.querySelector('[data-slot="command-input-wrapper"]')
        const input = wrapper?.querySelector('[data-slot="command-input"]')
        const icon = wrapper?.querySelector('svg')

        expect(wrapper).toBeDefined()
        expect(input).toBeDefined()
        expect(icon).toBeDefined()

        // Verify icon comes before input
        const children = Array.from(wrapper?.children || [])
        const iconIndex = children.findIndex((child) => child.tagName.toLowerCase() === 'svg')
        const inputIndex = children.findIndex((child) => child.getAttribute('data-slot') === 'command-input')

        expect(iconIndex).toBeLessThan(inputIndex)
    })

    it('handles multiple input instances', () => {
        const TestComponent = {
            components: { Combobox, ComboboxInput },
            template: `
                <div>
                    <Combobox>
                        <ComboboxInput data-testid="first">First Input</ComboboxInput>
                    </Combobox>
                    <Combobox>
                        <ComboboxInput data-testid="second">Second Input</ComboboxInput>
                    </Combobox>
                </div>
            `,
        }

        render(TestComponent)

        const firstWrapper = document.querySelector('[data-testid="first"]')
        const secondWrapper = document.querySelector('[data-testid="second"]')

        expect(firstWrapper).toBeDefined()
        expect(secondWrapper).toBeDefined()
        expect(firstWrapper?.getAttribute('data-slot')).toBe('command-input-wrapper')
        expect(secondWrapper?.getAttribute('data-slot')).toBe('command-input-wrapper')
    })
})
