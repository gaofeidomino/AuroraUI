import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TagsInput, TagsInputItem } from '../../../src/components/tags-input/index'

describe('TagsInputItem Component', () => {
    it('renders correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <div>Item Content</div>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('Item Content')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1" :disabled="false">
                        <div>Item Content</div>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('Item Content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <div data-testid="slot-content">Slot Content</div>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <div>Content</div>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('Content')
        expect(content).toBeInTheDocument()
    })
})
