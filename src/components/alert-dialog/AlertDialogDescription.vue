<script setup lang="ts">
import { cn } from '@/utils/cn'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogDescription, type AlertDialogDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'AAlertDialogDescription' })

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
    <AlertDialogDescription data-slot="alert-dialog-description" v-bind="delegatedProps" :class="cn('text-muted-foreground text-sm', props.class)">
        <slot />
    </AlertDialogDescription>
</template>
