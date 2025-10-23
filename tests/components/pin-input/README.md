# PinInput 组件测试

## 测试覆盖范围

本目录包含 PinInput 组件及其子组件的完整测试套件。

### 测试文件

- **PinInput.test.ts** - PinInput 主组件测试
- **PinInputSlot.test.ts** - PinInputSlot 组件测试

### 测试内容

#### PinInput 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### PinInputSlot 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 输入框类型验证
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 PinInput 组件测试
pnpm test tests/components/pin-input

# 运行特定测试文件
pnpm test tests/components/pin-input/PinInput.test.ts
```

## 功能特性

PinInput 组件提供以下功能：

- 🔢 密码输入框
- 📱 多位数输入
- 🔒 输入掩码
- ⌨️ 键盘导航
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <PinInput v-model="pin" :length="6" type="numeric">
    <PinInputSlot v-for="(_, index) in Array(6)" :key="index" :index="index" />
  </PinInput>
</template>

<script setup>
import { ref } from 'vue'

const pin = ref('')
</script>
```
