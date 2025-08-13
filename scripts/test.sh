#!/bin/bash

# 测试脚本
echo "🧪 开始运行组件测试..."

# 运行类型检查
echo "📝 运行类型检查..."
pnpm type-check

if [ $? -ne 0 ]; then
    echo "❌ 类型检查失败"
    exit 1
fi

# 运行lint检查
echo "🔍 运行代码检查..."
pnpm lint

if [ $? -ne 0 ]; then
    echo "❌ 代码检查失败"
    exit 1
fi

# 运行测试
echo "⚡ 运行单元测试..."
pnpm test:run

if [ $? -ne 0 ]; then
    echo "❌ 单元测试失败"
    exit 1
fi

# 运行覆盖率测试
echo "📊 生成测试覆盖率报告..."
pnpm test:coverage

if [ $? -ne 0 ]; then
    echo "❌ 覆盖率测试失败"
    exit 1
fi

echo "✅ 所有测试通过！"
echo "📈 测试覆盖率报告已生成，请查看 coverage/ 目录"
