<script setup lang="ts">
import { cn } from '@/utils/cn'
import { buttonVariants } from '../button'
import { AlertDialogAction, type AlertDialogActionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'

defineOptions({ name: 'AAlertDialogAction' })

const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
    <AlertDialogAction v-bind="delegatedProps" :class="cn(buttonVariants(), props.class)">
        <slot />
    </AlertDialogAction>
</template>
