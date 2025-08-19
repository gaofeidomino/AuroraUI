import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Label } from '../../src/components/label'

describe('Label Component', () => {
    it('renders correctly with default content', () => {
        render(Label, {
            slots: {
                default: 'Label Text',
            },
        })

        const label = screen.getByText('Label Text')
        expect(label).toBeDefined()
        expect(label.closest('[data-slot="label"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Label, {
            props: {
                class: 'custom-label-class',
            },
            slots: {
                default: 'Label Text',
            },
        })

        const label = screen.getByText('Label Text')
        const labelElement = label.closest('[data-slot="label"]')
        expect(labelElement).toBeDefined()
        expect((labelElement as HTMLElement).className).toContain('custom-label-class')
    })

    it('renders with for attribute', () => {
        render(Label, {
            attrs: {
                for: 'input-id',
            },
            slots: {
                default: 'Label for Input',
            },
        })

        const label = screen.getByText('Label for Input')
        const labelElement = label.closest('[data-slot="label"]')
        expect(labelElement).toBeDefined()
        expect((labelElement as HTMLElement).getAttribute('for')).toBe('input-id')
    })

    it('renders with disabled state', () => {
        render(Label, {
            attrs: {
                disabled: true,
            },
            slots: {
                default: 'Disabled Label',
            },
        })

        const label = screen.getByText('Disabled Label')
        expect(label).toBeDefined()
    })

    it('renders with required indicator', () => {
        render(Label, {
            attrs: {
                required: true,
            },
            slots: {
                default: 'Required Label',
            },
        })

        const label = screen.getByText('Required Label')
        expect(label).toBeDefined()
    })

    it('renders with custom attributes', () => {
        render(Label, {
            attrs: {
                id: 'test-label',
                'data-testid': 'custom-label',
            },
            slots: {
                default: 'Custom Label',
            },
        })

        const label = screen.getByText('Custom Label')
        const labelElement = label.closest('[data-slot="label"]')
        expect(labelElement).toBeDefined()
        expect((labelElement as HTMLElement).getAttribute('id')).toBe('test-label')
        expect((labelElement as HTMLElement).getAttribute('data-testid')).toBe('custom-label')
    })

    it('renders with complex content', () => {
        render(Label, {
            slots: {
                default: '<span>Complex</span> <strong>Label</strong>',
            },
        })

        const label = screen.getByText('Complex')
        expect(label).toBeDefined()
        expect(screen.getByText('Label')).toBeDefined()
    })
})
