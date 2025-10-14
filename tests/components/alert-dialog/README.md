# AlertDialog 组件测试文档

## 📊 测试概览

| 测试文件                         | 测试数量             | 状态 |
| -------------------------------- | -------------------- | ---- |
| `AlertDialog.test.ts`            | 主组件测试           | ✅   |
| `AlertDialogTrigger.test.ts`     | Trigger 组件测试     | ✅   |
| `AlertDialogContent.test.ts`     | Content 组件测试     | ✅   |
| `AlertDialogHeader.test.ts`      | Header 组件测试      | ✅   |
| `AlertDialogTitle.test.ts`       | Title 组件测试       | ✅   |
| `AlertDialogDescription.test.ts` | Description 组件测试 | ✅   |
| `AlertDialogFooter.test.ts`      | Footer 组件测试      | ✅   |
| `AlertDialogAction.test.ts`      | Action 组件测试      | ✅   |
| `AlertDialogCancel.test.ts`      | Cancel 组件测试      | ✅   |
| `AlertDialogIntegration.test.ts` | 集成测试             | ✅   |
| `AlertDialogComplete.test.ts`    | 完整测试             | ✅   |

**总计: 11 个测试文件**

---

## 🧪 测试内容

### 核心组件测试

#### 1. AlertDialog.test.ts

- ✅ 默认关闭状态
- ✅ 打开/关闭控制
- ✅ 自定义样式类
- ✅ 模态框属性

#### 2. AlertDialogTrigger.test.ts

- ✅ 触发器渲染
- ✅ 点击打开对话框
- ✅ 自定义触发元素
- ✅ 禁用状态

#### 3. AlertDialogContent.test.ts

- ✅ 内容渲染
- ✅ 遮罩层
- ✅ ESC 关闭
- ✅ 点击外部关闭
- ✅ 焦点陷阱
- ✅ ARIA 属性

### 内容区域组件

#### 4. AlertDialogHeader.test.ts

- ✅ 头部渲染
- ✅ 自定义样式类
- ✅ 插槽内容

#### 5. AlertDialogTitle.test.ts

- ✅ 标题渲染
- ✅ 语义化标签（h2）
- ✅ ARIA labelledby

#### 6. AlertDialogDescription.test.ts

- ✅ 描述渲染
- ✅ ARIA describedby
- ✅ 自定义样式

#### 7. AlertDialogFooter.test.ts

- ✅ 底部渲染
- ✅ 按钮容器
- ✅ 布局样式

### 操作按钮组件

#### 8. AlertDialogAction.test.ts

- ✅ 确认按钮
- ✅ 点击事件
- ✅ 自动关闭对话框
- ✅ 自定义样式

#### 9. AlertDialogCancel.test.ts

- ✅ 取消按钮
- ✅ 点击事件
- ✅ 自动关闭对话框
- ✅ 自定义样式

### 集成测试

#### 10. AlertDialogIntegration.test.ts

- ✅ 完整对话框流程
- ✅ 打开/关闭交互
- ✅ 确认/取消行为
- ✅ 键盘导航
- ✅ 焦点管理

#### 11. AlertDialogComplete.test.ts

- ✅ 真实使用场景
- ✅ 删除确认对话框
- ✅ 警告对话框
- ✅ 异步操作处理

---

## 📝 运行测试

```bash
# 运行所有 AlertDialog 测试
pnpm test tests/components/alert-dialog

# 运行单个测试文件
pnpm test tests/components/alert-dialog/AlertDialog.test.ts

# 生成覆盖率报告
pnpm test:coverage -- tests/components/alert-dialog
```

---

## ✅ 测试结果

所有测试通过 ✨

---

## 🏗️ 组件结构

```vue
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">删除</Button>
  </AlertDialogTrigger>
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>确认删除？</AlertDialogTitle>
      <AlertDialogDescription>
        此操作无法撤销，将永久删除数据。
      </AlertDialogDescription>
    </AlertDialogHeader>
    
    <AlertDialogFooter>
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction>确认删除</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

## 🎨 功能特性

- 🔒 模态框（Modal）
- ⌨️ 键盘导航（ESC 关闭）
- 🎯 焦点管理（焦点陷阱）
- ♿ 完整的 ARIA 支持
- 🖱️ 点击外部关闭
- 🎨 完全可定制样式
- 📱 响应式设计
- ⚡ 异步操作支持
