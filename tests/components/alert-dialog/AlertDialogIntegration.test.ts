import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '../../../src/components/alert-dialog'

describe('AlertDialog Integration', () => {
    it('renders trigger and opens dialog on click', async () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
                AlertDialogHeader,
                AlertDialogTitle,
                AlertDialogDescription,
                AlertDialogFooter,
                AlertDialogAction,
                AlertDialogCancel,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button data-testid="trigger-button">Open</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel data-testid="cancel-button">Cancel</AlertDialogCancel>
                            <AlertDialogAction data-testid="confirm-button">Confirm</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })

        const triggerButton = container.querySelector('[data-testid="trigger-button"]')
        expect(triggerButton).toBeInTheDocument()
        expect(document.querySelector('[data-slot="alert-dialog-content"]')).not.toBeInTheDocument()

        await fireEvent.click(triggerButton!)

        const content = document.querySelector('[data-slot="alert-dialog-content"]')
        expect(content).toBeInTheDocument()
        expect(content).toHaveTextContent('Are you sure?')
        expect(content).toHaveTextContent('This action cannot be undone.')
        expect(document.querySelector('[data-testid="cancel-button"]')).toBeInTheDocument()
        expect(document.querySelector('[data-testid="confirm-button"]')).toBeInTheDocument()
    })
})
