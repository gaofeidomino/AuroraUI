import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from '../../../src/components/alert-dialog'

describe('AlertDialogContent Component', () => {
    it('renders correctly', async () => {
        const { container } = render({
            components: {
                AlertDialog,
                AlertDialogTrigger,
                AlertDialogContent,
            },
            template: `
                <AlertDialog>
                    <AlertDialogTrigger>
                        <button data-testid="trigger">Open Dialog</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <div>Content</div>
                    </AlertDialogContent>
                </AlertDialog>
            `,
        })
        
        // Initially content should not be visible
        expect(document.querySelector('[data-slot="alert-dialog-content"]')).not.toBeInTheDocument()
        
        // Click trigger to open dialog
        const trigger = container.querySelector('[data-testid="trigger"]')
        await fireEvent.click(trigger!)
        
        // AlertDialogContent uses a Portal, so it renders directly to document.body
        expect(document.querySelector('[data-slot="alert-dialog-content"]')).toBeInTheDocument()
        expect(document.querySelector('[data-slot="alert-dialog-overlay"]')).toBeInTheDocument()
    })
})
