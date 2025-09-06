<script setup lang="ts">
import { cn } from '@/utils/cn'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogTitle, type AlertDialogTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'AAlertDialogTitle' })

const props = defineProps<AlertDialogTitleProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
    <AlertDialogTitle data-slot="alert-dialog-title" v-bind="delegatedProps" :class="cn('text-lg font-semibold', props.class)">
        <slot />
    </AlertDialogTitle>
</template>
