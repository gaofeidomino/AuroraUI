# Popover 组件测试

## 测试覆盖范围

本目录包含 Popover 组件及其子组件的完整测试套件。

### 测试文件

- **Popover.test.ts** - Popover 主组件测试
- **PopoverContent.test.ts** - PopoverContent 组件测试
- **PopoverTrigger.test.ts** - PopoverTrigger 组件测试

### 测试内容

#### Popover 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### PopoverContent 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### PopoverTrigger 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 Popover 组件测试
pnpm test tests/components/popover

# 运行特定测试文件
pnpm test tests/components/popover/Popover.test.ts
```

## 功能特性

Popover 组件提供以下功能：

- 🎯 弹出框显示
- 📍 位置控制
- 🎨 自定义内容
- 🖱️ 点击触发
- ⌨️ 键盘导航
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <Popover>
    <PopoverTrigger>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div>Popover content goes here</div>
    </PopoverContent>
  </Popover>
</template>

<script setup>
import { Button } from '@/components/button'
</script>
```
