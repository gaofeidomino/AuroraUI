import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogDescription } from '../../../src/components/alert-dialog'

describe('AlertDialogDescription Component', () => {
    it('renders correctly', async () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
                AlertDialogDescription,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button data-testid="trigger">Open Dialog</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogDescription>Dialog Description</AlertDialogDescription>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })
        
        // Click trigger to open dialog
        const trigger = container.querySelector('[data-testid="trigger"]')
        await fireEvent.click(trigger!)
        
        expect(document.querySelector('[data-slot="alert-dialog-description"]')).toBeInTheDocument()
        expect(document.querySelector('[data-slot="alert-dialog-description"]')).toHaveTextContent('Dialog Description')
    })
})
