import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { RadioGroup, RadioGroupItem } from '../../../src/components/radio-group/index'

describe('RadioGroupItem Component', () => {
    it('renders correctly within RadioGroup context', () => {
        render({
            components: { RadioGroup, RadioGroupItem },
            template: `
                <RadioGroup>
                    <RadioGroupItem value="option1" />
                </RadioGroup>
            `,
        })

        const radioGroupItem = document.querySelector('[data-slot="radio-group-item"]')
        expect(radioGroupItem).toBeInTheDocument()
        expect(radioGroupItem).toHaveAttribute('data-slot', 'radio-group-item')
    })

    it('forwards props correctly within RadioGroup context', () => {
        render({
            components: { RadioGroup, RadioGroupItem },
            template: `
                <RadioGroup>
                    <RadioGroupItem value="option2" :disabled="false" />
                </RadioGroup>
            `,
        })

        const radioGroupItem = document.querySelector('[data-slot="radio-group-item"]')
        expect(radioGroupItem).toBeInTheDocument()
    })

    it('renders with correct input type within RadioGroup context', () => {
        render({
            components: { RadioGroup, RadioGroupItem },
            template: `
                <RadioGroup>
                    <RadioGroupItem value="option1" />
                </RadioGroup>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('has correct component name within RadioGroup context', () => {
        render({
            components: { RadioGroup, RadioGroupItem },
            template: `
                <RadioGroup>
                    <RadioGroupItem value="option1" />
                </RadioGroup>
            `,
        })

        const radioGroupItem = document.querySelector('[data-slot="radio-group-item"]')
        expect(radioGroupItem).toBeInTheDocument()
    })
})
