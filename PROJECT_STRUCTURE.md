# AuroraUI 项目结构

## 📁 目录结构

```
AuroraUI/
├── src/                          # 组件库源码
│   ├── components/               # 组件目录
│   │   ├── button/              # Button 组件
│   │   │   ├── Button.vue       # 组件实现
│   │   │   └── index.ts         # 组件导出
│   │   ├── card/                # Card 组件（待实现）
│   │   │   └── index.ts
│   │   └── index.ts             # 组件统一导出
│   ├── utils/                   # 工具函数
│   │   └── cn.ts               # 类名合并工具
│   └── index.ts                 # 主入口文件
├── examples/                     # 示例应用
│   ├── src/
│   │   ├── components/
│   │   │   └── ComponentExamples.vue
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── style.css
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   └── README.md
├── tests/                        # 测试文件
│   ├── components/
│   │   ├── Button.test.ts
│   │   └── Card.test.ts
│   ├── examples/
│   │   └── ComponentTestExamples.test.ts
│   ├── utils/
│   │   └── test-utils.ts
│   ├── vitest.setup.ts
│   └── README.md
├── scripts/                      # 脚本文件
│   └── test.sh
├── dist/                         # 构建输出
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.build.json
├── tsconfig.test.json
├── tailwind.config.js
├── README.md
├── TESTING.md
├── PROJECT_STRUCTURE.md
└──DEVELOPMENT.md
```

## 🎯 设计理念

### 1. 专注组件库开发

- 移除了根目录的演示应用
- 专注于组件库的构建和发布
- 通过独立的 `examples` 应用展示组件

### 2. 清晰的职责分离

- **src/**: 组件库源码
- **examples/**: 组件展示和文档
- **tests/**: 完整的测试套件
- **dist/**: 构建输出

### 3. 现代化的开发体验

- TypeScript 支持
- 完整的测试环境
- 自动化构建流程
- 代码质量检查

## 🚀 开发流程

### 添加新组件

1. 在 `src/components/` 下创建组件目录
2. 实现组件逻辑和样式
3. 在 `src/components/index.ts` 中导出
4. 在 `examples/` 中添加展示
5. 在 `tests/` 中添加测试

### 构建和发布

```bash
# 构建组件库
pnpm build

# 运行测试
pnpm test:run

# 查看示例
pnpm dev:examples
```

## 📦 构建输出

构建后的 `dist/` 目录包含：

- `aurora-ui-plus.es.js` - ES 模块版本
- `aurora-ui-plus.umd.js` - UMD 版本
- `style.css` - 样式文件
- `index.d.ts` - TypeScript 类型声明

## 🧪 测试策略

- **单元测试**: 测试工具函数
- **组件测试**: 测试组件渲染和交互
- **集成测试**: 测试组件组合使用
- **覆盖率报告**: 确保代码质量

## 📚 文档体系

- **README.md**: 项目介绍和快速开始
- **examples/**: 组件展示和用法示例
- **TESTING.md**: 测试相关文档
- **PROJECT_STRUCTURE.md**: 项目结构说明

## 🔧 工具链

- **Vite**: 构建工具
- **Vue 3**: 框架
- **TypeScript**: 类型系统
- **Tailwind CSS**: 样式系统
- **Vitest**: 测试框架
- **ESLint + Prettier**: 代码质量

这种结构确保了项目的可维护性、可扩展性和专业性。
