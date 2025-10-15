<script setup lang="ts">
import { DropdownMenuGroup, type DropdownMenuGroupProps } from 'reka-ui'

defineOptions({ name: 'ADropdownMenuGroup' })

const props = defineProps<DropdownMenuGroupProps>()
</script>

<template>
    <DropdownMenuGroup data-slot="dropdown-menu-group" v-bind="props">
        <slot />
    </DropdownMenuGroup>
</template>
