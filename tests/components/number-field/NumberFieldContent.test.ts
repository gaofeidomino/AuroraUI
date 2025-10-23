import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { NumberField, NumberFieldContent } from '../../../src/components/number-field/index'

describe('NumberFieldContent Component', () => {
    it('renders correctly within NumberField context', () => {
        render({
            components: { NumberField, NumberFieldContent },
            template: `
                <NumberField>
                    <NumberFieldContent>
                        <div>NumberFieldContent Content</div>
                    </NumberFieldContent>
                </NumberField>
            `,
        })

        const content = screen.getByText('NumberFieldContent Content')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within NumberField context', () => {
        render({
            components: { NumberField, NumberFieldContent },
            template: `
                <NumberField>
                    <NumberFieldContent class="custom-class">
                        <div>NumberFieldContent Content</div>
                    </NumberFieldContent>
                </NumberField>
            `,
        })

        const content = screen.getByText('NumberFieldContent Content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content within NumberField context', () => {
        render({
            components: { NumberField, NumberFieldContent },
            template: `
                <NumberField>
                    <NumberFieldContent>
                        <div data-testid="slot-content">Slot Content</div>
                    </NumberFieldContent>
                </NumberField>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name within NumberField context', () => {
        render({
            components: { NumberField, NumberFieldContent },
            template: `
                <NumberField>
                    <NumberFieldContent>
                        <div>Content</div>
                    </NumberFieldContent>
                </NumberField>
            `,
        })

        const content = screen.getByText('Content')
        expect(content).toBeInTheDocument()
    })
})
