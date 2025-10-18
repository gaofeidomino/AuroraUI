<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps } from 'reka-ui'

defineOptions({ name: 'AMenubarMenu' })

const props = defineProps<MenubarMenuProps>()
</script>

<template>
    <MenubarMenu data-slot="menubar-menu" v-bind="props">
        <slot />
    </MenubarMenu>
</template>
