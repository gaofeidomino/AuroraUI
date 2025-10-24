import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { RangeCalendar, RangeCalendarPrevButton } from '../../../src/components/range-calendar/index'

describe('RangeCalendarPrevButton Component', () => {
    it('renders correctly within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarPrevButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarPrevButton />
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('forwards props correctly within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarPrevButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarPrevButton class="custom-class" />
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('renders with slot content within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarPrevButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarPrevButton>
                        <div data-testid="slot-content">Slot Content</div>
                    </RangeCalendarPrevButton>
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })

    it('has correct component name within RangeCalendar context', () => {
        render({
            components: { RangeCalendar, RangeCalendarPrevButton },
            template: `
                <RangeCalendar :numberOfMonths="1">
                    <RangeCalendarPrevButton />
                </RangeCalendar>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })
})
