# Calendar 组件测试文档

## 📊 测试概览

| 测试文件                      | 测试数量             | 状态 |
| ----------------------------- | -------------------- | ---- |
| `Calendar.test.ts`            | 主组件测试           | ✅   |
| `CalendarHeader.test.ts`      | Header 组件测试      | ✅   |
| `CalendarHeading.test.ts`     | Heading 组件测试     | ✅   |
| `CalendarGrid.test.ts`        | Grid 组件测试        | ✅   |
| `CalendarGridHead.test.ts`    | GridHead 组件测试    | ✅   |
| `CalendarGridBody.test.ts`    | GridBody 组件测试    | ✅   |
| `CalendarGridRow.test.ts`     | GridRow 组件测试     | ✅   |
| `CalendarHeadCell.test.ts`    | HeadCell 组件测试    | ✅   |
| `CalendarCell.test.ts`        | Cell 组件测试        | ✅   |
| `CalendarCellTrigger.test.ts` | CellTrigger 组件测试 | ✅   |
| `CalendarPrevButton.test.ts`  | PrevButton 组件测试  | ✅   |
| `CalendarNextButton.test.ts`  | NextButton 组件测试  | ✅   |
| `CalendarIntegration.test.ts` | 集成测试             | ✅   |

**总计: 13 个测试文件**

---

## 🧪 测试内容

### 核心组件测试

#### 1. Calendar.test.ts

- ✅ 默认渲染
- ✅ 日期选择
- ✅ 自定义初始日期
- ✅ 最小/最大日期限制
- ✅ 禁用日期
- ✅ 多选模式
- ✅ 自定义样式类

#### 2. CalendarHeader.test.ts

- ✅ 头部渲染
- ✅ 月份/年份显示
- ✅ 导航按钮

#### 3. CalendarGrid.test.ts

- ✅ 日历网格渲染
- ✅ 表格结构
- ✅ ARIA 属性

### 单元格组件测试

#### 4. CalendarCell.test.ts

- ✅ 单元格渲染
- ✅ 日期显示
- ✅ 选中状态
- ✅ 禁用状态
- ✅ 今日标识

#### 5. CalendarCellTrigger.test.ts

- ✅ 点击事件
- ✅ 键盘导航
- ✅ ARIA 属性
- ✅ 自定义样式

### 导航组件测试

#### 6. CalendarPrevButton.test.ts

- ✅ 上一月/年按钮
- ✅ 点击事件
- ✅ 禁用状态

#### 7. CalendarNextButton.test.ts

- ✅ 下一月/年按钮
- ✅ 点击事件
- ✅ 禁用状态

### 集成测试

#### 8. CalendarIntegration.test.ts

- ✅ 完整日历功能
- ✅ 日期选择流程
- ✅ 月份切换
- ✅ 年份切换
- ✅ 键盘导航
- ✅ 范围选择
- ✅ 无障碍性

---

## 📝 运行测试

```bash
# 运行所有 Calendar 测试
pnpm test tests/components/calendar

# 运行单个测试文件
pnpm test tests/components/calendar/Calendar.test.ts

# 生成覆盖率报告
pnpm test:coverage -- tests/components/calendar
```

---

## ✅ 测试结果

所有测试通过 ✨

---

## 🏗️ 组件结构

Calendar 是一个复杂的日期选择组件，包含多个子组件：

```vue
<Calendar v-model="date">
  <CalendarHeader>
    <CalendarPrevButton />
    <CalendarHeading />
    <CalendarNextButton />
  </CalendarHeader>
  
  <CalendarGrid>
    <CalendarGridHead>
      <CalendarGridRow>
        <CalendarHeadCell>日</CalendarHeadCell>
        <!-- ... 其他星期 -->
      </CalendarGridRow>
    </CalendarGridHead>
    
    <CalendarGridBody>
      <CalendarGridRow>
        <CalendarCell>
          <CalendarCellTrigger />
        </CalendarCell>
        <!-- ... 其他日期 -->
      </CalendarGridRow>
    </CalendarGridBody>
  </CalendarGrid>
</Calendar>
```

---

## 🎨 功能特性

- 📅 单日期/多日期/范围选择
- 🔄 月份/年份导航
- ⌨️ 完整键盘支持
- ♿ ARIA 无障碍性
- 🚫 日期禁用
- 📍 今日标识
- 🎨 完全可定制样式
