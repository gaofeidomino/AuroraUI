<script setup lang="ts">
import { CollapsibleTrigger, type CollapsibleTriggerProps, useForwardProps } from 'reka-ui'

defineOptions({ name: 'ACollapsibleTrigger' })

const props = defineProps<CollapsibleTriggerProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
    <CollapsibleTrigger data-slot="collapsible-trigger" v-bind="forwardedProps">
        <slot />
    </CollapsibleTrigger>
</template>
