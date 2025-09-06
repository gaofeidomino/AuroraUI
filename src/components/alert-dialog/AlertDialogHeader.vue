<script setup lang="ts">
import { cn } from '@/utils/cn'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'AAlertDialogHeader' })

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const basicClass = 'flex flex-col gap-2 text-center sm:text-left'
</script>

<template>
    <div data-slot="alert-dialog-header" :class="cn(basicClass, props.class)">
        <slot />
    </div>
</template>
