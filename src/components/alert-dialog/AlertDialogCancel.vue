<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { AlertDialogCancel, type AlertDialogCancelProps } from 'reka-ui'
import { buttonVariants } from '../button'
import { cn } from '@/utils/cn'

defineOptions({ name: 'AAlertDialogCancel' })

const props = defineProps<
    AlertDialogCancelProps & {
        class?: HTMLAttributes['class']
    }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
    <AlertDialogCancel v-bind="delegatedProps" :class="cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', props.class)">
        <slot />
    </AlertDialogCancel>
</template>
