<script setup lang="ts">
import { MenubarGroup, type MenubarGroupProps } from 'reka-ui'

defineOptions({ name: 'AMenubarGroup' })

const props = defineProps<MenubarGroupProps>()
</script>

<template>
    <MenubarGroup data-slot="menubar-group" v-bind="props">
        <slot />
    </MenubarGroup>
</template>
