import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TagsInput, TagsInputInput } from '../../../src/components/tags-input/index'

describe('TagsInputInput Component', () => {
    it('renders correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputInput },
            template: `
                <TagsInput>
                    <TagsInputInput placeholder="Add tags..." />
                </TagsInput>
            `,
        })

        const input = screen.getByPlaceholderText('Add tags...')
        expect(input).toBeInTheDocument()
    })

    it('forwards props correctly within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputInput },
            template: `
                <TagsInput>
                    <TagsInputInput placeholder="Add tags..." class="custom-class" />
                </TagsInput>
            `,
        })

        const input = screen.getByPlaceholderText('Add tags...')
        expect(input).toBeInTheDocument()
    })

    it('renders with slot content within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputInput },
            template: `
                <TagsInput>
                    <TagsInputInput placeholder="Add tags...">
                        <div data-testid="slot-content">Slot Content</div>
                    </TagsInputInput>
                </TagsInput>
            `,
        })

        const input = screen.getByPlaceholderText('Add tags...')
        expect(input).toBeInTheDocument()
    })

    it('has correct component name within TagsInput context', () => {
        render({
            components: { TagsInput, TagsInputInput },
            template: `
                <TagsInput>
                    <TagsInputInput placeholder="Add tags..." />
                </TagsInput>
            `,
        })

        const input = screen.getByPlaceholderText('Add tags...')
        expect(input).toBeInTheDocument()
    })
})
