# Breadcrumb 组件测试文档

## 📊 测试概览

| 测试文件                        | 测试数量           | 状态 |
| ------------------------------- | ------------------ | ---- |
| `Breadcrumb.test.ts`            | 主组件测试         | ✅   |
| `BreadcrumbList.test.ts`        | List 组件测试      | ✅   |
| `BreadcrumbItem.test.ts`        | Item 组件测试      | ✅   |
| `BreadcrumbLink.test.ts`        | Link 组件测试      | ✅   |
| `BreadcrumbPage.test.ts`        | Page 组件测试      | ✅   |
| `BreadcrumbSeparator.test.ts`   | Separator 组件测试 | ✅   |
| `BreadcrumbEllipsis.test.ts`    | Ellipsis 组件测试  | ✅   |
| `BreadcrumbIntegration.test.ts` | 集成测试           | ✅   |

**总计: 8 个测试文件**

---

## 🧪 测试内容

### 1. Breadcrumb.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ 自定义样式类
- ✅ ARIA navigation 属性
- ✅ 插槽内容

### 2. BreadcrumbList.test.ts

**测试覆盖：**

- ✅ 作为 ol 元素渲染
- ✅ 自定义样式类
- ✅ 子项渲染

### 3. BreadcrumbItem.test.ts

**测试覆盖：**

- ✅ 作为 li 元素渲染
- ✅ 自定义样式类
- ✅ 内容渲染

### 4. BreadcrumbLink.test.ts

**测试覆盖：**

- ✅ 作为 a 元素渲染
- ✅ href 属性
- ✅ 点击事件
- ✅ 自定义样式类

### 5. BreadcrumbPage.test.ts

**测试覆盖：**

- ✅ 当前页面标识
- ✅ aria-current="page" 属性
- ✅ 自定义样式类

### 6. BreadcrumbSeparator.test.ts

**测试覆盖：**

- ✅ 默认分隔符（/）
- ✅ 自定义分隔符
- ✅ aria-hidden 属性

### 7. BreadcrumbEllipsis.test.ts

**测试覆盖：**

- ✅ 省略号渲染
- ✅ 自定义样式类
- ✅ 展开/折叠功能

### 8. BreadcrumbIntegration.test.ts

**测试覆盖：**

- ✅ 完整面包屑导航结构
- ✅ 链接导航功能
- ✅ 当前页面高亮
- ✅ 分隔符正确显示
- ✅ ARIA 无障碍性

---

## 📝 运行测试

```bash
# 运行所有 Breadcrumb 测试
pnpm test tests/components/breadcrumb

# 运行单个测试文件
pnpm test tests/components/breadcrumb/Breadcrumb.test.ts

# 生成覆盖率报告
pnpm test:coverage -- tests/components/breadcrumb
```

---

## ✅ 测试结果

所有测试通过 ✨

---

## 🏗️ 组件结构

```vue
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">文档</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>当前页</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```
