import { describe, it, expect } from 'vitest'
import { registry, type Component } from './registry'

describe('registry', () => {
  it('should be an array', () => {
    expect(Array.isArray(registry)).toBe(true)
  })

  it('should have at least one component', () => {
    expect(registry.length).toBeGreaterThan(0)
  })

  it('should have valid component structure', () => {
    registry.forEach((component: Component) => {
      expect(component).toHaveProperty('name')
      expect(typeof component.name).toBe('string')
      expect(component.name.length).toBeGreaterThan(0)

      if (component.dependencies) {
        expect(Array.isArray(component.dependencies)).toBe(true)
        component.dependencies.forEach((dep) => {
          expect(typeof dep).toBe('string')
        })
      }

      if (component.registryDependencies) {
        expect(Array.isArray(component.registryDependencies)).toBe(true)
        component.registryDependencies.forEach((dep) => {
          expect(typeof dep).toBe('string')
        })
      }

      if (component.exports) {
        expect(Array.isArray(component.exports)).toBe(true)
        component.exports.forEach((exp) => {
          expect(typeof exp).toBe('string')
        })
      }
    })
  })

  it('should have button component', () => {
    const button = registry.find((c) => c.name === 'button')
    expect(button).toBeDefined()
    expect(button?.dependencies).toContain('reka-ui')
    expect(button?.dependencies).toContain('clsx')
    expect(button?.dependencies).toContain('tailwind-merge')
  })

  it('should have unique component names', () => {
    const names = registry.map((c) => c.name)
    const uniqueNames = new Set(names)
    expect(names.length).toBe(uniqueNames.size)
  })
})

