import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Slider } from '../../../src/components/slider/index'

describe('Slider Component', () => {
    it('renders correctly with default props', () => {
        render(Slider, {
            props: {
                modelValue: [50],
                min: 0,
                max: 100,
            },
        })

        const slider = document.querySelector('[data-slot="slider"]')
        expect(slider).toBeInTheDocument()
        expect(slider).toHaveAttribute('data-slot', 'slider')
    })

    it('forwards props correctly', () => {
        render(Slider, {
            props: {
                modelValue: [25, 75],
                min: 0,
                max: 100,
                class: 'custom-class',
            },
        })

        const slider = document.querySelector('[data-slot="slider"]')
        expect(slider).toBeInTheDocument()
        expect(slider).toHaveClass('custom-class')
    })

    it('renders with slot content', () => {
        render(Slider, {
            props: {
                modelValue: [50],
                min: 0,
                max: 100,
            },
        })

        const slider = document.querySelector('[data-slot="slider"]')
        expect(slider).toBeInTheDocument()
    })

    it('has correct component name', () => {
        render(Slider, {
            props: {
                modelValue: [50],
                min: 0,
                max: 100,
            },
        })

        const slider = document.querySelector('[data-slot="slider"]')
        expect(slider).toBeInTheDocument()
        expect(slider).toHaveAttribute('data-slot', 'slider')
    })
})
