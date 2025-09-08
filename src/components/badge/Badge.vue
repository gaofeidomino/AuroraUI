<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '@/utils/cn'
import { type BadgeVariants, badgeVariants } from './index'

defineOptions({ name: 'ABadge' })

const props = defineProps<
    PrimitiveProps & {
        variant?: BadgeVariants['variant']
        class?: HTMLAttributes['class']
    }
>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
    <Primitive data-slot="badge" :class="cn(badgeVariants({ variant }), props.class)" v-bind="delegatedProps">
        <slot />
    </Primitive>
</template>
