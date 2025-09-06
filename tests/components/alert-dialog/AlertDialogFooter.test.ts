import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogFooter } from '../../../src/components/alert-dialog'

describe('AlertDialogFooter Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogFooter, {
            slots: {
                default: '<div>Footer Content</div>',
            },
        })
        expect(container.querySelector('[data-slot="alert-dialog-footer"]')).toBeInTheDocument()
        expect(container.querySelector('[data-slot="alert-dialog-footer"]')).toHaveTextContent('Footer Content')
    })
})
