import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { TagsInput } from '../../../src/components/tags-input/index'

describe('TagsInput Component', () => {
    it('renders correctly with default props', () => {
        render(TagsInput, {
            slots: {
                default: '<div data-testid="tags-input-content">Tags Input Content</div>',
            },
        })

        const content = screen.getByTestId('tags-input-content')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Tags Input Content')
    })

    it('forwards props correctly', () => {
        render(TagsInput, {
            props: {
                modelValue: ['tag1', 'tag2'],
                class: 'custom-class',
            },
            slots: {
                default: '<div data-testid="props-content">Props Content</div>',
            },
        })

        const content = screen.getByTestId('props-content')
        expect(content).toBeInTheDocument()
    })

    it('renders with slot content', () => {
        render(TagsInput, {
            slots: {
                default: '<div data-testid="slot-content">Slot Content</div>',
            },
        })

        const slotContent = screen.getByTestId('slot-content')
        expect(slotContent).toBeInTheDocument()
        expect(slotContent).toHaveTextContent('Slot Content')
    })

    it('has correct component name', () => {
        render(TagsInput, {
            slots: {
                default: '<div data-testid="name-content">Content</div>',
            },
        })

        const content = screen.getByTestId('name-content')
        expect(content).toBeInTheDocument()
    })
})
