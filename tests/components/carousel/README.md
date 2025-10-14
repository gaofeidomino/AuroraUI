# Carousel 组件测试文档

## 📊 测试覆盖

### 测试套件概览

| 测试文件                      | 测试数量 | 状态   | 描述                          |
| ----------------------------- | -------- | ------ | ----------------------------- |
| `Carousel.test.ts`            | 17       | ✅     | 主 Carousel 组件测试          |
| `CarouselContent.test.ts`     | 11       | ✅     | CarouselContent 组件测试      |
| `CarouselItem.test.ts`        | 12       | ✅     | CarouselItem 组件测试         |
| `CarouselNext.test.ts`        | 15       | ✅     | CarouselNext 按钮组件测试     |
| `CarouselPrevious.test.ts`    | 15       | ✅     | CarouselPrevious 按钮组件测试 |
| `CarouselIntegration.test.ts` | 14       | ✅     | 集成测试                      |
| `useCarousel.test.ts`         | 14       | ✅     | Hooks/Composable 测试         |
| **总计**                      | **98**   | **✅** | **所有测试通过**              |

---

## 🧪 测试内容

### 1. Carousel.test.ts (主组件)

**测试覆盖：**

- ✅ 默认渲染
- ✅ 自定义样式类
- ✅ 水平/垂直方向
- ✅ ARIA 无障碍属性
- ✅ 键盘导航（方向键）
- ✅ 作用域插槽 props
- ✅ 配置选项传递
- ✅ 事件处理器设置
- ✅ defineExpose 暴露的方法

**关键测试场景：**

```typescript
// 键盘导航测试
it('handles keyboard navigation with ArrowLeft (horizontal)')
it('handles keyboard navigation with ArrowRight (horizontal)')
it('handles keyboard navigation with ArrowUp (vertical)')
it('handles keyboard navigation with ArrowDown (vertical)')

// 无障碍性测试
it('has proper ARIA attributes')
it('is keyboard accessible (focusable)')
```

---

### 2. CarouselContent.test.ts

**测试覆盖：**

- ✅ 在 Carousel 内部渲染
- ✅ 自定义样式类
- ✅ `overflow-hidden` 容器
- ✅ 水平/垂直布局类
- ✅ `inheritAttrs: false` 行为
- ✅ 多个子元素渲染
- ✅ 错误边界（在 Carousel 外使用时抛出错误）

**关键测试场景：**

```typescript
// 布局测试
it('applies horizontal layout classes by default')
it('applies vertical layout classes when orientation is vertical')

// 错误保护
it('throws error when used outside Carousel')
```

---

### 3. CarouselItem.test.ts

**测试覆盖：**

- ✅ 在 CarouselContent 内部渲染
- ✅ 自定义样式类
- ✅ ARIA 属性（role="group", aria-roledescription="slide"）
- ✅ 水平/垂直方向的内边距
- ✅ Flexbox 类（basis-full, shrink-0, grow-0）
- ✅ 多个项目渲染
- ✅ 复杂内容渲染
- ✅ 错误边界

**关键测试场景：**

```typescript
// ARIA 测试
it('has proper ARIA attributes')

// 布局测试
it('has basis-full class for full width')
it('applies horizontal padding by default')
it('applies vertical padding when orientation is vertical')
```

---

### 4. CarouselNext.test.ts & CarouselPrevious.test.ts

**测试覆盖（每个组件）：**

- ✅ 默认渲染
- ✅ 自定义 variant 和 size
- ✅ 自定义样式类
- ✅ 默认图标渲染
- ✅ 自定义插槽内容
- ✅ 水平/垂直方向的定位
- ✅ 禁用状态（不能滚动时）
- ✅ 点击事件处理
- ✅ 圆角样式
- ✅ 错误边界

**关键测试场景：**

```typescript
// 定位测试
it('has proper positioning for horizontal carousel')
it('has proper positioning for vertical carousel')

// 状态测试
it('is disabled when cannot scroll next/previous')

// 交互测试
it('calls scrollNext/scrollPrev when clicked')
```

---

### 5. CarouselIntegration.test.ts

**测试覆盖：**

- ✅ 完整轮播结构渲染
- ✅ 语义化 HTML 结构
- ✅ 水平/垂直轮播工作
- ✅ 导航按钮状态更新
- ✅ 键盘导航（水平/垂直模式）
- ✅ 所有组件的自定义样式
- ✅ 作用域插槽状态
- ✅ 循环选项
- ✅ 单项轮播处理
- ✅ init-api 事件
- ✅ 复杂内容处理
- ✅ 自定义导航按钮内容

**关键测试场景：**

```typescript
// 集成测试
it('renders complete carousel structure')
it('maintains proper semantic structure')

// 交互测试
it('navigation buttons update state correctly')
it('keyboard navigation works in horizontal mode')

// 高级功能
it('works with loop option')
it('provides scoped slot with all carousel state')
```

---

### 6. useCarousel.test.ts (Hooks/Composable)

**测试覆盖：**

- ✅ useProvideCarousel 提供状态
- ✅ 正确的方向配置
- ✅ 滚动方法提供
- ✅ canScroll 状态初始化
- ✅ init-api 事件处理器设置
- ✅ 配置选项传递
- ✅ 插件处理
- ✅ 轴向设置
- ✅ useCarousel 注入状态
- ✅ 错误边界（在 Provider 外使用）
- ✅ 完整状态访问
- ✅ 滚动方法调用
- ✅ 事件监听器清理

**关键测试场景：**

```typescript
// Provider 测试
it('provides carousel state with default props')
it('provides scroll methods')

// Consumer 测试
it('throws error when used outside provider')
it('returns carousel state when used within provider')

// 清理测试
it('cleans up event listeners on unmount')
```

---

## 🔧 测试环境配置

### JSDOM 环境设置

由于 `embla-carousel` 需要浏览器 API，我们在 `tests/vitest.setup.ts` 中添加了以下 polyfills：

```typescript
// Mock window.matchMedia
window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    // ... 其他属性
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(...)

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(...)
```

---

## 📝 运行测试

```bash
# 运行所有 carousel 测试
pnpm test tests/components/carousel

# 运行单个测试文件
pnpm test tests/components/carousel/Carousel.test.ts

# 运行测试并生成覆盖率报告
pnpm test:coverage -- tests/components/carousel
```

---

## ✅ 测试结果

```
Test Files  7 passed (7)
Tests      98 passed (98)
Duration   ~10.27s
```

**所有测试均已通过！** ✨

---

## 🔍 代码改进

在测试过程中，我们对组件代码进行了以下改进：

### 1. 添加资源清理

**文件：** `src/components/carousel/useCarousel.ts`

```typescript
// 添加了 onUnmounted 生命周期钩子
onUnmounted(() => {
  if (!emblaApi.value) return

  emblaApi.value.off('init', onSelect)
  emblaApi.value.off('reInit', onSelect)
  emblaApi.value.off('select', onSelect)
})
```

**改进原因：** 防止内存泄漏，确保组件卸载时清理事件监听器。

### 2. 修复文本一致性

**文件：** `src/components/carousel/CarouselPrevious.vue`

```vue
<!-- 修改前 -->
<span class="sr-only">上一张</span>

<!-- 修改后 -->
<span class="sr-only">Previous Slide</span>
```

**改进原因：** 保持与 CarouselNext 组件的文本风格一致。

---

## 📚 测试最佳实践

本测试套件遵循以下最佳实践：

1. **✅ 完整的测试覆盖** - 覆盖所有组件和功能
2. **✅ 隔离测试** - 每个测试独立运行
3. **✅ 错误边界测试** - 测试错误情况和边界条件
4. **✅ 无障碍性测试** - 验证 ARIA 属性和键盘导航
5. **✅ 集成测试** - 测试组件间的交互
6. **✅ 清晰的描述** - 每个测试都有明确的目的
7. **✅ 环境适配** - 针对 JSDOM 环境优化测试

---

## 🚀 下一步

- [ ] 添加端到端测试（使用 Playwright/Cypress）
- [ ] 添加性能测试
- [ ] 添加视觉回归测试
- [ ] 提高测试覆盖率到 100%

---

## 📖 参考文档

- [Vitest 文档](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Testing Library](https://testing-library.com/)
- [Embla Carousel](https://www.embla-carousel.com/)
