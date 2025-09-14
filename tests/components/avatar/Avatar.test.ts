import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Avatar, AvatarImage, AvatarFallback } from '../../../src/components/avatar'

describe('Avatar Component', () => {
    it('renders correctly with default props', () => {
        render(Avatar, {
            slots: {
                default: 'Avatar Content',
            },
        })

        const avatar = screen.getByText('Avatar Content')
        expect(avatar).toBeDefined()
        expect(avatar.closest('[data-slot="avatar"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(Avatar, {
            props: {
                class: 'custom-avatar-class',
            },
            slots: {
                default: 'Avatar Content',
            },
        })

        const avatar = screen.getByText('Avatar Content')
        const avatarElement = avatar.closest('[data-slot="avatar"]')
        expect(avatarElement).toBeDefined()
        expect((avatarElement as HTMLElement).className).toContain('custom-avatar-class')
    })

    it('renders without content when no slot provided', () => {
        render(Avatar)

        const avatarElement = document.querySelector('[data-slot="avatar"]')
        expect(avatarElement).toBeDefined()
        expect(avatarElement?.textContent).toBe('')
    })

    it('maintains proper data-slot attribute', () => {
        render(Avatar, {
            slots: {
                default: 'Test Content',
            },
        })

        const avatarElement = screen.getByText('Test Content').closest('[data-slot="avatar"]')
        expect(avatarElement).toBeDefined()
        expect(avatarElement?.getAttribute('data-slot')).toBe('avatar')
    })
})

describe('AvatarImage Component', () => {
    it('renders correctly with default props', () => {
        const TestComponent = {
            components: { Avatar, AvatarImage },
            template: `
                <Avatar>
                    <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')
        expect(avatarImageElement).toBeDefined()
        expect(avatarImageElement?.getAttribute('src')).toBe('https://example.com/avatar.jpg')
        expect(avatarImageElement?.getAttribute('alt')).toBe('User Avatar')
    })

    it('renders with src and alt attributes', () => {
        const TestComponent = {
            components: { Avatar, AvatarImage },
            template: `
                <Avatar>
                    <AvatarImage src="https://example.com/user.jpg" alt="User Profile Picture" />
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')
        expect(avatarImageElement).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        const TestComponent = {
            components: { Avatar, AvatarImage },
            template: `
                <Avatar>
                    <AvatarImage src="test.jpg" alt="Test" />
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')
        expect(avatarImageElement).toBeDefined()
        expect(avatarImageElement?.getAttribute('data-slot')).toBe('avatar-image')
    })
})

describe('AvatarFallback Component', () => {
    it('renders correctly with default props', () => {
        const TestComponent = {
            components: { Avatar, AvatarFallback },
            template: `
                <Avatar>
                    <AvatarFallback>Fallback Content</AvatarFallback>
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarFallback = screen.getByText('Fallback Content')
        expect(avatarFallback).toBeDefined()
        expect(avatarFallback.closest('[data-slot="avatar-fallback"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        const TestComponent = {
            components: { Avatar, AvatarFallback },
            template: `
                <Avatar>
                    <AvatarFallback class="custom-fallback-class">Fallback Content</AvatarFallback>
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarFallback = screen.getByText('Fallback Content')
        const avatarFallbackElement = avatarFallback.closest('[data-slot="avatar-fallback"]')
        expect(avatarFallbackElement).toBeDefined()
        expect((avatarFallbackElement as HTMLElement).className).toContain('custom-fallback-class')
    })

    it('renders without content when no slot provided', () => {
        const TestComponent = {
            components: { Avatar, AvatarFallback },
            template: `
                <Avatar>
                    <AvatarFallback />
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarFallbackElement = document.querySelector('[data-slot="avatar-fallback"]')
        expect(avatarFallbackElement).toBeDefined()
        expect(avatarFallbackElement?.textContent).toBe('')
    })

    it('maintains proper data-slot attribute', () => {
        const TestComponent = {
            components: { Avatar, AvatarFallback },
            template: `
                <Avatar>
                    <AvatarFallback>Test Fallback</AvatarFallback>
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarFallbackElement = screen.getByText('Test Fallback').closest('[data-slot="avatar-fallback"]')
        expect(avatarFallbackElement).toBeDefined()
        expect(avatarFallbackElement?.getAttribute('data-slot')).toBe('avatar-fallback')
    })
})

describe('Avatar Component Integration', () => {
    it('renders complete avatar structure with all components', () => {
        const TestComponent = {
            components: {
                Avatar,
                AvatarImage,
                AvatarFallback,
            },
            template: `
                <Avatar>
                    <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarElement = document.querySelector('[data-slot="avatar"]')
        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')
        const avatarFallbackElement = document.querySelector('[data-slot="avatar-fallback"]')

        expect(avatarElement).toBeDefined()
        expect(avatarImageElement).toBeDefined()
        expect(avatarFallbackElement).toBeDefined()
        expect(screen.getByText('JD')).toBeDefined()
    })

    it('renders avatar with only fallback content', () => {
        const TestComponent = {
            components: {
                Avatar,
                AvatarFallback,
            },
            template: `
                <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
            `,
        }

        render(TestComponent)

        expect(screen.getByText('AB')).toBeDefined()
        expect(document.querySelector('[data-slot="avatar"]')).toBeDefined()
        expect(document.querySelector('[data-slot="avatar-fallback"]')).toBeDefined()
    })

    it('renders avatar with only image', () => {
        const TestComponent = {
            components: {
                Avatar,
                AvatarImage,
            },
            template: `
                <Avatar>
                    <AvatarImage src="https://example.com/user.jpg" alt="User" />
                </Avatar>
            `,
        }

        render(TestComponent)

        const avatarElement = document.querySelector('[data-slot="avatar"]')
        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')

        expect(avatarElement).toBeDefined()
        expect(avatarImageElement).toBeDefined()
    })
})
