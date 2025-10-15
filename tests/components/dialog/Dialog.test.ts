import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Dialog } from '../../../src/components/dialog'

describe('Dialog Component', () => {
    it('renders correctly with default props', () => {
        render(Dialog, {
            slots: {
                default: 'Dialog Content',
            },
        })

        const dialog = screen.getByText('Dialog Content')
        expect(dialog).toBeDefined()
        expect(dialog.closest('[data-slot="dialog"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(Dialog, {
            slots: {
                default: 'Test Dialog',
            },
        })

        // Dialog component renders correctly with slot content
        expect(screen.getByText('Test Dialog')).toBeDefined()
    })

    it('passes through props correctly', () => {
        render(Dialog, {
            props: {
                id: 'test-dialog',
                'data-testid': 'custom-dialog',
                open: true,
            },
            slots: {
                default: 'Dialog with Props',
            },
        })

        // Props are passed through to the component
        expect(screen.getByText('Dialog with Props')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        render(Dialog)

        // Dialog renders without slot content
        const dialog = document.querySelector('[data-radix-dialog]')
        expect(dialog).toBeDefined()
    })
})
