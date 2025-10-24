<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'reka-ui'

defineOptions({ name: 'ASelectValue' })

const props = defineProps<SelectValueProps>()
</script>

<template>
    <SelectValue data-slot="select-value" v-bind="props">
        <slot />
    </SelectValue>
</template>
