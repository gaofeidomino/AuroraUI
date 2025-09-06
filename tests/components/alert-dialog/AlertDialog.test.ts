import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog } from '../../../src/components/alert-dialog'

describe('AlertDialog Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialog, {
            slots: {
                default: '<div>Test Content</div>',
            },
        })
        expect(container.firstChild).toBeInTheDocument()
    })
})
