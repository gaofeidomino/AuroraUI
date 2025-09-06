import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogCancel } from '../../../src/components/alert-dialog'

describe('AlertDialogCancel Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogCancel, {
            slots: {
                default: 'Cancel',
            },
        })
        expect(container.querySelector('button')).toBeInTheDocument()
        expect(container.querySelector('button')).toHaveTextContent('Cancel')
    })
})
