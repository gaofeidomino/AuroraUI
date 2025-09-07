import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogCancel } from '../../../src/components/alert-dialog'

describe('AlertDialogCancel Component', () => {
    it('renders correctly', async () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
                AlertDialogCancel,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button data-testid="trigger">Open Dialog</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })
        
        // Click trigger to open dialog
        const trigger = container.querySelector('[data-testid="trigger"]')
        await fireEvent.click(trigger!)
        
        const cancelButton = document.querySelector('[data-slot="alert-dialog-content"] button')
        expect(cancelButton).toBeInTheDocument()
        expect(cancelButton).toHaveTextContent('Cancel')
    })
})
