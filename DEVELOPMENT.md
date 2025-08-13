# AuroraUI 开发指南

## 🚀 开发环境

### 启动开发服务器

```bash
# 启动开发模式（快速测试组件）
pnpm dev

# 启动示例应用（完整展示）
pnpm dev:examples
```

## 🛠️ 开发新组件

### 1. 创建组件

在 `src/components/` 下创建新组件目录和文件

### 2. 在开发模式中测试

在 `src/DevApp.vue` 的"新组件开发区域"添加测试代码

### 3. 编写测试

在 `tests/components/` 下添加测试文件

### 4. 完善示例

在 `examples/src/components/ComponentExamples.vue` 中添加完整示例

## 🧪 测试

```bash
# 运行测试
pnpm test:run

# 监听模式
pnpm test

# 覆盖率报告
pnpm test:coverage
```

## 📦 构建

```bash
# 构建组件库
pnpm build:lib

# 构建示例应用
pnpm build:examples
```

## 📝 代码规范

```bash
# 代码检查
pnpm lint

# 格式化
pnpm format
```

## 🎯 开发流程

1. 创建组件 → 2. 开发测试 → 3. 编写测试 → 4. 完善示例 → 5. 代码检查 → 6. 构建发布
