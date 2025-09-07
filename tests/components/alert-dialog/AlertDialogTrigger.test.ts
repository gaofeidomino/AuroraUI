import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from '../../../src/components/alert-dialog'

describe('AlertDialogTrigger Component', () => {
    it('renders correctly', () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button>Open Dialog</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <div>Content</div>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })
        expect(container.querySelector('button')).toBeInTheDocument()
    })
})
