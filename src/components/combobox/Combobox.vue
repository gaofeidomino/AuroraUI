<script setup lang="ts">
import { ComboboxRoot, type ComboboxRootEmits, type ComboboxRootProps, useForwardPropsEmits } from 'reka-ui'

defineOptions({ name: 'ACombobox' })

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <ComboboxRoot data-slot="combobox" v-bind="forwarded">
        <slot />
    </ComboboxRoot>
</template>
