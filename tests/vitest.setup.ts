import '@testing-library/jest-dom'
import { vi } from 'vitest'

// 全局测试设置
beforeEach(() => {
    // 清理DOM
    document.body.innerHTML = ''
})

afterEach(() => {
    // 清理所有模拟
    vi.clearAllMocks()
})

// 模拟CSS模块
vi.mock('*.css', () => ({}))
vi.mock('*.scss', () => ({}))

// 模拟静态资源
vi.mock('*.svg', () => 'svg')
vi.mock('*.png', () => 'png')
vi.mock('*.jpg', () => 'jpg')
vi.mock('*.jpeg', () => 'jpeg')
vi.mock('*.gif', () => 'gif')
vi.mock('*.webp', () => 'webp')
