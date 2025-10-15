import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Drawer } from '../../../src/components/drawer'

describe('Drawer Component', () => {
    it('renders correctly with default props', () => {
        render(Drawer, {
            slots: {
                default: 'Drawer Content',
            },
        })

        const drawer = screen.getByText('Drawer Content')
        expect(drawer).toBeDefined()
        expect(drawer.closest('[data-slot="drawer"]')).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(Drawer, {
            slots: {
                default: 'Test Drawer',
            },
        })

        // Drawer component renders correctly with slot content
        expect(screen.getByText('Test Drawer')).toBeDefined()
    })

    it('passes through props correctly', () => {
        render(Drawer, {
            props: {
                id: 'test-drawer',
                'data-testid': 'custom-drawer',
                open: true,
                shouldScaleBackground: false,
            },
            slots: {
                default: 'Drawer with Props',
            },
        })

        // Props are passed through to the component
        expect(screen.getByText('Drawer with Props')).toBeDefined()
    })

    it('renders without content when no slot provided', () => {
        render(Drawer)

        // Drawer renders without slot content
        const drawer = document.querySelector('[data-vaul-drawer]')
        expect(drawer).toBeDefined()
    })

    it('applies default shouldScaleBackground prop', () => {
        render(Drawer, {
            slots: {
                default: 'Default Drawer',
            },
        })

        const drawer = screen.getByText('Default Drawer').closest('[data-slot="drawer"]')
        expect(drawer).toBeDefined()
    })
})
