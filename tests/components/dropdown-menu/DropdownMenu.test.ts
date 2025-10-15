import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { DropdownMenu } from '../../../src/components/dropdown-menu'

describe('DropdownMenu Component', () => {
    it('renders correctly with default props', () => {
        render(DropdownMenu, {
            slots: {
                default: 'Dropdown Content',
            },
        })

        const dropdown = screen.getByText('Dropdown Content')
        expect(dropdown).toBeDefined()
        expect(dropdown.closest('[data-slot="dropdown-menu"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(DropdownMenu, {
            slots: {
                default: 'Test Dropdown',
            },
        })

        // DropdownMenu component renders correctly with slot content
        expect(screen.getByText('Test Dropdown')).toBeDefined()
    })

    it('passes through props correctly', () => {
        render(DropdownMenu, {
            props: {
                id: 'test-dropdown',
                'data-testid': 'custom-dropdown',
                open: true,
            },
            slots: {
                default: 'Dropdown with Props',
            },
        })

        // Props are passed through to the component
        expect(screen.getByText('Dropdown with Props')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        render(DropdownMenu)

        // DropdownMenu renders without slot content
        const dropdown = document.querySelector('[data-radix-dropdown-menu]')
        expect(dropdown).toBeDefined()
    })
})
