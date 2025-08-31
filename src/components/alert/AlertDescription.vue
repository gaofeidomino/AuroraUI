<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'

defineOptions({ name: 'AAlertDescription' })

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const basicClass = 'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed'
</script>

<template>
    <div data-slot="alert-description" :class="cn(basicClass, props.class)">
        <slot />
    </div>
</template>
