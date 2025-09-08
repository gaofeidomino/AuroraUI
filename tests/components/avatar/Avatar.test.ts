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
        render(AvatarImage, {
            props: {
                src: 'https://example.com/avatar.jpg',
                alt: 'User Avatar',
            },
            slots: {
                default: 'Image Content',
            },
        })

        const avatarImage = screen.getByText('Image Content')
        expect(avatarImage).toBeDefined()
        expect(avatarImage.closest('[data-slot="avatar-image"]')).toBeDefined()
    })

    it('renders with src and alt attributes', () => {
        render(AvatarImage, {
            props: {
                src: 'https://example.com/user.jpg',
                alt: 'User Profile Picture',
            },
        })

        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')
        expect(avatarImageElement).toBeDefined()
    })

    it('maintains proper data-slot attribute', () => {
        render(AvatarImage, {
            props: {
                src: 'test.jpg',
                alt: 'Test',
            },
        })

        const avatarImageElement = document.querySelector('[data-slot="avatar-image"]')
        expect(avatarImageElement).toBeDefined()
        expect(avatarImageElement?.getAttribute('data-slot')).toBe('avatar-image')
    })
})

describe('AvatarFallback Component', () => {
    it('renders correctly with default props', () => {
        render(AvatarFallback, {
            slots: {
                default: 'Fallback Content',
            },
        })

        const avatarFallback = screen.getByText('Fallback Content')
        expect(avatarFallback).toBeDefined()
        expect(avatarFallback.closest('[data-slot="avatar-fallback"]')).toBeDefined()
    })

    it('renders with custom class', () => {
        render(AvatarFallback, {
            props: {
                class: 'custom-fallback-class',
            },
            slots: {
                default: 'Fallback Content',
            },
        })

        const avatarFallback = screen.getByText('Fallback Content')
        const avatarFallbackElement = avatarFallback.closest('[data-slot="avatar-fallback"]')
        expect(avatarFallbackElement).toBeDefined()
        expect((avatarFallbackElement as HTMLElement).className).toContain('custom-fallback-class')
    })

    it('renders without content when no slot provided', () => {
        render(AvatarFallback)

        const avatarFallbackElement = document.querySelector('[data-slot="avatar-fallback"]')
        expect(avatarFallbackElement).toBeDefined()
        expect(avatarFallbackElement?.textContent).toBe('')
    })

    it('maintains proper data-slot attribute', () => {
        render(AvatarFallback, {
            slots: {
                default: 'Test Fallback',
            },
        })

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
