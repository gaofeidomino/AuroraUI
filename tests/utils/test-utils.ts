import { render, type RenderOptions } from '@testing-library/vue'
import { createApp } from 'vue'
import type { ComponentMountingOptions } from '@vue/test-utils'

// 全局组件注册（如果需要的话）
const globalComponents = {
    // 在这里注册全局组件
}

// 自定义渲染函数
export function customRender<T = any>(component: T, options: RenderOptions & ComponentMountingOptions<T> = {}) {
    const app = createApp(component)

    // 注册全局组件
    Object.entries(globalComponents).forEach(([name, component]) => {
        app.component(name, component)
    })

    return render(component, {
        global: {
            components: globalComponents,
            ...options.global,
        },
        ...options,
    })
}

// 重新导出所有测试工具
export * from '@testing-library/vue'
export { customRender as render }
