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

    // Note: We keep the original dependency imports unchanged
    // Dependencies will be installed separately in the user's project
    // This allows users to have full control over dependency versions
    // and avoids requiring them to install the entire aurora-ui-plus package

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
