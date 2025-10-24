# Tooltip 组件测试

## 测试覆盖范围

本目录包含 Tooltip 组件及其子组件的完整测试套件。

### 测试文件

- **Tooltip.test.ts** - Tooltip 主组件测试
- **TooltipContent.test.ts** - TooltipContent 组件测试
- **TooltipProvider.test.ts** - TooltipProvider 组件测试
- **TooltipTrigger.test.ts** - TooltipTrigger 组件测试

### 测试内容

#### Tooltip 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TooltipContent 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TooltipProvider 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TooltipTrigger 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 Tooltip 组件测试
pnpm test tests/components/tooltip

# 运行特定测试文件
pnpm test tests/components/tooltip/Tooltip.test.ts
```

## 功能特性

Tooltip 组件提供以下功能：

- 💡 提示信息显示
- 🎯 精确定位
- ⏱️ 延迟显示控制
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <button>Hover me</button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup>
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'
</script>
```
