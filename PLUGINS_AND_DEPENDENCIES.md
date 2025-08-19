# AuroraUI 组件库依赖包和插件详解

本文档详细介绍了 AuroraUI 组件库使用的各种插件、依赖包和工具，以及它们在项目中的作用。

## 📦 核心依赖包

### 1. **reka-ui** - 基础组件库

- **版本**: `^2.4.1`
- **作用**: 提供基础的原生组件和工具函数
- **使用场景**:
  - 提供 `Primitive` 组件用于构建可访问性组件
  - 提供 `Label` 等基础组件
  - 通过 `RekaResolver` 实现自动组件导入

### 2. **@vueuse/core** - Vue 组合式工具库

- **版本**: `^13.7.0`
- **作用**: 提供丰富的 Vue 3 组合式 API 工具函数
- **使用场景**:
  - `reactiveOmit`: 从响应式对象中排除指定属性
  - 其他 Vue 3 相关的工具函数

### 3. **class-variance-authority (cva)** - 类名变体管理

- **版本**: `^0.7.1`
- **作用**: 用于管理组件的样式变体，提供类型安全的类名组合
- **使用场景**: 定义按钮、输入框等组件的不同样式变体

### 4. **clsx** - 条件类名工具

- **版本**: `^2.1.1`
- **作用**: 用于条件性地组合 CSS 类名
- **使用场景**: 在组件中根据条件动态添加类名

### 5. **tailwind-merge** - Tailwind 类名合并

- **版本**: `^3.3.1`
- **作用**: 智能合并 Tailwind CSS 类名，避免冲突
- **使用场景**: 合并用户传入的类名和组件默认类名

### 6. **lucide-vue-next** - 图标库

- **版本**: `^0.540.0`
- **作用**: 提供现代化的图标组件
- **使用场景**: 在按钮、输入框等组件中使用图标

### 7. **tw-animate-css** - 动画库

- **版本**: `^1.3.6`
- **作用**: 提供 CSS 动画类
- **使用场景**: 为组件添加过渡动画效果

## 🛠️ 构建和开发工具

### 8. **@tailwindcss/vite** - Tailwind CSS Vite 插件

- **版本**: `^4.1.11`
- **作用**: Vite 构建工具中的 Tailwind CSS 集成

### 9. **tailwindcss** - CSS 框架

- **版本**: `^4.1.11`
- **作用**: 原子化 CSS 框架，提供预定义的样式类

### 10. **unplugin-vue-components** - 自动组件导入

- **版本**: `^28.8.0`
- **作用**: 自动导入 Vue 组件，无需手动 import

### 11. **vite-plugin-vue-devtools** - Vue 开发工具

- **版本**: `^8.0.0`
- **作用**: 在开发环境中提供 Vue 调试工具

## 🎨 样式和主题

### 12. **tailwindcss-animate** - 动画插件

- **作用**: 为 Tailwind CSS 提供额外的动画类
- **提供的动画**:
  - `accordion-down/up`: 手风琴展开/收起动画
  - `collapsible-down/up`: 折叠面板动画

## 📋 项目结构说明

```
src/
├── components/          # 组件目录
│   ├── button/         # 按钮组件
│   ├── input/          # 输入框组件
│   ├── label/          # 标签组件
│   └── card/           # 卡片组件
├── utils/
│   └── cn.ts          # 类名合并工具函数
├── style.css          # 全局样式
└── index.ts           # 组件库入口文件
```

## 🔧 配置文件

### Vite 配置 (`vite.config.ts`)

- 支持库构建和开发模式
- 配置组件自动导入
- 设置构建输出格式 (ES/UMD)
- 配置外部依赖

### Tailwind 配置 (`tailwind.config.js`)

- 自定义颜色系统
- 配置动画关键帧
- 设置内容扫描路径
- 配置暗色模式

## 🚀 使用示例

### 基础组件使用

```vue
<template>
  <AButton variant="primary" size="lg">
    <Icon name="heart" />
    点击我
  </AButton>
</template>

<script setup>
import { AButton } from 'aurora-ui-plus'
import { Heart } from 'lucide-vue-next'
</script>
```

## 📚 最佳实践

1. **使用 cva 管理组件变体**: 确保样式变体的类型安全
2. **使用 cn 函数合并类名**: 避免样式冲突
3. **利用 reactiveOmit 传递属性**: 保持组件的灵活性
4. **遵循设计系统**: 使用预定义的颜色和尺寸
5. **保持可访问性**: 使用 reka-ui 的基础组件

## 🔗 相关链接

- [Vue 3 官方文档](https://vuejs.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [VueUse 文档](https://vueuse.org/)
- [Class Variance Authority](https://cva.style/docs)
- [Lucide Icons](https://lucide.dev/)
- [Reka UI](https://reka-ui.com/)
