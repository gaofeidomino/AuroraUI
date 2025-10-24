import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ToggleGroup, ToggleGroupItem } from '../../../src/components/toggle-group/index'

describe('ToggleGroupItem Component', () => {
    it('renders correctly within ToggleGroup context', () => {
        render({
            components: { ToggleGroup, ToggleGroupItem },
            template: `
                <ToggleGroup>
                    <ToggleGroupItem value="item1">
                        <div>Item Content</div>
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const content = screen.getByText('Item Content')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within ToggleGroup context', () => {
        render({
            components: { ToggleGroup, ToggleGroupItem },
            template: `
                <ToggleGroup>
                    <ToggleGroupItem value="item1" :disabled="false">
                        <div>Item Content</div>
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const content = screen.getByText('Item Content')
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
                        <div>Content</div>
                    </ToggleGroupItem>
                </ToggleGroup>
            `,
        })

        const content = screen.getByText('Content')
        expect(content).toBeInTheDocument()
    })
})
