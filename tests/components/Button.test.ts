import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { Button } from '../../src/components/button/index'

describe('Button Component', () => {
    it('renders correctly with default props', () => {
        render(Button, {
            slots: {
                default: 'Click me',
            },
        })

        const button = screen.getByRole('button', { name: 'Click me' })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center')
    })

    it('renders with different variants', () => {
        // 测试默认变体
        const { unmount: unmount1 } = render(Button, {
            props: { variant: 'default' },
            slots: { default: 'Default Button' },
        })

        let button = screen.getByRole('button')
        expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
        unmount1()

        // 测试destructive变体
        const { unmount: unmount2 } = render(Button, {
            props: { variant: 'destructive' },
            slots: { default: 'Destructive Button' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('bg-destructive', 'text-white')
        unmount2()

        // 测试outline变体
        const { unmount: unmount3 } = render(Button, {
            props: { variant: 'outline' },
            slots: { default: 'Outline Button' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('border', 'bg-background')
        unmount3()

        // 测试secondary变体
        const { unmount: unmount4 } = render(Button, {
            props: { variant: 'secondary' },
            slots: { default: 'Secondary Button' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground')
        unmount4()

        // 测试ghost变体
        const { unmount: unmount5 } = render(Button, {
            props: { variant: 'ghost' },
            slots: { default: 'Ghost Button' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('hover:bg-accent', 'hover:text-accent-foreground')
        unmount5()

        // 测试link变体
        const { unmount: unmount6 } = render(Button, {
            props: { variant: 'link' },
            slots: { default: 'Link Button' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('text-primary', 'underline-offset-4')
        unmount6()
    })

    it('renders with different sizes', () => {
        // 测试默认尺寸
        const { unmount: unmount1 } = render(Button, {
            props: { size: 'default' },
            slots: { default: 'Default Size' },
        })

        let button = screen.getByRole('button')
        expect(button).toHaveClass('h-9', 'px-4', 'py-2')
        unmount1()

        // 测试小尺寸
        const { unmount: unmount2 } = render(Button, {
            props: { size: 'sm' },
            slots: { default: 'Small Size' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('h-8', 'px-3')
        unmount2()

        // 测试大尺寸
        const { unmount: unmount3 } = render(Button, {
            props: { size: 'lg' },
            slots: { default: 'Large Size' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('h-10', 'px-6')
        unmount3()

        // 测试图标尺寸
        const { unmount: unmount4 } = render(Button, {
            props: { size: 'icon' },
            slots: { default: 'Icon Size' },
        })
        button = screen.getByRole('button')
        expect(button).toHaveClass('size-9')
        unmount4()
    })

    it('applies custom class names', () => {
        render(Button, {
            props: { class: 'custom-class' },
            slots: { default: 'Custom Button' },
        })

        const button = screen.getByRole('button')
        expect(button).toHaveClass('custom-class')
    })

    it('renders as different HTML elements', () => {
        render(Button, {
            props: { as: 'a', href: 'https://example.com' },
            slots: { default: 'Link Button' },
        })

        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'https://example.com')
    })

    it('handles click events', async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()

        render(Button, {
            props: { onClick: handleClick },
            slots: { default: 'Clickable Button' },
        })

        const button = screen.getByRole('button')
        await user.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('can be disabled', () => {
        render(Button, {
            props: { disabled: true },
            slots: { default: 'Disabled Button' },
        })

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
    })

    it('renders with slot content', () => {
        render(Button, {
            slots: {
                default: '<span>Slot Content</span>',
            },
        })

        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('Slot Content')
    })

    it('combines variant and size classes correctly', () => {
        render(Button, {
            props: {
                variant: 'destructive',
                size: 'lg',
            },
            slots: { default: 'Destructive Large Button' },
        })

        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-destructive', 'text-white', 'h-10', 'px-6')
    })
})
