import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogAction } from '../../../src/components/alert-dialog'

describe('AlertDialogAction Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogAction, {
            slots: {
                default: 'Action',
            },
        })
        expect(container.querySelector('button')).toBeInTheDocument()
        expect(container.querySelector('button')).toHaveTextContent('Action')
    })
})
