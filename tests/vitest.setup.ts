import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.matchMedia for carousel tests
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})

// Mock ResizeObserver for carousel tests
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// Mock IntersectionObserver for carousel tests
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    root: null,
    rootMargin: '',
    thresholds: [],
    takeRecords: () => [],
}))

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
