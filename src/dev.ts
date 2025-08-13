import { createApp } from 'vue'
import DevApp from './DevApp.vue'
import './style.css'

// 创建开发应用实例
const app = createApp(DevApp)

// 挂载应用
app.mount('#app')
