<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { cn } from '@/utils/cn'

defineOptions({ name: 'AAvatar' })

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const basicClass = 'relative flex size-8 shrink-0 overflow-hidden rounded-full'
</script>

<template>
    <AvatarRoot data-slot="avatar" :class="cn(basicClass, props.class)">
        <slot />
    </AvatarRoot>
</template>
