<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ChevronLeft } from 'lucide-vue-next'
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'
import { buttonVariants } from '../button'

defineOptions({ name: 'ACalendarPrevButton' })

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const basicClass = ['absolute left-1', 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100']
</script>

<template>
    <CalendarPrev data-slot="calendar-prev-button" :class="cn(buttonVariants({ variant: 'outline' }), ...basicClass, props.class)" v-bind="forwardedProps">
        <slot>
            <ChevronLeft class="size-4" />
        </slot>
    </CalendarPrev>
</template>
