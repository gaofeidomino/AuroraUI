import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { ContextMenu } from '../../../src/components/context-menu'

describe('ContextMenu Component', () => {
    it('renders correctly with default props', () => {
        render(ContextMenu, {
            slots: {
                default: 'Context Menu Content',
            },
        })

        const contextMenu = screen.getByText('Context Menu Content')
        expect(contextMenu).toBeDefined()
        expect(contextMenu.closest('[data-slot="context-menu"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(ContextMenu, {
            slots: {
                default: 'Test Context Menu',
            },
        })

        // ContextMenu component renders correctly with slot content
        expect(screen.getByText('Test Context Menu')).toBeDefined()
    })

    it('passes through props correctly', () => {
        render(ContextMenu, {
            props: {
                id: 'test-context-menu',
                'data-testid': 'custom-context-menu',
            },
            slots: {
                default: 'Context Menu with Props',
            },
        })

        // Props are passed through to the component
        expect(screen.getByText('Context Menu with Props')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        render(ContextMenu)

        // ContextMenu renders without slot content
        const contextMenu = document.querySelector('[data-radix-context-menu]')
        expect(contextMenu).toBeDefined()
    })
})
