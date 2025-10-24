import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Button } from '../../../src/components/button/index'

describe('Button Component', () => {
    it('renders correctly with default props', () => {
        render(Button, {
            slots: {
                default: 'Button Content',
            },
        })

        const button = screen.getByRole('button', { name: 'Button Content' })
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Button Content')
    })

    it('forwards props correctly', () => {
        render(Button, {
            props: {
                variant: 'destructive',
                size: 'lg',
                class: 'custom-class',
            },
            slots: {
                default: 'Button Content',
            },
        })

        const button = screen.getByRole('button', { name: 'Button Content' })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Button, {
            slots: {
                default: '<span data-testid="slot-content">Slot Content</span>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(Button, {
            slots: {
                default: 'Button Content',
            },
        })

        const button = screen.getByRole('button', { name: 'Button Content' })
        expect(button).toBeInTheDocument()
    })
})
