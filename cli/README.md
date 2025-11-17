# AuroraUI CLI

命令行工具，用于将 AuroraUI 组件添加到你的项目中。类似于 shadcn-vue，组件代码会直接复制到你的项目中，你可以自由修改和定制。

## 安装

使用 `pnpm dlx` 或 `npx` 直接运行（推荐）：

```bash
pnpm dlx aurora-ui-plus@latest add button
# 或
npx aurora-ui-plus@latest add button
```

## 使用方法

### 初始化项目

```bash
pnpm dlx aurora-ui-plus@latest init
```

这会创建 `components.json` 配置文件并复制必要的工具文件。

### 添加组件

```bash
# 添加单个组件
pnpm dlx aurora-ui-plus@latest add button
pnpm dlx aurora-ui-plus@latest add card
pnpm dlx aurora-ui-plus@latest add input

# 指定目标目录
pnpm dlx aurora-ui-plus@latest add button --dir src/components/ui

# 跳过确认提示
pnpm dlx aurora-ui-plus@latest add button --yes
```

## 可用组件

- `button` - 按钮组件
- `card` - 卡片组件
- `input` - 输入框组件
- `textarea` - 文本域组件
- `label` - 标签组件
- `badge` - 徽章组件
- `alert` - 警告框组件
- `avatar` - 头像组件
- `separator` - 分隔符组件
- `field` - 表单字段组件

## 工作原理

CLI 工具会：

1. 从 AuroraUI 源码中复制组件文件到你的项目
2. 自动转换路径别名（如 `@/utils/cn`）
3. 安装组件所需的依赖
4. 创建必要的工具文件（如 `cn.ts`）

组件代码会直接添加到你的项目中，你可以自由修改和定制。
