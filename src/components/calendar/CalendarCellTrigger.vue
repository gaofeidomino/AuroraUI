<script setup lang="ts">
import { cn } from '@/utils/cn'
import { CalendarCellTrigger, useForwardProps, type CalendarCellTriggerProps } from 'reka-ui'
import { buttonVariants } from '../button'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'

defineOptions({ name: 'ACalendarCellTrigger' })

const props = withDefaults(defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>(), {
    as: 'button',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const itemsClass = [
    'size-8 p-0 font-normal aria-selected:opacity-100 cursor-default',
    '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
    // Selected
    'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
    // Disabled
    'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
    // Unavailable
    'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
    // Outside months
    'data-[outside-view]:text-muted-foreground',
]
</script>

<template>
    <CalendarCellTrigger data-slot="calendar-cell-trigger" v-bind="forwardedProps" :class="cn(buttonVariants({ variant: 'ghost' }), ...itemsClass, props.class)">
        <slot />
    </CalendarCellTrigger>
</template>
