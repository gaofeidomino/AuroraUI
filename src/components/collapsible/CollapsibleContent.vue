<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps, useForwardProps } from 'reka-ui'

defineOptions({ name: 'ACollapsibleContent' })

const props = defineProps<CollapsibleContentProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
    <CollapsibleContent data-slot="collapsible-content" v-bind="forwardedProps">
        <slot />
    </CollapsibleContent>
</template>
