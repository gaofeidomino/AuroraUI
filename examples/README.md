# AuroraUI 示例应用

这是 AuroraUI 组件库的示例应用，展示了如何使用各种组件。

## 功能特性

- 🎨 完整的组件展示
- 📝 代码示例和用法说明
- 🎯 交互式演示
- 📱 响应式设计
- 🌙 支持深色模式

## 快速开始

### 安装依赖

```bash
# 在项目根目录下
pnpm install

# 或者进入 examples 目录
cd examples
pnpm install
```

### 启动开发服务器

```bash
# 方式1: 从项目根目录启动
pnpm dev:examples

# 方式2: 进入 examples 目录启动
cd examples
pnpm dev
```

### 构建生产版本

```bash
cd examples
pnpm build
```

## 项目结构

```
examples/
├── src/
│   ├── components/
│   │   └── ComponentExamples.vue  # 组件示例展示
│   ├── App.vue                    # 主应用组件
│   ├── main.ts                    # 应用入口
│   └── style.css                  # 全局样式
├── index.html                     # HTML 模板
├── vite.config.ts                 # Vite 配置
├── package.json                   # 项目配置
└── README.md                      # 说明文档
```

## 包含的示例

### Alert 警告框组件

- **变体展示**: default, destructive
- **状态展示**: 提示, 成功, 警告, 错误
- **组件结构**: Alert, AlertTitle, AlertDescription
- **图标支持**: SVG 图标集成

### Button 按钮组件

- **变体展示**: default, destructive, outline, secondary, ghost, link
- **尺寸展示**: sm, default, lg, icon
- **状态展示**: 正常, 禁用
- **交互示例**: 点击事件, 计数功能
- **链接按钮**: 外部链接, 路由导航

### Card 卡片组件

- **基础用法**: 完整卡片结构展示
- **组件结构**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **样式变体**: 主要色调, 背景色, 阴影效果
- **交互示例**: 可点击卡片, 表单集成

### Input 输入框组件

- **基础用法**: 文本输入, 双向绑定
- **输入类型**: email, password, number, file
- **状态展示**: 正常, 禁用, 错误, 必填
- **表单集成**: 与 Label 组件配合使用

### Label 标签组件

- **基础用法**: 表单标签标识
- **状态展示**: 正常, 禁用, 错误
- **必填标识**: required 属性支持
- **表单关联**: 与输入控件关联

### Textarea 文本域组件

- **基础用法**: 多行文本输入
- **尺寸控制**: 小尺寸, 大尺寸
- **状态展示**: 正常, 禁用, 错误, 必填
- **自动调整**: 高度自适应

## 开发说明

### 添加新组件示例

1. 在 `src/components/ComponentExamples.vue` 中添加新的示例部分
2. 包含组件展示、代码示例和说明文档
3. 确保示例具有交互性和实用性

### 样式定制

- 使用 Tailwind CSS 进行样式设计
- 支持 CSS 变量进行主题定制
- 响应式设计适配各种屏幕尺寸

### 代码示例

每个组件示例都包含：

- 实际运行的组件展示
- 可复制的代码片段
- 详细的使用说明

## 部署

示例应用可以部署到任何静态托管服务：

```bash
# 构建
pnpm build

# 部署到 GitHub Pages
# 或其他静态托管服务
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进示例应用！

## 许可证

MIT License
