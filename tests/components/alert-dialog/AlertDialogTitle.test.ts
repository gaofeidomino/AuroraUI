import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle } from '../../../src/components/alert-dialog'

describe('AlertDialogTitle Component', () => {
    it('renders correctly', async () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
                AlertDialogTitle,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button data-testid="trigger">Open Dialog</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogTitle>Dialog Title</AlertDialogTitle>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })
        
        // Click trigger to open dialog
        const trigger = container.querySelector('[data-testid="trigger"]')
        await fireEvent.click(trigger!)
        
        expect(document.querySelector('[data-slot="alert-dialog-title"]')).toBeInTheDocument()
        expect(document.querySelector('[data-slot="alert-dialog-title"]')).toHaveTextContent('Dialog Title')
    })
})
