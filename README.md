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
- 🛠️ **CLI Tool** - Install components individually, just like shadcn-vue

## 🚀 Quick Start

AuroraUI provides two ways to use components:

1. **Install components individually (Recommended)** - Use the CLI tool to install only the components you need. Component code is copied directly into your project.
2. **Install the entire package** - Install the complete component library package.

For detailed installation and usage instructions, see the [Installation Guide](./INSTALLATION.md).

### Quick Examples

**Install components individually:**

```bash
# Initialize
pnpm dlx aurora-ui-plus@latest init

# Add components
pnpm dlx aurora-ui-plus@latest add button
```

**Install the entire package:**

```bash
pnpm add aurora-ui-plus
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

# Publish to npm (with automatic version management)
pnpm publish              # Patch version (1.0.0 -> 1.0.1)
pnpm publish:minor        # Minor version (1.0.0 -> 1.1.0)
pnpm publish:major        # Major version (1.0.0 -> 2.0.0)
pnpm publish:beta         # Beta version (1.0.0 -> 1.0.1-beta.0)
pnpm publish:alpha        # Alpha version (1.0.0 -> 1.0.1-alpha.0)
pnpm publish:rc           # Release candidate (1.0.0 -> 1.0.1-rc.0)


```

## 📦 Available Components

All components can be installed individually via the CLI tool or imported from the entire package.

Main components include:

- **Layout**: Card, AspectRatio
- **Forms**: Button, Input, Label, Textarea, Field
- **Navigation**: Breadcrumb
- **Feedback**: Alert, AlertDialog, Badge
- **Data Display**: Avatar, Calendar, Accordion
- **Utility**: Various utility components

> 💡 **Tip**: Check the [Installation Guide](./INSTALLATION.md) to learn how to install components individually, or use `pnpm dlx aurora-ui-plus@latest add <component-name>` to see all components available via CLI.

## 📚 Documentation

- [Installation Guide](./INSTALLATION.md) - Detailed installation and usage instructions
- [Component Examples](./examples/) - Interactive examples and usage
- [CLI Tool Guide](./cli/README.md) - How to use the CLI tool for component installation
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

## 📋 Version Management

AuroraUI uses smart version management for publishing. Each publish command automatically updates the version number and publishes to npm with the appropriate tag.

### Version Types

| Command              | Version Change        | NPM Tag | Use Case           |
| -------------------- | --------------------- | ------- | ------------------ |
| `pnpm publish`       | 1.0.0 → 1.0.1         | latest  | Bug fixes          |
| `pnpm publish:minor` | 1.0.0 → 1.1.0         | latest  | New features       |
| `pnpm publish:major` | 1.0.0 → 2.0.0         | latest  | Breaking changes   |
| `pnpm publish:beta`  | 1.0.0 → 1.0.1-beta.0  | beta    | Testing releases   |
| `pnpm publish:alpha` | 1.0.0 → 1.0.1-alpha.0 | alpha   | Internal testing   |
| `pnpm publish:rc`    | 1.0.0 → 1.0.1-rc.0    | rc      | Release candidates |

### Automated Workflow

Each publish command automatically:

1. **Updates version** - Modifies package.json version
2. **Runs tests** - Ensures code quality
3. **Builds project** - Generates dist directory
4. **Publishes to npm** - Uses correct tag for release type

## 🙏 Acknowledgments

This project is built with and inspired by:

- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Vitest](https://vitest.dev/) - Blazing fast unit test framework
- [Reka UI](https://reka-ui.com/) - Unstyled, accessible components
- [shadcn/vue](https://www.shadcn-vue.com/) - The original inspiration for this project
