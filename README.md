# AuroraUI

A modern Vue 3 UI component library built with **TypeScript** and **Tailwind CSS**. This personal learning project focuses on exploring best practices in component library development, including component design patterns, testing strategies, build optimization, and documentation.

> ⚠️ **Important Notice**: If you're planning to use this in production projects, please consider using the more mature and stable [shadcn/vue](https://www.shadcn-vue.com/) instead, as this project is inspired by and mimics the shadcn/vue implementation.

[![npm version](https://img.shields.io/npm/v/aurora-ui-plus.svg)](https://www.npmjs.com/package/aurora-ui-plus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Modern Design** - Clean and minimalist component styling
- 🔧 **TypeScript** - Full type safety and excellent developer experience
- 🎯 **Vue 3** - Built with Composition API and latest Vue features
- 🌊 **Tailwind CSS** - Utility-first CSS framework integration
- ⚡ **Vite** - Lightning fast build and development experience
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest
- 📦 **Tree Shakable** - Import only what you need
- 🎪 **Customizable** - Easy theming and component customization

## 🚀 Quick Start

### Installation

```bash
npm install aurora-ui-plus
# or
pnpm add aurora-ui-plus
# or
yarn add aurora-ui-plus
```

### Basic Usage

```vue
<template>
  <div>
    <AButton variant="primary" size="lg"> Click me </AButton>
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

### Styling

Import the component styles:

```ts
import 'aurora-ui-plus/style'
```

## 🛠️ Development

### Prerequisites

- Node.js 20.19.0+ or 22.12.0+
- pnpm (recommended package manager)

### Setup

```bash
# Clone the repository
git clone https://github.com/gaofei/AuroraUI.git
cd AuroraUI

# Install dependencies
pnpm install
```

### Development Scripts

```bash
# Start development server
pnpm dev

# Build the library
pnpm build:lib

# Build library with types
pnpm build

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests once
pnpm test:run

# Lint code
pnpm lint

# Format code
pnpm format

# Run examples
pnpm dev:examples
```

## 📦 Available Components

- **Layout**: Card, AspectRatio
- **Forms**: Button, Input, Label, Textarea
- **Navigation**: Breadcrumb
- **Feedback**: Alert, AlertDialog, Badge
- **Data Display**: Avatar, Calendar, Accordion
- **Utility**: Various utility components

## 📚 Documentation

- [Component Examples](./examples/) - Interactive examples and usage
- [Testing Guide](./TESTING.md) - Testing strategies and best practices
- [Development Guide](./DEVELOPMENT.md) - Development workflow and guidelines
- [Project Structure](./PROJECT_STRUCTURE.md) - Understanding the codebase

## 🧪 Testing

This project maintains high code quality with comprehensive testing:

- ✅ **Unit Tests** - Individual component testing with Vitest
- ✅ **Component Tests** - Vue component testing with Vue Test Utils
- ✅ **Integration Tests** - Testing component interactions
- ✅ **Coverage Reports** - Detailed test coverage metrics
- ✅ **Automated Testing** - CI/CD integration for quality assurance

Run tests:

```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm test:coverage

# Run comprehensive test suite
pnpm test:full
```

## 🎯 Learning Objectives

This project demonstrates modern frontend development practices:

- **Component Architecture** - Scalable and reusable Vue component design
- **TypeScript Integration** - Type-safe development in Vue ecosystem
- **Testing Strategies** - Comprehensive testing approaches for UI components
- **Build Optimization** - Modern build tools and optimization techniques
- **Documentation** - Clear documentation and examples for developers
- **Engineering Practices** - Code quality, linting, and CI/CD workflows

## 🤝 Contributing

Contributions are welcome! This is a learning project, so feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 🙏 Acknowledgments

This project is built with and inspired by:

- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Vitest](https://vitest.dev/) - Blazing fast unit test framework
- [Reka UI](https://reka-ui.com/) - Unstyled, accessible components
- [shadcn/vue](https://www.shadcn-vue.com/) - The original inspiration for this project
