# Resizable 组件测试

## 测试覆盖范围

本目录包含 Resizable 组件及其子组件的完整测试套件。

### 测试文件

- **ResizablePanelGroup.test.ts** - ResizablePanelGroup 主组件测试
- **ResizablePanel.test.ts** - ResizablePanel 组件测试
- **ResizableHandle.test.ts** - ResizableHandle 组件测试

### 测试内容

#### ResizablePanelGroup 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### ResizablePanel 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### ResizableHandle 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 手柄渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 Resizable 组件测试
pnpm test tests/components/resizable

# 运行特定测试文件
pnpm test tests/components/resizable/ResizablePanelGroup.test.ts
```

## 功能特性

Resizable 组件提供以下功能：

- 📐 可调整大小的面板组
- 🔄 水平/垂直方向支持
- 🎛️ 拖拽调整大小
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel :defaultSize="50">
      <div>Left Panel</div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :defaultSize="50">
      <div>Right Panel</div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<script setup>
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/resizable'
</script>
```
