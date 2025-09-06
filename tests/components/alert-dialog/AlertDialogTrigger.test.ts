import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialogTrigger } from '../../../src/components/alert-dialog'

describe('AlertDialogTrigger Component', () => {
    it('renders correctly', () => {
        const { container } = render(AlertDialogTrigger, {
            slots: {
                default: '<button>Open Dialog</button>',
            },
        })
        expect(container.firstChild).toBeInTheDocument()
    })
})
