# AuroraUI

AuroraUI 是一个个人学习项目，使用 **Vue 3 + TypeScript + Tailwind CSS** 技术栈实现的现代化 UI 组件库。专注于学习组件库开发的最佳实践，包括组件设计、测试策略、构建优化和文档编写。

## 🚀 快速开始

### 学习目标

这个项目旨在学习以下技术栈和最佳实践：

- **Vue 3 Composition API** - 现代 Vue 开发
- **TypeScript** - 类型安全和开发体验
- **Tailwind CSS** - 原子化 CSS 框架
- **Vite** - 现代化构建工具
- **Vitest** - 单元测试框架
- **组件库设计** - 可复用组件开发

### 本地开发

````bash
# 克隆项目
git clone https://github.com/gaofei/AuroraUI.git
cd AuroraUI

### 使用

```vue
<template>
  <AButton variant="primary" size="lg"> 点击我 </AButton>
</template>

<script setup>
import { AButton } from 'aurora-ui-plus'
</script>
````

## 🛠️ 开发

### 安装依赖

```bash
pnpm install
```

### 构建组件库

```bash
pnpm build
```

### 运行测试

```bash
pnpm test:run
```

### 查看示例

```bash
pnpm dev:examples
```

### 代码检查

```bash
pnpm lint
```

## 📦 项目结构

```
AuroraUI/
├── src/
│   ├── components/          # 组件源码（学习组件设计）
│   │   ├── button/         # Button 组件实现
│   │   └── card/           # Card 组件实现
│   ├── utils/              # 工具函数（学习代码复用）
│   └── index.ts            # 主入口文件（学习模块导出）
├── examples/               # 示例应用（学习文档编写）
├── tests/                  # 测试文件（学习测试策略）
└── dist/                   # 构建输出（学习构建优化）
```

## 📚 文档

- [组件文档](./examples/) - 查看组件示例和用法
- [测试指南](./TESTING.md) - 测试相关文档
- [开发指南](./DEVELOPMENT.md) - 开发流程和最佳实践

## 🧪 测试

项目包含完整的测试套件（学习测试策略）：

- ✅ 单元测试 (Vitest)
- ✅ 组件测试 (Vue Test Utils)
- ✅ 测试覆盖率报告
- ✅ 自动化测试脚本

## 🎯 学习收获

通过这个项目，你可以学习到：

- **组件设计模式** - 如何设计可复用的 Vue 组件
- **TypeScript 实践** - 在 Vue 项目中正确使用 TypeScript
- **测试驱动开发** - 编写高质量的组件测试
- **构建工具配置** - 使用 Vite 构建组件库
- **文档编写** - 如何编写清晰的组件文档
- **工程化实践** - 代码规范、CI/CD 等最佳实践

## 📄 许可证

MIT License
