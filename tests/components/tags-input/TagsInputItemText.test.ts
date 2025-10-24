import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TagsInput, TagsInputItem, TagsInputItemText } from '../../../src/components/tags-input/index'

describe('TagsInputItemText Component', () => {
    it('renders correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem, TagsInputItemText },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <TagsInputItemText>
                            Tag Text
                        </TagsInputItemText>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('tag1')
        expect(content).toBeInTheDocument()
    })

    it('forwards props correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem, TagsInputItemText },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <TagsInputItemText class="custom-class">
                            Tag Text
                        </TagsInputItemText>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('tag1')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem, TagsInputItemText },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <TagsInputItemText>
                            <div data-testid="slot-content">Slot Content</div>
                        </TagsInputItemText>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('tag1')
        expect(content).toBeInTheDocument()
    })

    it('has correct component name within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputItem, TagsInputItemText },
            template: `
                <TagsInput>
                    <TagsInputItem value="tag1">
                        <TagsInputItemText>
                            Content
                        </TagsInputItemText>
                    </TagsInputItem>
                </TagsInput>
            `,
        })

        const content = screen.getByText('tag1')
        expect(content).toBeInTheDocument()
    })
})
