<script setup lang="ts">
import { SelectItemText, type SelectItemTextProps } from 'reka-ui'

defineOptions({ name: 'ASelectItemText' })

const props = defineProps<SelectItemTextProps>()
</script>

<template>
    <SelectItemText data-slot="select-item-text" v-bind="props">
        <slot />
    </SelectItemText>
</template>
