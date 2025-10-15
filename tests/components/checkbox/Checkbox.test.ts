import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { Checkbox } from '../../../src/components/checkbox'

describe('Checkbox Component', () => {
    it('renders correctly with default props', () => {
        render(Checkbox)

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox).toBeDefined()
        expect(checkbox?.getAttribute('data-slot')).toBe('checkbox')
    })

    it('renders with custom class', () => {
        render(Checkbox, {
            props: {
                class: 'custom-checkbox-class',
            },
        })

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox).toBeDefined()
        expect((checkbox as HTMLElement).className).toContain('custom-checkbox-class')
    })

    it('maintains proper data-slot attribute', () => {
        render(Checkbox)

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox?.getAttribute('data-slot')).toBe('checkbox')
    })

    it('passes through additional props', () => {
        render(Checkbox, {
            props: {
                id: 'test-checkbox',
                'data-testid': 'custom-checkbox',
                disabled: true,
            },
        })

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox?.getAttribute('id')).toBe('test-checkbox')
        expect(checkbox?.getAttribute('data-testid')).toBe('custom-checkbox')
        expect(checkbox?.hasAttribute('disabled')).toBe(true)
    })

    it('renders with proper accessibility attributes', () => {
        render(Checkbox, {
            props: {
                'aria-label': 'Test checkbox',
                'aria-describedby': 'checkbox-description',
            },
        })

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox?.getAttribute('aria-label')).toBe('Test checkbox')
        expect(checkbox?.getAttribute('aria-describedby')).toBe('checkbox-description')
    })

    it('applies correct CSS classes for styling', () => {
        render(Checkbox)

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox).toBeDefined()

        // Check if basic styling classes are applied
        const classList = (checkbox as HTMLElement).className
        expect(classList).toContain('peer')
        expect(classList).toContain('border-input')
        expect(classList).toContain('size-4')
        expect(classList).toContain('shrink-0')
        expect(classList).toContain('rounded-[4px]')
    })

    it('handles disabled state styling', () => {
        render(Checkbox, {
            props: {
                disabled: true,
            },
        })

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox?.hasAttribute('disabled')).toBe(true)

        const classList = (checkbox as HTMLElement).className
        expect(classList).toContain('disabled:cursor-not-allowed')
        expect(classList).toContain('disabled:opacity-50')
    })

    it('renders as button element', () => {
        render(Checkbox)

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox?.tagName.toLowerCase()).toBe('button')
    })

    it('has correct role attribute', () => {
        render(Checkbox)

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox?.getAttribute('role')).toBe('checkbox')
    })

    it('renders without content when no slot provided', () => {
        render(Checkbox)

        const checkbox = document.querySelector('[data-slot="checkbox"]')
        expect(checkbox).toBeDefined()
        expect(checkbox?.textContent).toBe('')
    })
})
