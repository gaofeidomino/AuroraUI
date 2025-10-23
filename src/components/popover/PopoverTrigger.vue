<script setup lang="ts">
import { PopoverTrigger, type PopoverTriggerProps } from 'reka-ui'

defineOptions({ name: 'APopoverTrigger' })

const props = defineProps<PopoverTriggerProps>()
</script>

<template>
    <PopoverTrigger data-slot="popover-trigger" v-bind="props">
        <slot />
    </PopoverTrigger>
</template>
