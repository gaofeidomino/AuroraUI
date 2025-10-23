# RadioGroup 组件测试

## 测试覆盖范围

本目录包含 RadioGroup 组件及其子组件的完整测试套件。

### 测试文件

- **RadioGroup.test.ts** - RadioGroup 主组件测试
- **RadioGroupItem.test.ts** - RadioGroupItem 组件测试

### 测试内容

#### RadioGroup 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### RadioGroupItem 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 输入框类型验证
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 RadioGroup 组件测试
pnpm test tests/components/radio-group

# 运行特定测试文件
pnpm test tests/components/radio-group/RadioGroup.test.ts
```

## 功能特性

RadioGroup 组件提供以下功能：

- 🔘 单选框组
- 📋 单选逻辑
- 🎨 自定义样式
- ♿ 无障碍支持
- 📱 响应式设计

## 使用示例

```vue
<template>
  <RadioGroup v-model="selected" orientation="vertical">
    <RadioGroupItem value="option1" />
    <RadioGroupItem value="option2" />
    <RadioGroupItem value="option3" />
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('option1')
</script>
```
