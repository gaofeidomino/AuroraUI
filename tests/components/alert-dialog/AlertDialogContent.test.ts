import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogContent } from '../../../src/components/alert-dialog'

describe('AlertDialogContent Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogContent, {
            slots: {
                default: '<div>Content</div>',
            },
        })
        // AlertDialogContent uses a Portal, so it renders directly to document.body
        expect(document.querySelector('[data-slot="alert-dialog-content"]')).toBeInTheDocument()
        expect(document.querySelector('[data-slot="alert-dialog-overlay"]')).toBeInTheDocument()
    })
})
