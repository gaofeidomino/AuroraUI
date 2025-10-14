# Form 组件测试文档

## 📊 测试概览

| 测试文件           | 测试数量       | 状态 |
| ------------------ | -------------- | ---- |
| `Button.test.ts`   | 按钮组件测试   | ✅   |
| `Input.test.ts`    | 输入框组件测试 | ✅   |
| `Label.test.ts`    | 标签组件测试   | ✅   |
| `Textarea.test.ts` | 文本域组件测试 | ✅   |

**总计: 4 个测试文件**

---

## 🧪 测试内容

### 1. Button.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ 多种变体（default, destructive, outline, secondary, ghost, link）
- ✅ 多种尺寸（default, sm, lg, icon）
- ✅ 点击事件处理
- ✅ 禁用状态
- ✅ 自定义样式类
- ✅ 作为不同元素渲染（button, a）

### 2. Input.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ v-model 双向绑定
- ✅ placeholder 属性
- ✅ 输入事件处理
- ✅ 禁用状态
- ✅ 只读状态
- ✅ 自定义类型（text, password, email）
- ✅ 自定义样式类

### 3. Label.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ for 属性（与 input 关联）
- ✅ 自定义样式类
- ✅ 插槽内容
- ✅ 点击行为

### 4. Textarea.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ v-model 双向绑定
- ✅ placeholder 属性
- ✅ rows 和 cols 属性
- ✅ 禁用状态
- ✅ 只读状态
- ✅ 自动调整大小
- ✅ 自定义样式类

---

## 📝 运行测试

```bash
# 运行所有 Form 测试
pnpm test tests/components/form

# 运行单个测试文件
pnpm test tests/components/form/Button.test.ts

# 生成覆盖率报告
pnpm test:coverage -- tests/components/form
```

---

## ✅ 测试结果

所有测试通过 ✨

---

## 🏗️ 表单组件示例

```vue
<template>
  <form>
    <Label for="name">姓名</Label>
    <Input id="name" v-model="form.name" placeholder="请输入姓名" />

    <Label for="message">留言</Label>
    <Textarea id="message" v-model="form.message" placeholder="请输入留言" :rows="4" />

    <Button type="submit">提交</Button>
  </form>
</template>
```
