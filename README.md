# AuroraUI

一个现代化的Vue 3 UI组件库，基于Tailwind CSS构建。

## 安装

```bash
npm install aurora-ui
# 或
yarn add aurora-ui
# 或
pnpm add aurora-ui
```

## 使用方法

### 全局安装

```js
import { createApp } from 'vue'
import AuroraUI from 'aurora-ui'
import 'aurora-ui/dist/style.css' // 如果提供了样式文件

const app = createApp(App)
app.use(AuroraUI)
app.mount('#app')
```

### 按需安装

```js
import { createApp } from 'vue'
import { Button } from 'aurora-ui'

const app = createApp(App)
app.component('AButton', Button)
app.mount('#app')
```

### 在组件中使用

```vue
<template>
  <div>
    <AButton>默认按钮</AButton>
    <AButton variant="destructive">危险按钮</AButton>
    <AButton variant="outline" size="lg">大号轮廓按钮</AButton>
  </div>
</template>
```

## 组件

### Button 按钮

支持多种变体和尺寸的按钮组件。

#### Props

- `variant`: 按钮变体
  - `default`: 默认样式
  - `destructive`: 危险样式
  - `outline`: 轮廓样式
  - `secondary`: 次要样式
  - `ghost`: 幽灵样式
  - `link`: 链接样式

- `size`: 按钮尺寸
  - `default`: 默认尺寸
  - `sm`: 小尺寸
  - `lg`: 大尺寸
  - `icon`: 图标尺寸

#### 示例

```vue
<template>
  <AButton>默认按钮</AButton>
  <AButton variant="destructive">危险按钮</AButton>
  <AButton variant="outline" size="lg">大号轮廓按钮</AButton>
  <AButton size="icon">
    <Icon />
  </AButton>
</template>
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建库
pnpm build:lib

# 类型检查
pnpm type-check

# 代码格式化
pnpm format
```

## 构建

构建UI库：

```bash
pnpm build:lib
```

这将在 `dist` 目录下生成以下文件：

- `index.es.js` - ES模块格式
- `index.umd.js` - UMD格式
- `index.d.ts` - TypeScript类型定义

## 发布

```bash
npm publish
```

## 许可证

MIT
