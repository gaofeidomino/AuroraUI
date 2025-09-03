<script setup lang="ts">
import { cn } from '@/utils/cn'
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, type AccordionContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

defineOptions({ name: 'AAccordionContent' })

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = reactiveOmit(props, 'class')

const basicClass = 'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
</script>

<template>
    <AccordionContent data-slot="accordion-content" v-bind="delegatedProps" :class="basicClass">
        <div :class="cn('pt-0 pb-4', props.class)">
            <slot />
        </div>
    </AccordionContent>
</template>
