import type { App } from 'vue'

// 导入样式
import './style.css'

// 导入所有组件
import * as components from './components'

// 导出所有组件
export * from './components'

// 重新导出依赖，供单独安装的组件使用
// 这样用户只需要安装 aurora-ui-plus，不需要单独安装这些依赖
export { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'
export * from 'reka-ui'
export { clsx, type ClassValue } from 'clsx'
export { twMerge } from 'tailwind-merge'
export { cva, type VariantProps } from 'class-variance-authority'
export { reactiveOmit } from '@vueuse/core'

// 安装函数
export const install = function (app: App) {
    // 注册所有组件
    Object.entries(components).forEach(([name, component]) => {
        if (component) {
            app.component(name, component)
        }
    })
    return app
}

// 默认导出
export default {
    install,
}
