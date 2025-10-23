# Pagination 组件测试

## 测试覆盖范围

本目录包含 Pagination 组件及其子组件的完整测试套件。

### 测试文件

- **Pagination.test.ts** - Pagination 主组件测试
- **PaginationContent.test.ts** - PaginationContent 组件测试
- **PaginationItem.test.ts** - PaginationItem 组件测试

### 测试内容

#### Pagination 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### PaginationContent 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### PaginationItem 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 Pagination 组件测试
pnpm test tests/components/pagination

# 运行特定测试文件
pnpm test tests/components/pagination/Pagination.test.ts
```

## 功能特性

Pagination 组件提供以下功能：

- 📄 分页导航
- 🔢 页码显示
- ⏮️ 首页/末页按钮
- ⏭️ 上一页/下一页按钮
- ⋯ 省略号显示
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <Pagination :total-pages="10" :current-page="1" @update:current-page="handlePageChange">
    <PaginationContent>
      <PaginationItem v-for="page in pages" :key="page" :page="page" />
    </PaginationContent>
  </Pagination>
</template>

<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const totalPages = 10

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>
```
