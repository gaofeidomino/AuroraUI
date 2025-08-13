# AuroraUI 测试指南

## 概述

AuroraUI 组件库已经配置了完整的测试环境，包括单元测试、类型检查、代码质量检查和测试覆盖率报告。

## 测试环境

- **Vitest**: 现代化的测试运行器，支持 Vue 3 和 TypeScript
- **@vue/test-utils**: Vue 官方测试工具
- **@testing-library/vue**: 用户友好的测试工具，专注于用户行为测试
- **jsdom**: DOM 环境模拟
- **@vitest/coverage-v8**: 测试覆盖率工具

## 快速开始

### 运行所有测试

```bash
# 运行完整的测试流程（包括类型检查、lint、单元测试和覆盖率）
pnpm test:full

# 或者分别运行
pnpm test:run        # 运行单元测试
pnpm test:coverage   # 运行测试并生成覆盖率报告
pnpm test:ui         # 启动测试 UI（交互式界面）
```

### 开发模式

```bash
# 启动测试监听模式
pnpm test
```

## 测试文件结构

```
tests/
├── components/          # 组件测试
│   ├── Button.test.ts   # Button 组件测试
│   └── Card.test.ts     # Card 组件测试（待实现）
├── examples/            # 测试示例和最佳实践
│   └── ComponentTestExamples.test.ts
├── utils/               # 测试工具
│   └── test-utils.ts
├── vitest.setup.ts      # 测试环境设置
└── README.md           # 详细测试文档
```

## 当前测试状态

### ✅ 已测试的组件

1. **Button 组件** (`src/components/button/`)
   - ✅ 基础渲染测试
   - ✅ 变体测试 (default, destructive, outline, secondary, ghost, link)
   - ✅ 尺寸测试 (default, sm, lg, icon)
   - ✅ 自定义类名测试
   - ✅ 事件处理测试
   - ✅ 禁用状态测试
   - ✅ 插槽内容测试
   - ✅ 元素类型测试 (button, link)
   - **测试覆盖率: 100%**

2. **工具函数** (`src/utils/`)
   - ✅ cn.ts - 类名合并工具
   - **测试覆盖率: 100%**

### 🔄 待测试的组件

1. **Card 组件** (`src/components/card/`)
   - 目前只有基础结构，需要实现组件后添加测试

## 测试覆盖率

当前测试覆盖率报告：

```
File                   | % Stmts | % Branch | % Funcs | % Lines
-----------------------|---------|----------|---------|---------
src/components/button  |     100 |      100 |     100 |     100
src/utils/cn.ts        |     100 |      100 |     100 |     100
```

## 编写新组件测试

### 1. 创建测试文件

在 `tests/components/` 目录下创建 `ComponentName.test.ts` 文件。

### 2. 基本测试结构

```typescript
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { ComponentName } from '@/components/component-name'

describe('ComponentName Component', () => {
  it('renders correctly with default props', () => {
    render(ComponentName, {
      slots: { default: 'Component Content' },
    })

    expect(screen.getByText('Component Content')).toBeInTheDocument()
  })

  // 添加更多测试...
})
```

### 3. 测试类型

- **渲染测试**: 确保组件正确渲染
- **属性测试**: 测试不同属性的效果
- **事件测试**: 测试用户交互和事件处理
- **插槽测试**: 测试插槽内容渲染
- **状态测试**: 测试组件的不同状态
- **可访问性测试**: 测试 ARIA 属性和键盘导航
- **样式测试**: 测试 CSS 类名应用

## 测试最佳实践

1. **测试用户行为**: 使用 `@testing-library/vue` 和 `userEvent`
2. **测试可访问性**: 确保组件具有正确的 ARIA 属性
3. **测试边界情况**: 测试空值、无效输入等
4. **保持测试简单**: 每个测试只测试一个功能
5. **使用描述性测试名称**: 清楚描述测试的目的
6. **清理测试环境**: 使用 `unmount()` 清理 DOM

## 故障排除

### 常见问题

1. **组件不渲染**: 检查导入路径和组件注册
2. **样式测试失败**: 确保 Tailwind CSS 类名正确
3. **事件测试失败**: 检查事件处理器设置
4. **类型错误**: 运行 `pnpm type-check` 检查类型

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

## CI/CD 集成

测试脚本已经配置为可以在 CI/CD 环境中运行：

```yaml
# GitHub Actions 示例
- name: Run tests
  run: pnpm test:full
```

## 贡献指南

1. 为新组件编写测试
2. 确保测试覆盖率不低于 80%
3. 运行完整的测试流程
4. 更新测试文档

---

更多详细信息请查看 `tests/README.md` 文件。
