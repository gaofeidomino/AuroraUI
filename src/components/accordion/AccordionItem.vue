<script setup lang="ts">
import { cn } from '@/utils/cn'
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, useForwardProps, type AccordionItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'AAccordionItem' })

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <AccordionItem data-slot="accordion-item" v-bind="forwardedProps" :class="cn('border-b last:border-b-0', props.class)">
        <slot />
    </AccordionItem>
</template>
