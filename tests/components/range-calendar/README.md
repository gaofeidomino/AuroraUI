# RangeCalendar 组件测试

## 测试覆盖范围

本目录包含 RangeCalendar 组件及其子组件的完整测试套件。

### 测试文件

- **RangeCalendar.test.ts** - RangeCalendar 主组件测试
- **RangeCalendarCell.test.ts** - RangeCalendarCell 组件测试
- **RangeCalendarCellTrigger.test.ts** - RangeCalendarCellTrigger 组件测试
- **RangeCalendarGrid.test.ts** - RangeCalendarGrid 组件测试
- **RangeCalendarHeader.test.ts** - RangeCalendarHeader 组件测试 lair
- **RangeCalendarHeading.test.ts** - RangeCalendarHeading 组件测试
- **RangeCalendarNextButton.test.ts** - RangeCalendarNextButton 组件测试
- **RangeCalendarPrevButton.test.ts** - RangeCalendarPrevButton 组件测试

### 测试内容

#### RangeCalendar 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarCell 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarCellTrigger 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarGrid 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarHeader 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarHeading 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarNextButton 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RangeCalendarPrevButton 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 RangeCalendar 组件测试
pnpm test tests/components/range-calendar

# 运行特定测试文件
pnpm test tests/components/range-calendar/RangeCalendar.test.ts
```

## 功能特性

RangeCalendar 组件提供以下功能：

- 📅 日期范围选择
- 📱 多月份显示支持
- 🎯 精确的日期选择
- 📊 网格布局
- ♿ 无障碍支持
- 🌐 国际化支持

## 使用示例

```vue
<template>
  <RangeCalendar :numberOfMonths="2" v-model="dateRange" />
</template>

<script setup>
import { ref } from 'vue'
import { RangeCalendar } from '@/components/range-calendar'

const dateRange = ref({
  start: new Date(),
  end: new Date(),
})
</script>
```
