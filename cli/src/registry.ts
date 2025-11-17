export interface Component {
    name: string
    dependencies?: string[]
    exports?: string[]
    files?: string[]
}

export const registry: Component[] = [
    {
        name: 'button',
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
        exports: ['Button', 'buttonVariants'],
    },
    {
        name: 'card',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Card', 'CardContent', 'CardDescription', 'CardFooter', 'CardHeader', 'CardTitle'],
    },
    {
        name: 'input',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Input'],
    },
    {
        name: 'textarea',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Textarea'],
    },
    {
        name: 'label',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Label'],
    },
    {
        name: 'badge',
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
        exports: ['Badge', 'badgeVariants'],
    },
    {
        name: 'alert',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Alert', 'AlertDescription', 'AlertTitle'],
    },
    {
        name: 'avatar',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Avatar', 'AvatarFallback', 'AvatarImage'],
    },
    {
        name: 'separator',
        dependencies: ['clsx', 'tailwind-merge'],
        exports: ['Separator'],
    },
    {
        name: 'field',
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
        exports: ['Field', 'FieldContent', 'FieldDescription', 'FieldError', 'FieldGroup', 'FieldLabel', 'FieldLegend', 'FieldSeparator', 'FieldSet', 'FieldTitle'],
    },
    // 可以继续添加更多组件
]

