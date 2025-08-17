// 导入样式 - 确保在最前面导入
import './style.css'

import { createApp } from 'vue'
import DevApp from './DevApp.vue'

// 导入组件库
import AuroraUI from './index'

// 创建开发应用实例
const app = createApp(DevApp)

// 注册组件库
app.use(AuroraUI)

// 挂载应用
app.mount('#app')
