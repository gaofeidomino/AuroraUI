# Table 组件测试

## 测试覆盖范围

本目录包含 Table 组件及其子组件的完整测试套件。

### 测试文件

- **Table.test.ts** - Table 主组件测试
- **TableBody.test.ts** - TableBody 组件测试
- **TableCell.test.ts** - TableCell 组件测试

### 测试内容

#### Table 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### TableBody 组件

- ✅ 默认渲染测试
- ✅ 插槽内容渲染测试

#### TableCell 组件

- ✅ 默认渲染测试
- ✅ 插槽内容渲染测试

## 运行测试

```bash
# 运行 Table 组件测试
pnpm test tests/components/table

# 运行特定测试文件
pnpm test tests/components/table/Table.test.ts
```

## 功能特性

Table 组件提供以下功能：

- 📊 数据表格显示
- 📋 表头/表体结构
- 🎨 自定义样式
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>Cell Content</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup>
import { Table, TableBody, TableRow, TableCell } from '@/components/table'
</script>
```
