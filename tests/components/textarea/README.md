# Textarea 组件测试

## 测试覆盖范围

本目录包含 Textarea 组件的完整测试套件。

### 测试文件

- **Textarea.test.ts** - Textarea 主组件测试

### 测试内容

#### Textarea 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 Textarea 组件测试
pnpm test tests/components/textarea

# 运行特定测试文件
pnpm test tests/components/textarea/Textarea.test.ts
```

## 功能特性

Textarea 组件提供以下功能：

- 📝 多行文本输入
- 🔄 双向数据绑定
- 📱 响应式设计
- ♿ 无障碍支持
- 🎨 自定义样式支持

## 使用示例

```vue
<template>
  <Textarea v-model="text" placeholder="Enter your text..." class="min-h-32" />
</template>

<script setup>
import { ref } from 'vue'
import { Textarea } from '@/components/textarea'

const text = ref('')
</script>
```
