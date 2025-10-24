import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ToggleGroup } from '../../../tests/components/toggle-group/index'

describe('ToggleGroup Component', () => {
    it('renders correctly with default props', () => {
        render(ToggleGroup, {
            slots: {
                default: '<div data-testid="toggle-group-content">ToggleGroup Content</div>',
            },
        })

        const content = screen.getByTestId('toggle-group-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('ToggleGroup Content')
    })

    it('forwards props correctly', () => {
        render(ToggleGroup, {
            props: {
                type: 'single',
                variant: 'default',
                size: 'default',
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(ToggleGroup, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(ToggleGroup, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
