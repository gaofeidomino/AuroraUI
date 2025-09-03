<script setup lang="ts">
import { AccordionRoot, useForwardPropsEmits, type AccordionRootEmits, type AccordionRootProps } from 'reka-ui'

defineOptions({ name: 'AAccordion' })

const porps = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(porps, emits)
</script>

<template>
    <AccordionRoot data-slot="accordion" v-bind="forwarded">
        <slot />
    </AccordionRoot>
</template>
