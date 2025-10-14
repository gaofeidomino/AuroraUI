#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 获取命令行参数
const args = process.argv.slice(2);
const versionType = args[0] || 'patch';

// 版本类型映射
const versionMap = {
    'patch': 'patch',
    'minor': 'minor',
    'major': 'major',
    'beta': 'prerelease --preid=beta',
    'alpha': 'prerelease --preid=alpha',
    'rc': 'prerelease --preid=rc'
};

// 获取当前版本
function getCurrentVersion() {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
}

// 更新版本号
function updateVersion(type) {
    try {
        console.log(`🔄 Updating version (${type})...`);
        execSync(`pnpm version ${type} --no-git-tag-version`, { stdio: 'inherit' });

        const newVersion = getCurrentVersion();
        console.log(`✅ Version updated to: ${newVersion}`);
        return newVersion;
    } catch (error) {
        console.error('❌ Failed to update version:', error.message);
        process.exit(1);
    }
}

// 构建项目
function buildProject() {
    try {
        console.log('🔨 Building project...');
        execSync('pnpm build:lib', { stdio: 'inherit' });
        console.log('✅ Build completed');
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

// 运行测试
function runTests() {
    try {
        console.log('🧪 Running tests...');
        execSync('pnpm test:run', { stdio: 'inherit' });
        console.log('✅ Tests passed');
    } catch (error) {
        console.error('❌ Tests failed:', error.message);
        process.exit(1);
    }
}

// 发布到 npm
function publishToNpm(versionType) {
    try {
        console.log('📤 Publishing to npm...');

        // 根据版本类型选择标签
        let tag = 'latest';
        if (versionType.includes('beta')) tag = 'beta';
        else if (versionType.includes('alpha')) tag = 'alpha';
        else if (versionType.includes('rc')) tag = 'rc';

        execSync(`pnpm publish --tag ${tag}`, { stdio: 'inherit' });
        console.log(`✅ Successfully published with tag: ${tag}`);
    } catch (error) {
        console.error('❌ Publish failed:', error.message);
        process.exit(1);
    }
}

// 主函数
function main() {
    console.log('🚀 AuroraUI Smart Publish');
    console.log('========================');

    const currentVersion = getCurrentVersion();
    console.log(`📋 Current version: ${currentVersion}`);

    // 检查版本类型
    if (!versionMap[versionType]) {
        console.error(`❌ Invalid version type: ${versionType}`);
        console.log('Available types: patch, minor, major, beta, alpha, rc');
        process.exit(1);
    }

    // 执行流程
    const versionCommand = versionMap[versionType];
    const newVersion = updateVersion(versionCommand);

    runTests();
    buildProject();
    publishToNpm(versionType);

    console.log('🎉 Publish completed successfully!');
    console.log(`📦 New version: ${newVersion}`);
}

main();
