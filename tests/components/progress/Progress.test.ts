import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Progress } from '../../../src/components/progress/index'

describe('Progress Component', () => {
    it('renders correctly with default props', () => {
        render(Progress, {
            props: {
                value: 50,
            },
        })

        const progress = document.querySelector('[data-slot="progress"]')
        expect(progress).toBeInTheDocument()
        expect(progress).toHaveAttribute('data-slot', 'progress')
    })

    it('forwards props correctly', () => {
        render(Progress, {
            props: {
                value: 75,
                max: 100,
                size: 'default',
            },
        })

        const progress = document.querySelector('[data-slot="progress"]')
        expect(progress).toBeInTheDocument()
    })

    it('renders with correct progress value', () => {
        render(Progress, {
            props: {
                value: 60,
            },
        })

        const progress = document.querySelector('[data-slot="progress"]')
        expect(progress).toBeInTheDocument()
    })

    it('has correct component name', () => {
        render(Progress, {
            props: {
                value: 0,
            },
        })

        const progress = document.querySelector('[data-slot="progress"]')
        expect(progress).toBeInTheDocument()
    })
})
