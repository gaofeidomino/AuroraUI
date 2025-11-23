import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'fs'
import path from 'path'
import { getPackageManager, type PackageManager } from './get-package-manager'

// Mock fs module
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(),
  },
}))

describe('getPackageManager', () => {
  const originalCwd = process.cwd()
  const mockCwd = '/test/project'

  beforeEach(() => {
    vi.spyOn(process, 'cwd').mockReturnValue(mockCwd)
    vi.mocked(fs.existsSync).mockReturnValue(false)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return pnpm when pnpm-lock.yaml exists', async () => {
    vi.mocked(fs.existsSync).mockImplementation((filePath: string) => {
      return filePath === path.join(mockCwd, 'pnpm-lock.yaml')
    })

    const result = await getPackageManager()
    expect(result).toBe('pnpm')
  })

  it('should return yarn when yarn.lock exists', async () => {
    vi.mocked(fs.existsSync).mockImplementation((filePath: string) => {
      return filePath === path.join(mockCwd, 'yarn.lock')
    })

    const result = await getPackageManager()
    expect(result).toBe('yarn')
  })

  it('should return npm when package-lock.json exists', async () => {
    vi.mocked(fs.existsSync).mockImplementation((filePath: string) => {
      return filePath === path.join(mockCwd, 'package-lock.json')
    })

    const result = await getPackageManager()
    expect(result).toBe('npm')
  })

  it('should default to npm when no lock file exists', async () => {
    vi.mocked(fs.existsSync).mockReturnValue(false)

    const result = await getPackageManager()
    expect(result).toBe('npm')
  })

  it('should prioritize pnpm over yarn and npm', async () => {
    vi.mocked(fs.existsSync).mockImplementation((filePath: string) => {
      const file = path.basename(filePath)
      return file === 'pnpm-lock.yaml' || file === 'yarn.lock' || file === 'package-lock.json'
    })

    const result = await getPackageManager()
    expect(result).toBe('pnpm')
  })
})

