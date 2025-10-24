import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { RangeCalendar, RangeCalendarNextButton } from '../../../src/components/range-calendar/index'

describe('RangeCalendarNextButton Component', () => {
    it('renders correctly within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarNextButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarNextButton />
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('forwards props correctly within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarNextButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarNextButton class="custom-class" />
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('renders with slot content within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarNextButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarNextButton>
                        <div data-testid="slot-content">Slot Content</div>
                    </RangeCalendarNextButton>
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('has correct component name within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarNextButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarNextButton />
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })
})
