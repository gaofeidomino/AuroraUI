import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '@/style.css'

import AuroraUI from '@/index'

// 创建应用实例
const app = createApp(App)

// 注册AuroraUI组件库
app.use(AuroraUI)

// 挂载应用
app.mount('#app')
