# ToggleGroup 组件测试

## 测试覆盖范围

本目录包含 ToggleGroup 组件及其子组件的完整测试套件。

### 测试文件

- **ToggleGroup.test.ts** - ToggleGroup 主组件测试
- **ToggleGroupItem.test.ts** - ToggleGroupItem 组件测试

### 测试内容

#### ToggleGroup 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### ToggleGroupItem 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 ToggleGroup 组件测试
pnpm test tests/components/toggle-group

# 运行特定测试文件
pnpm test tests/components/toggle-group/ToggleGroup.test.ts
```

## 功能特性

ToggleGroup 组件提供以下功能：

- 🔘 切换按钮组
- 📱 单选/多选支持
- 🎨 多种样式变体
- 📏 多种尺寸支持
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <ToggleGroup type="single" variant="outline">
    <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
    <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
    <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
  </ToggleGroup>
</template>

<script setup>
import { ToggleGroup, ToggleGroupItem } from '@/components/toggle-group'
</script>
```
