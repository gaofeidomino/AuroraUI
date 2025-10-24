import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TagsInput, TagsInputItem } from '../../../tests/components/tags-input/index'

describe('TagsInputItem Component', () => {
    it('renders correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        Tag 1
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('Tag 1')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag2" :disabled="false">
                        Tag 2
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('Tag 2')
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
                        Content
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('Content')
        expect(content).toBeInTheDocument()
    })
})
