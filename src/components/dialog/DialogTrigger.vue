<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'reka-ui'

defineOptions({ name: 'ADialogTrigger' })

const props = defineProps<DialogTriggerProps>()
</script>

<template>
    <DialogTrigger data-slot="dialog-trigger" v-bind="props">
        <slot />
    </DialogTrigger>
</template>
