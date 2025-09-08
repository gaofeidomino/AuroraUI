import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction } from '../../../src/components/alert-dialog'

describe('AlertDialogAction Component', () => {
    it('renders correctly', async () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
                AlertDialogAction,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button data-testid="trigger">Open Dialog</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogAction>Action</AlertDialogAction>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })

        // Click trigger to open dialog
        const trigger = container.querySelector('[data-testid="trigger"]')
        await fireEvent.click(trigger!)

        const actionButton = document.querySelector('[data-slot="alert-dialog-content"] button')
        expect(actionButton).toBeInTheDocument()
        expect(actionButton).toHaveTextContent('Action')
    })
})
