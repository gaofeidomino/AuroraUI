<script setup lang="ts">
import { TooltipTrigger, type TooltipTriggerProps } from 'reka-ui'

defineOptions({ name: 'ATooltipTrigger' })

const props = defineProps<TooltipTriggerProps>()
</script>

<template>
    <TooltipTrigger data-slot="tooltip-trigger" v-bind="props">
        <slot />
    </TooltipTrigger>
</template>
