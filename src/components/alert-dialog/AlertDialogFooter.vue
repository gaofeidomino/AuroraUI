<script setup lang="ts">
import { cn } from '@/utils/cn'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'AAlertDialogFooter' })

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const basicClass = 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end'
</script>

<template>
    <div data-slot="alert-dialog-footer" :class="cn(basicClass, props.class)">
        <slot />
    </div>
</template>
