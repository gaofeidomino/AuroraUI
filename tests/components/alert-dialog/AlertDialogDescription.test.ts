import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogDescription } from '../../../src/components/alert-dialog'

describe('AlertDialogDescription Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogDescription, {
            slots: {
                default: 'Dialog Description',
            },
        })
        expect(container.querySelector('[data-slot="alert-dialog-description"]')).toBeInTheDocument()
        expect(container.querySelector('[data-slot="alert-dialog-description"]')).toHaveTextContent('Dialog Description')
    })
})
