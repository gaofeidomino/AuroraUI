<script setup lang="ts">
import { cn } from '@/utils/cn'
import { reactiveOmit } from '@vueuse/core'
import { CalendarCell, useForwardProps, type CalendarCellProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'ACalendarCell' })

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const basicClass = 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent'
</script>

<template>
    <CalendarCell data-slot="calendar-cell" v-bind="forwardedProps" :class="cn(basicClass, props.class)">
        <slot />
    </CalendarCell>
</template>
