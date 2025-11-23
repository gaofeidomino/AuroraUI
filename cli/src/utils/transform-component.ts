import path from 'path'

export function transformComponent(content: string, options: { from: string; to: string }): string {
    let transformed = content

    // Calculate relative path from the file being transformed to utils directory
    const fileDir = path.dirname(options.from)
    const utilsDir = path.join(process.cwd(), 'src/utils')

    // Get relative path and normalize
    let relativeUtilsPath = path.relative(fileDir, utilsDir)

    // If path.relative returns an absolute path (when paths are on different drives on Windows),
    // or if it's empty, handle it
    if (!relativeUtilsPath || relativeUtilsPath.startsWith('/')) {
        // Fallback: calculate manually
        const fileParts = fileDir.split(path.sep).filter(Boolean)
        const utilsParts = utilsDir.split(path.sep).filter(Boolean)

        // Find common prefix
        let commonLength = 0
        for (let i = 0; i < Math.min(fileParts.length, utilsParts.length); i++) {
            if (fileParts[i] === utilsParts[i]) {
                commonLength++
            } else {
                break
            }
        }

        // Build relative path
        const upLevels = fileParts.length - commonLength
        const downPath = utilsParts.slice(commonLength)
        relativeUtilsPath = '../'.repeat(upLevels) + downPath.join('/')
    }

    // Normalize path separators for cross-platform compatibility
    let normalizedPath = relativeUtilsPath.split(path.sep).join('/')

    // Ensure path starts with ./ or ../
    if (!normalizedPath.startsWith('.')) {
        normalizedPath = `./${normalizedPath}`
    }

    // Handle empty relative path (same directory)
    if (normalizedPath === '.' || normalizedPath === './') {
        normalizedPath = '.'
    }

    // Replace @/utils/cn imports with relative path
    const importPath = normalizedPath === '.' ? './cn' : `${normalizedPath}/cn`
    transformed = transformed.replace(/from ['"]@\/utils\/cn['"]/g, `from '${importPath}'`)

    // Replace external dependencies with imports from aurora-ui-plus
    // This allows users to only install aurora-ui-plus without needing to install these dependencies separately
    const dependencyMap: Record<string, string> = {
        'reka-ui': 'aurora-ui-plus',
        clsx: 'aurora-ui-plus',
        'tailwind-merge': 'aurora-ui-plus',
        'class-variance-authority': 'aurora-ui-plus',
        '@vueuse/core': 'aurora-ui-plus',
    }

    for (const [dep, replacement] of Object.entries(dependencyMap)) {
        // Replace both regular imports and type imports
        // Match: from 'dep' or from "dep" or from 'dep/...' or from "dep/..."
        const importRegex = new RegExp(`from ['"]${dep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:/.*)?['"]`, 'g')
        transformed = transformed.replace(importRegex, `from '${replacement}'`)

        // Also handle type imports: import type { ... } from 'dep'
        const typeImportRegex = new RegExp(`import type .* from ['"]${dep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:/.*)?['"]`, 'g')
        transformed = transformed.replace(typeImportRegex, (match) => {
            return match.replace(new RegExp(`from ['"]${dep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:/.*)?['"]`), `from '${replacement}'`)
        })
    }

    // Replace other @/ imports - keep them as @/ since users should configure path aliases
    // But we can provide a comment about it
    if (transformed.includes('@/') && !transformed.includes('@/utils/cn')) {
        // Add a comment at the top if there are other @/ imports
        if (!transformed.includes('// Note: Make sure to configure path aliases')) {
            transformed = `// Note: Make sure to configure path aliases (@/) in your tsconfig.json or vite.config.ts\n${transformed}`
        }
    }

    return transformed
}
