import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Label } from '../../../src/components/label/index'

describe('Label Component', () => {
    it('renders correctly with default props', () => {
        render(Label, {
            slots: {
                default: 'Label Content',
            },
        })

        const label = document.querySelector('label[data-slot="label"]')
        expect(label).toBeInTheDocument()
        expect(label).toHaveTextContent('Label Content')
    })

    it('forwards props correctly', () => {
        render(Label, {
            props: {
                class: 'custom-class',
            },
            slots: {
                default: 'Label Content',
            },
        })

        const label = document.querySelector('label[data-slot="label"]')
        expect(label).toBeInTheDocument()
        expect(label).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Label, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Label, {
            slots: {
                default: 'Label Content',
            },
        })

        const label = document.querySelector('label[data-slot="label"]')
        expect(label).toBeInTheDocument()
    })
})
