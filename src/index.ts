import type { App } from 'vue'

import * as components from './components/index'
export * from './components/index'

export const install = function (app: App) {
    // 直接注册所有组件
    Object.keys(components).forEach((key) => {
        const component = components[key as keyof typeof components]
        if (component) {
            // 使用组件名称作为全局注册名
            const componentName = `A${key.charAt(0).toUpperCase() + key.slice(1)}`
            app.component(componentName, component)
        }
    })
    return app
}

export default {
    install,
}
