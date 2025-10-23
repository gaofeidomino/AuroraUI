# NumberField 组件测试

## 测试覆盖范围

本目录包含 NumberField 组件及其子组件的完整测试套件。

### 测试文件

- **NumberField.test.ts** - NumberField 主组件测试
- **NumberFieldContent.test.ts** - NumberFieldContent 组件测试
- **NumberFieldInput.test.ts** - NumberFieldInput 组件测试

### 测试内容

#### NumberField 主组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### NumberFieldContent 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 插槽内容渲染测试
- ✅ 组件名称验证

#### NumberFieldInput 组件

- ✅ 默认渲染测试
- ✅ Props 传递测试
- ✅ 输入框类型验证
- ✅ 组件名称验证

## 运行测试

```bash
# 运行 NumberField 组件测试
pnpm test tests/components/number-field

# 运行特定测试文件
pnpm test tests/components/number-field/NumberField.test.ts
```

## 功能特性

NumberField 组件提供以下功能：

- 🔢 数字输入控制
- ⚙️ 最小/最大值限制
- 📊 步长控制
- 🎛️ 增减按钮
- 📱 响应式设计
- ♿ 无障碍支持

## 使用示例

```vue
<template>
  <NumberField v-model="value" :min="0" :max="100" :step="1">
    <NumberFieldContent>
      <NumberFieldInput />
      <NumberFieldIncrement />
      <NumberFieldDecrement />
    </NumberFieldContent>
  </NumberField>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(50)
</script>
```
