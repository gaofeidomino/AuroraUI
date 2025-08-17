import type { App } from 'vue'

// 导入样式
import './style.css'

// 导入所有组件
import * as components from './components'

// 导出所有组件
export * from './components'

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
