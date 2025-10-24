import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ToggleGroup, ToggleGroupItem } from '../../../tests/components/toggle-group/index'

describe('ToggleGroupItem Component', () => {
    it('renders correctly within ToggleGroup context', () => {
        render({
            components: { ToggleGroup, ToggleGroupItem },
            template: `
                <ToggleGroup>
                    <ToggleGroupItem value="item1">
                        Item 1
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const content = screen.getByText('Item 1')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within ToggleGroup context', () => {
        render({
            components: { ToggleGroup, ToggleGroupItem },
            template: `
                <ToggleGroup>
                    <ToggleGroupItem value="item2" :disabled="false">
                        Item 2
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const content = screen.getByText('Item 2')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content within ToggleGroup context', () => {
        render({
            components: { ToggleGroup, ToggleGroupItem },
            template: `
                <ToggleGroup>
                    <ToggleGroupItem value="item1">
                        <div data-testid="slot-content">Slot Content</div>
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name within ToggleGroup context', () => {
        render({
            components: { ToggleGroup, ToggleGroupItem },
            template: `
                <ToggleGroup>
                    <ToggleGroupItem value="item1">
                        Content
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const content = screen.getByText('Content')
        expect(content).toBeInTheDocument()
    })
})
