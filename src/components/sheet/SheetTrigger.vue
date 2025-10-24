<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'reka-ui'

defineOptions({ name: 'ASheetTrigger' })

const props = defineProps<DialogTriggerProps>()
</script>

<template>
    <DialogTrigger data-slot="sheet-trigger" v-bind="props">
        <slot />
    </DialogTrigger>
</template>
