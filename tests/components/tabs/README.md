# Tabs 组件测试

## 测试覆盖范围

本目录包含 Tabs 组件及其子组件的完整测试套件。

### 测试文件

- **Tabs.test.ts** - Tabs 主组件测试
- **TabsContent.test.ts** - TabsContent 组件测试

### 测试内容

#### Tabs 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TabsContent 组件

- ✅ 默认渲染测试
- ✅ 插槽内容渲染测试

## 运行测试

```bash
# 运行 Tabs 组件测试
pnpm test tests/components/tabs

# 运行特定测试文件
pnpm test tests/components/tabs/Tabs.test.ts
```

## 功能特性

Tabs 组件提供以下功能：

- 📑 标签页导航
- 📋 内容切换
- 🎨 自定义样式
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <Tabs v-model="activeTab">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Tab 1 Content</TabsContent>
    <TabsContent value="tab2">Tab 2 Content</TabsContent>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
</script>
```
