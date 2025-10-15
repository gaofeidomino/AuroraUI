<script setup lang="ts">
import { DropdownMenuSub, type DropdownMenuSubEmits, type DropdownMenuSubProps, useForwardPropsEmits } from 'reka-ui'

defineOptions({ name: 'ADropdownMenuSub' })

const props = defineProps<DropdownMenuSubProps>()
const emits = defineEmits<DropdownMenuSubEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <DropdownMenuSub data-slot="dropdown-menu-sub" v-bind="forwarded">
        <slot />
    </DropdownMenuSub>
</template>
