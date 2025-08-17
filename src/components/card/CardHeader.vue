<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

defineOptions({ name: 'ACardHeader' })
</script>

<template>
    <div :class="cn('flex flex-col gap-1.5 p-6', props.class)">
        <slot />
    </div>
</template>
