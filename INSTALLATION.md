# AuroraUI 安装指南

AuroraUI 提供两种使用方式，你可以根据项目需求选择最适合的方式。

## 方式一：单独安装组件（推荐）

类似于 [shadcn-vue](https://www.shadcn-vue.com/)，你可以通过 CLI 工具单独安装需要的组件。组件代码会直接复制到你的项目中，你可以自由修改和定制。

### 初始化项目

```bash
pnpm dlx aurora-ui-plus@latest init
# 或
npx aurora-ui-plus@latest init
```

这会创建 `components.json` 配置文件并复制必要的工具文件（如 `src/utils/cn.ts`）。同时会自动安装基础依赖（`clsx` 和 `tailwind-merge`）。

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

### 使用已安装的组件

```vue
<template>
  <div>
    <AButton variant="default">Click me</AButton>
    <ACard>
      <ACardHeader>
        <ACardTitle>Card Title</ACardTitle>
      </ACardHeader>
      <ACardContent>
        <p>Card content goes here.</p>
      </ACardContent>
    </ACard>
  </div>
</template>

<script setup lang="ts">
// 从本地项目导入组件
import { AButton } from '@/components/ui/button'
import { ACard, ACardHeader, ACardTitle, ACardContent } from '@/components/ui/card'
</script>
```

**优势：**

- ✅ 只安装需要的组件，减少项目体积
- ✅ 组件代码在你的项目中，可以自由修改
- ✅ 自动处理路径转换和依赖安装
- ✅ 自动安装组件所需的依赖（如 `reka-ui`、`class-variance-authority` 等）
- ✅ 更好的 Tree-shaking 支持

> 📦 **依赖管理**：使用 CLI 安装组件时，所需的依赖会自动安装到你的项目中。你无需手动安装 `aurora-ui-plus` 包，也无需担心依赖版本冲突。CLI 会自动检测已安装的依赖，只安装缺失的依赖。

### 可用组件

以下组件支持通过 CLI 单独安装：

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

> 💡 **提示**：使用 `pnpm dlx aurora-ui-plus@latest add <component-name>` 可以查看所有可通过 CLI 安装的组件列表。

## 方式二：安装整个包

如果你需要所有组件，可以安装整个包：

```bash
npm install aurora-ui-plus
# or
pnpm add aurora-ui-plus
# or
yarn add aurora-ui-plus
```

### 使用方式

```vue
<template>
  <div>
    <AButton variant="default" size="lg">Click me</AButton>
    <ACard>
      <ACardHeader>
        <ACardTitle>Card Title</ACardTitle>
      </ACardHeader>
      <ACardContent>
        <p>Card content goes here.</p>
      </ACardContent>
    </ACard>
  </div>
</template>

<script setup lang="ts">
import { AButton, ACard, ACardHeader, ACardTitle, ACardContent } from 'aurora-ui-plus'
</script>
```

### 导入样式

安装整个包时，需要单独导入样式：

```ts
import 'aurora-ui-plus/style'
```

## 样式说明

- **方式一（单独安装组件）**：样式已经包含在组件文件中，无需额外导入。
- **方式二（安装整个包）**：需要导入样式文件 `import 'aurora-ui-plus/style'`

## 配置路径别名（可选）

如果你使用路径别名（如 `@/`），需要在项目中配置：

### TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Vite (vite.config.ts)

```ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 更多信息

- 详细的 CLI 工具使用指南，请查看 [CLI Tool Guide](./cli/README.md)
- 查看所有可用组件，请参考 [Available Components](./README.md#-available-components)
