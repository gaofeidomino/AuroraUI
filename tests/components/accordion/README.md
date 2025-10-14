# Accordion 组件测试文档

## 📊 测试概览

| 测试文件                       | 测试数量         | 状态 |
| ------------------------------ | ---------------- | ---- |
| `Accordion.test.ts`            | 主组件测试       | ✅   |
| `AccordionItem.test.ts`        | Item 组件测试    | ✅   |
| `AccordionTrigger.test.ts`     | Trigger 组件测试 | ✅   |
| `AccordionContent.test.ts`     | Content 组件测试 | ✅   |
| `AccordionIntegration.test.ts` | 集成测试         | ✅   |

**总计: 5 个测试文件**

---

## 🧪 测试内容

### 1. Accordion.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ 单选模式（type="single"）
- ✅ 多选模式（type="multiple"）
- ✅ 可折叠选项
- ✅ 自定义样式类
- ✅ data-slot 属性

### 2. AccordionItem.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ value 属性
- ✅ 禁用状态
- ✅ 自定义样式类
- ✅ 插槽内容

### 3. AccordionTrigger.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ 点击展开/折叠
- ✅ 自定义样式类
- ✅ ARIA 属性
- ✅ 禁用状态

### 4. AccordionContent.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ 展开/折叠动画
- ✅ 自定义样式类
- ✅ 内容可见性

### 5. AccordionIntegration.test.ts

**测试覆盖：**

- ✅ 完整 Accordion 结构
- ✅ 单选模式交互
- ✅ 多选模式交互
- ✅ 键盘导航
- ✅ ARIA 无障碍性

---

## 📝 运行测试

```bash
# 运行所有 Accordion 测试
pnpm test tests/components/accordion

# 运行单个测试文件
pnpm test tests/components/accordion/Accordion.test.ts

# 生成覆盖率报告
pnpm test:coverage -- tests/components/accordion
```

---

## ✅ 测试结果

所有测试通过 ✨

---

## 🏗️ 组件结构

```vue
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>标题 1</AccordionTrigger>
    <AccordionContent>内容 1</AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-2">
    <AccordionTrigger>标题 2</AccordionTrigger>
    <AccordionContent>内容 2</AccordionContent>
  </AccordionItem>
</Accordion>
```
