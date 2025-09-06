import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogHeader } from '../../../src/components/alert-dialog'

describe('AlertDialogHeader Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogHeader, {
            slots: {
                default: '<div>Header Content</div>',
            },
        })
        expect(container.querySelector('[data-slot="alert-dialog-header"]')).toBeInTheDocument()
        expect(container.querySelector('[data-slot="alert-dialog-header"]')).toHaveTextContent('Header Content')
    })
})
