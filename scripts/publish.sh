#!/bin/bash

# AuroraUI Smart Publish Script
# Usage: ./scripts/publish.sh [version_type]
# Version types: patch, minor, major, beta, alpha, rc

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 获取版本类型参数
VERSION_TYPE=${1:-patch}

echo -e "${BLUE}🚀 AuroraUI Smart Publish${NC}"
echo -e "${BLUE}========================${NC}"
echo -e "${YELLOW}📋 Version type: ${VERSION_TYPE}${NC}"

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run from project root.${NC}"
    exit 1
fi

# 检查 npm 登录状态
echo -e "${YELLOW}🔐 Checking npm login status...${NC}"
if ! pnpm whoami > /dev/null 2>&1; then
    echo -e "${RED}❌ Please login to npm first: pnpm login${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Logged in to npm${NC}"

# 运行版本管理脚本
echo -e "${YELLOW}🔄 Running version management...${NC}"
node scripts/version.js $VERSION_TYPE

echo -e "${GREEN}🎉 Publish completed successfully!${NC}"
