import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogTitle } from '../../../src/components/alert-dialog'

describe('AlertDialogTitle Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogTitle, {
            slots: {
                default: 'Dialog Title',
            },
        })
        expect(container.querySelector('[data-slot="alert-dialog-title"]')).toBeInTheDocument()
        expect(container.querySelector('[data-slot="alert-dialog-title"]')).toHaveTextContent('Dialog Title')
    })
})
