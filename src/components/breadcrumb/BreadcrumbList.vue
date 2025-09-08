<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'

defineOptions({ name: 'ABreadcrumbList' })

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const basicClass = 'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5'
</script>

<template>
    <ol data-slot="breadcrumb-list" :class="cn(basicClass, props.class)">
        <slot />
    </ol>
</template>
