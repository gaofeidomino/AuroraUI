export interface Component {
    name: string
    dependencies?: string[] // npm package dependencies
    registryDependencies?: string[] // component dependencies (other components)
    exports?: string[]
    files?: string[]
}

export const registry: Component[] = [
    {
        name: 'button',
        dependencies: ['reka-ui', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        exports: ['Button', 'buttonVariants'],
    },
    {
        name: 'card',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Card', 'CardContent', 'CardDescription', 'CardFooter', 'CardHeader', 'CardTitle'],
    },
    {
        name: 'input',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Input'],
    },
    {
        name: 'textarea',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Textarea'],
    },
    {
        name: 'label',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Label'],
    },
    {
        name: 'badge',
        dependencies: ['reka-ui', '@vueuse/core', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        exports: ['Badge', 'badgeVariants'],
    },
    {
        name: 'alert',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Alert', 'AlertDescription', 'AlertTitle'],
    },
    {
        name: 'avatar',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Avatar', 'AvatarFallback', 'AvatarImage'],
    },
    {
        name: 'separator',
        dependencies: ['reka-ui', 'clsx', 'tailwind-merge'],
        exports: ['Separator'],
    },
    {
        name: 'field',
        dependencies: ['reka-ui', 'class-variance-authority', 'clsx', 'tailwind-merge'],
        registryDependencies: ['label', 'input'], // Field component depends on label and input
        exports: ['Field', 'FieldContent', 'FieldDescription', 'FieldError', 'FieldGroup', 'FieldLabel', 'FieldLegend', 'FieldSeparator', 'FieldSet', 'FieldTitle'],
    },
    // 可以继续添加更多组件
]
