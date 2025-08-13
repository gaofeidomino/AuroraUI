import '@testing-library/jest-dom'

// 全局测试设置
beforeEach(() => {
    // 清理DOM
    document.body.innerHTML = ''
})

afterEach(() => {
    // 清理所有模拟
    vi.clearAllMocks()
})
