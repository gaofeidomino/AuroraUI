import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Switch } from '../../../src/components/switch/index'

describe('Switch Component', () => {
    it('renders correctly with default props', () => {
        render(Switch)

        const switchElement = document.querySelector('[data-slot="switch"]')
        expect(switchElement).toBeInTheDocument()
        expect(switchElement).toHaveAttribute('data-slot', 'switch')
    })

    it('forwards props correctly', () => {
        render(Switch, {
            props: {
                checked: false,
                class: 'custom-class',
            },
        })

        const switchElement = document.querySelector('[data-slot="switch"]')
        expect(switchElement).toBeInTheDocument()
        expect(switchElement).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Switch, {
            slots: {
                thumb: '<span data-testid="thumb-content">Thumb</span>',
            },
        })

        const thumbContent = screen.getByTestId('thumb-content')
        expect(thumbContent).toBeInTheDocument()
        expect(thumbContent).toHaveTextContent('Thumb')
    })

    it('has correct component name', () => {
        render(Switch)

        const switchElement = document.querySelector('[data-slot="switch"]')
        expect(switchElement).toBeInTheDocument()
        expect(switchElement).toHaveAttribute('data-slot', 'switch')
    })
})
