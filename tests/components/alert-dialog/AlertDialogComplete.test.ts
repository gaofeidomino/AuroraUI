import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '../../../src/components/alert-dialog'

describe('AlertDialog Complete Integration', () => {
    it('renders complete alert dialog structure correctly', async () => {
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
                        <button data-testid="trigger-button">Open Dialog</button>
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

        // Check trigger is rendered
        const trigger = container.querySelector('[data-testid="trigger-button"]')
        expect(trigger).toBeInTheDocument()
        expect(trigger).toHaveTextContent('Open Dialog')

        // Initially dialog content should not be visible
        expect(document.querySelector('[data-slot="alert-dialog-content"]')).not.toBeInTheDocument()

        // Click trigger to open dialog
        await fireEvent.click(trigger!)

        // Check content (Portal content is rendered to document.body)
        const content = document.querySelector('[data-slot="alert-dialog-content"]')
        expect(content).toBeInTheDocument()

        // Check header
        const header = document.querySelector('[data-slot="alert-dialog-header"]')
        expect(header).toBeInTheDocument()

        // Check title
        const title = document.querySelector('[data-slot="alert-dialog-title"]')
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent('Are you sure?')

        // Check description
        const description = document.querySelector('[data-slot="alert-dialog-description"]')
        expect(description).toBeInTheDocument()
        expect(description).toHaveTextContent('This action cannot be undone.')

        // Check footer
        const footer = document.querySelector('[data-slot="alert-dialog-footer"]')
        expect(footer).toBeInTheDocument()

        // Check buttons
        const cancelButton = document.querySelector('[data-testid="cancel-button"]')
        const confirmButton = document.querySelector('[data-testid="confirm-button"]')
        expect(cancelButton).toBeInTheDocument()
        expect(confirmButton).toBeInTheDocument()
        expect(cancelButton).toHaveTextContent('Cancel')
        expect(confirmButton).toHaveTextContent('Confirm')

        // Check overlay
        const overlay = document.querySelector('[data-slot="alert-dialog-overlay"]')
        expect(overlay).toBeInTheDocument()
    })

    it('renders alert dialog with custom styling', async () => {
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
                    <AlertDialogTrigger class="custom-trigger">
                        <button>Custom Trigger</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent class="custom-content">
                        <AlertDialogHeader class="custom-header">
                            <AlertDialogTitle class="custom-title">Custom Title</AlertDialogTitle>
                            <AlertDialogDescription class="custom-description">Custom Description</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter class="custom-footer">
                            <AlertDialogCancel class="custom-cancel">Custom Cancel</AlertDialogCancel>
                            <AlertDialogAction class="custom-action">Custom Action</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })

        const trigger = container.querySelector('.custom-trigger')
        expect(trigger).toBeInTheDocument()

        await fireEvent.click(trigger!)

        const content = document.querySelector('.custom-content')
        const header = document.querySelector('.custom-header')
        const title = document.querySelector('.custom-title')
        const description = document.querySelector('.custom-description')
        const footer = document.querySelector('.custom-footer')
        const cancelButton = document.querySelector('.custom-cancel')
        const actionButton = document.querySelector('.custom-action')

        expect(trigger).toHaveClass('custom-trigger')
        expect(content).toHaveClass('custom-content')
        expect(header).toHaveClass('custom-header')
        expect(title).toHaveClass('custom-title')
        expect(description).toHaveClass('custom-description')
        expect(footer).toHaveClass('custom-footer')
        expect(cancelButton).toHaveClass('custom-cancel')
        expect(actionButton).toHaveClass('custom-action')
    })

    it('renders alert dialog with overlay', async () => {
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
                        <button>Open</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Test Dialog</AlertDialogTitle>
                            <AlertDialogDescription>Test Description</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Confirm</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })

        const trigger = container.querySelector('button')
        await fireEvent.click(trigger!)

        const overlay = document.querySelector('[data-slot="alert-dialog-overlay"]')
        expect(overlay).toBeInTheDocument()
        expect(overlay).toHaveAttribute('data-slot', 'alert-dialog-overlay')
        expect(overlay).toHaveClass('fixed', 'inset-0', 'z-50', 'bg-black/80')
    })
})
