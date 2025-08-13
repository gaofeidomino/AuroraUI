# 组件测试指南

这个目录包含了 AuroraUI 组件库的测试文件。

## 测试环境

- **Vitest**: 测试运行器
- **@vue/test-utils**: Vue 组件测试工具
- **@testing-library/vue**: 用户友好的测试工具
- **jsdom**: DOM 环境模拟

## 运行测试

```bash
# 运行所有测试
pnpm test

# 运行测试并生成报告
pnpm test:run

# 运行测试并显示覆盖率
pnpm test:coverage

# 启动测试 UI（交互式界面）
pnpm test:ui
```

## 测试文件结构

```
tests/
├── components/          # 组件测试
│   ├── Button.test.ts   # Button 组件测试
│   └── Card.test.ts     # Card 组件测试
├── examples/            # 测试示例
│   └── ComponentTestExamples.test.ts
├── utils/               # 测试工具
│   └── test-utils.ts
├── vitest.setup.ts      # 测试环境设置
└── README.md           # 本文件
```

## 编写测试

### 基本测试结构

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Button } from '@/components/button'

describe('Button Component', () => {
  it('renders correctly', () => {
    render(Button, {
      slots: { default: 'Click me' },
    })

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### 测试组件属性

```typescript
it('applies variant classes', () => {
  render(Button, {
    props: { variant: 'destructive' },
    slots: { default: 'Button' },
  })

  const button = screen.getByRole('button')
  expect(button).toHaveClass('bg-destructive')
})
```

### 测试事件

```typescript
it('handles click events', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()

  render(Button, {
    props: { onClick: handleClick },
    slots: { default: 'Click me' },
  })

  const button = screen.getByRole('button')
  await user.click(button)

  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### 测试插槽

```typescript
it('renders slot content', () => {
  render(Button, {
    slots: {
      default: '<span>Custom content</span>',
    },
  })

  expect(screen.getByText('Custom content')).toBeInTheDocument()
})
```

## 测试最佳实践

1. **测试用户行为**: 使用 `@testing-library/vue` 和 `userEvent` 来模拟真实用户交互
2. **测试可访问性**: 确保组件具有正确的 ARIA 属性和键盘导航
3. **测试样式**: 验证 CSS 类名是否正确应用
4. **测试状态**: 测试组件的不同状态（加载、禁用、错误等）
5. **测试边界情况**: 测试空值、无效输入等边界情况

## 常用测试工具

### 查询元素

```typescript
// 通过角色查询
screen.getByRole('button')
screen.getByRole('link')

// 通过文本查询
screen.getByText('Button text')
screen.getByLabelText('Label text')

// 通过测试 ID 查询
screen.getByTestId('my-button')
```

### 断言

```typescript
// 元素存在性
expect(element).toBeInTheDocument()

// CSS 类
expect(element).toHaveClass('bg-primary')

// 属性
expect(element).toHaveAttribute('href', '/link')

// 文本内容
expect(element).toHaveTextContent('Button text')

// 事件调用
expect(mockFunction).toHaveBeenCalledTimes(1)
```

### 用户交互

```typescript
const user = userEvent.setup()

// 点击
await user.click(element)

// 输入
await user.type(input, 'text')

// 键盘导航
await user.keyboard('{Tab}')
await user.keyboard('{Enter}')
```

## 故障排除

### 常见问题

1. **组件不渲染**: 检查是否正确导入了组件
2. **样式测试失败**: 确保 Tailwind CSS 类名正确
3. **事件测试失败**: 确保正确设置了事件处理器
4. **插槽测试失败**: 检查插槽名称和内容

### 调试技巧

```typescript
// 打印 DOM 结构
screen.debug()

// 打印特定元素
screen.debug(element)

// 使用 prettyDOM 格式化输出
import { prettyDOM } from '@testing-library/dom'
console.log(prettyDOM(element))
```
