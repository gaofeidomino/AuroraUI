# TagsInput 组件测试

## 测试覆盖范围

本目录包含 TagsInput 组件及其子组件的完整测试套件。

### 测试文件

- **TagsInput.test.ts** - TagsInput 主组件测试
- **TagsInputInput.test.ts** - TagsInputInput 组件测试
- **TagsInputItem.test.ts** - TagsInputItem 组件测试
- **TagsInputItemDelete.test.ts** - TagsInputItemDelete 组件测试
- **TagsInputItemText.test.ts** - TagsInputItemText 组件测试

### 测试内容

#### TagsInput 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TagsInputInput 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TagsInputItem 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TagsInputItemDelete 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TagsInputItemText 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 TagsInput 组件测试
pnpm test tests/components/tags-input

# 运行特定测试文件
pnpm test tests/components/tags-input/TagsInput.test.ts
```

## 功能特性

TagsInput 组件提供以下功能：

- 🏷️ 标签输入管理
- ➕ 动态添加标签
- ❌ 删除标签功能
- 📝 文本输入支持
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <TagsInput v-model="tags">
    <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
      <TagsInputItemText>{{ tag }}</TagsInputItemText>
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="Add tag..." />
  </TagsInput>
</template>

<script setup>
import { ref } from 'vue'
import { TagsInput, TagsInputItem, TagsInputItemText, TagsInputItemDelete, TagsInputInput } from '@/components/tags-input'

const tags = ref(['tag1', 'tag2'])
</script>
```
