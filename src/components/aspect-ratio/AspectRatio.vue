<script setup lang="ts">
import { AspectRatio, type AspectRatioProps } from 'reka-ui'

defineOptions({ name: 'AAspectRatio' })

const props = defineProps<AspectRatioProps>()
</script>

<template>
    <AspectRatio data-slot="aspect-ratio" v-bind="props">
        <slot />
    </AspectRatio>
</template>
