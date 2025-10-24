# 组件测试文档索引

本目录包含 AuroraUI 所有组件的测试文件和测试文档。

---

## 📊 测试概览

| 组件                                        | 测试文件数 | 文档 | 状态 |
| ------------------------------------------- | ---------- | ---- | ---- |
| [Accordion](./accordion/README.md)          | 5          | ✅   | ✅   |
| [Alert](./alert/README.md)                  | 4          | ✅   | ✅   |
| [AlertDialog](./alert-dialog/README.md)     | 11         | ✅   | ✅   |
| [AspectRatio](./aspect-ratio/README.md)     | 1          | ✅   | ✅   |
| [Avatar](./avatar/README.md)                | 1          | ✅   | ✅   |
| [Badge](./badge/README.md)                  | 1          | ✅   | ✅   |
| [Breadcrumb](./breadcrumb/README.md)        | 8          | ✅   | ✅   |
| [Calendar](./calendar/README.md)            | 13         | ✅   | ✅   |
| [Card](./card/README.md)                    | 1          | ✅   | ✅   |
| [Carousel](./carousel/README.md)            | 7          | ✅   | ✅   |
| [Form](./form/README.md)                    | 4          | ✅   | ✅   |
| [NumberField](./number-field/README.md)     | 3          | ✅   | ✅   |
| [Pagination](./pagination/README.md)        | 3          | ✅   | ✅   |
| [PinInput](./pin-input/README.md)           | 2          | ✅   | ✅   |
| [Popover](./popover/README.md)              | 3          | ✅   | ✅   |
| [Progress](./progress/README.md)            | 1          | ✅   | ✅   |
| [RadioGroup](./radio-group/README.md)       | 2          | ✅   | ✅   |
| [Table](./table/README.md)                  | 3          | ✅   | ✅   |
| [Tabs](./tabs/README.md)                    | 2          | ✅   | ✅   |
| [Resizable](./resizable/README.md)          | 3          | ✅   | ✅   |
| [RangeCalendar](./range-calendar/README.md) | 8          | ✅   | ✅   |
| [Textarea](./textarea/README.md)            | 1          | ✅   | ✅   |
| [Tooltip](./tooltip/README.md)              | 4          | ✅   | ✅   |
| [ToggleGroup](./toggle-group/README.md)     | 2          | ✅   | ✅   |
| [TagsInput](./tags-input/README.md)         | 5          | ✅   | ✅   |

**总计: 101+ 个测试文件**

---

## 🧪 测试分类

### 基础组件

- **Badge** - 徽章组件
- **Button** - 按钮组件
- **Card** - 卡片组件
- **AspectRatio** - 宽高比组件
- **Avatar** - 头像组件

### 表单组件

- **Input** - 输入框
- **Textarea** - 文本域
- **Label** - 标签

### 导航组件

- **Breadcrumb** - 面包屑导航
- **Accordion** - 手风琴折叠面板

### 反馈组件

- **Alert** - 警告提示
- **AlertDialog** - 警告对话框

### 数据展示组件

- **Calendar** - 日历选择器
- **Carousel** - 轮播图
- **Table** - 数据表格
- **Progress** - 进度条
- **Pagination** - 分页组件

### 输入组件

- **NumberField** - 数字输入框
- **PinInput** - 密码输入框
- **RadioGroup** - 单选框组

### 交互组件

- **Popover** - 弹出框
- **Tabs** - 标签页
- **Resizable** - 可调整大小的面板

### 布局组件

- **RangeCalendar** - 日期范围选择器

### 表单组件

- **Textarea** - 多行文本输入框
- **TagsInput** - 标签输入框

### 交互组件

- **Tooltip** - 提示框
- **ToggleGroup** - 切换按钮组

---

## 📝 运行测试

### 运行所有测试

```bash
pnpm test tests/components
```

### 运行特定组件测试

```bash
# Accordion 组件
pnpm test tests/components/accordion

# Alert 组件
pnpm test tests/components/alert

# Calendar 组件
pnpm test tests/components/calendar

# Carousel 组件
pnpm test tests/components/carousel
```

### 生成覆盖率报告

```bash
# 所有组件覆盖率
pnpm test:coverage -- tests/components

# 特定组件覆盖率
pnpm test:coverage -- tests/components/carousel
```

---

## 🎯 测试标准

所有组件测试遵循以下标准：

### 1. 基础测试

- ✅ 默认渲染
- ✅ Props 传递
- ✅ 事件触发
- ✅ 插槽内容

### 2. 样式测试

- ✅ 自定义样式类
- ✅ 变体（variants）
- ✅ 尺寸（sizes）
- ✅ data-slot 属性

### 3. 交互测试

- ✅ 点击事件
- ✅ 键盘导航
- ✅ 表单输入
- ✅ 状态变化

### 4. 无障碍性测试

- ✅ ARIA 属性
- ✅ 语义化 HTML
- ✅ 键盘可访问性
- ✅ 屏幕阅读器支持

### 5. 集成测试

- ✅ 组件间交互
- ✅ 完整使用场景
- ✅ 边界情况
- ✅ 错误处理

---

## 📚 测试文档

每个组件目录都包含一个 `README.md` 文件，详细说明：

- 📊 测试覆盖范围
- 🧪 测试内容详解
- 📝 运行测试命令
- 🏗️ 组件使用示例
- 🎨 功能特性说明

---

## 🔧 测试工具

- **Vitest** - 快速的单元测试框架
- **Vue Test Utils** - Vue 组件测试工具
- **Testing Library** - 用户行为测试
- **JSDOM** - 浏览器环境模拟

---

## 📈 持续改进

- [ ] 提高测试覆盖率到 100%
- [ ] 添加性能测试
- [ ] 添加端到端测试
- [ ] 添加视觉回归测试
- [ ] 完善测试文档

---

## 🤝 贡献指南

在添加新组件时，请确保：

1. ✅ 为组件创建完整的测试套件
2. ✅ 编写测试文档 `README.md`
3. ✅ 确保所有测试通过
4. ✅ 达到合理的测试覆盖率（建议 >80%）
5. ✅ 包含集成测试和边界情况测试

---

## 📖 相关文档

- [测试指南](../README.md)
- [项目文档](../../README.md)
- [开发指南](../../DEVELOPMENT.md)
- [组件文档](../../src/components/README.md)
