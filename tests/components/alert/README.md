# Alert 组件测试文档

## 📊 测试概览

| 测试文件                   | 测试数量     | 状态 |
| -------------------------- | ------------ | ---- |
| `Alert.test.ts`            | 主组件测试   | ✅   |
| `AlertTitle.test.ts`       | 标题组件测试 | ✅   |
| `AlertDescription.test.ts` | 描述组件测试 | ✅   |
| `AlertIntegration.test.ts` | 集成测试     | ✅   |

**总计: 4 个测试文件**

---

## 🧪 测试内容

### 1. Alert.test.ts

**测试覆盖：**

- ✅ 默认渲染
- ✅ 多种变体（default, destructive）
- ✅ 自定义样式类
- ✅ 插槽内容
- ✅ data-slot 属性
- ✅ role 属性（alert）

### 2. AlertTitle.test.ts

**测试覆盖：**

- ✅ 作为 h5 元素渲染
- ✅ 自定义样式类
- ✅ 文本内容渲染

### 3. AlertDescription.test.ts

**测试覆盖：**

- ✅ 作为 div 元素渲染
- ✅ 自定义样式类
- ✅ 描述文本渲染

### 4. AlertIntegration.test.ts

**测试覆盖：**

- ✅ 完整 Alert 结构
- ✅ 组件间协同工作
- ✅ 语义化 HTML 结构
- ✅ 不同变体的完整渲染

---

## 📝 运行测试

```bash
# 运行所有 Alert 测试
pnpm test tests/components/alert

# 运行单个测试文件
pnpm test tests/components/alert/Alert.test.ts

# 生成覆盖率报告
pnpm test:coverage -- tests/components/alert
```

---

## ✅ 测试结果

所有测试通过 ✨

---

## 🏗️ 组件结构

```vue
<Alert variant="default">
  <AlertTitle>标题</AlertTitle>
  <AlertDescription>描述文本</AlertDescription>
</Alert>
```
