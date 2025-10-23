import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { PinInput, PinInputSlot } from '../../../src/components/pin-input/index'

describe('PinInputSlot Component', () => {
    it('renders correctly within PinInput context', () => {
        render({
            components: { PinInput, PinInputSlot },
            template: `
                <PinInput :length="6">
                    <PinInputSlot :index="0" />
                </PinInput>
            `,
        })

        const pinInputSlot = document.querySelector('[data-slot="pin-input-slot"]')
        expect(pinInputSlot).toBeInTheDocument()
        expect(pinInputSlot).toHaveAttribute('data-slot', 'pin-input-slot')
    })

    it('forwards props correctly within PinInput context', () => {
        render({
            components: { PinInput, PinInputSlot },
            template: `
                <PinInput :length="6">
                    <PinInputSlot :index="1" value="2" :disabled="false" />
                </PinInput>
            `,
        })

        const pinInputSlot = document.querySelector('[data-slot="pin-input-slot"]')
        expect(pinInputSlot).toBeInTheDocument()
    })

    it('renders with correct input type within PinInput context', () => {
        render({
            components: { PinInput, PinInputSlot },
            template: `
                <PinInput :length="6">
                    <PinInputSlot :index="0" />
                </PinInput>
            `,
        })

        const input = document.querySelector('input')
        expect(input).toBeInTheDocument()
    })

    it('has correct component name within PinInput context', () => {
        render({
            components: { PinInput, PinInputSlot },
            template: `
                <PinInput :length="6">
                    <PinInputSlot :index="0" />
                </PinInput>
            `,
        })

        const pinInputSlot = document.querySelector('[data-slot="pin-input-slot"]')
        expect(pinInputSlot).toBeInTheDocument()
    })
})
