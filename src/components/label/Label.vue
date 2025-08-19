<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Label, type LabelProps } from 'reka-ui'
import { cn } from '@/utils/cn'
import { reactiveOmit } from '@vueuse/core'

defineOptions({
    name: 'ALabel',
})

const props = defineProps<
    LabelProps & {
        class?: HTMLAttributes['class']
    }
>()

const delegatedProps = reactiveOmit(props, ['class'])

const defaultClass = 'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
</script>

<template>
    <Label data-slot="label" v-bind="delegatedProps" :class="cn(defaultClass, props.class)">
        <slot />
    </Label>
</template>
