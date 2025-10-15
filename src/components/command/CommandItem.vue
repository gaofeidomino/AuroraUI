<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from 'reka-ui'
import { reactiveOmit, useCurrentElement } from '@vueuse/core'
import { ListboxItem, useForwardPropsEmits, useId } from 'reka-ui'
import { computed, type HTMLAttributes, onMounted, onUnmounted, ref } from 'vue'
import { cn } from '@/utils/cn'
import { useCommand, useCommandGroup } from './index'

defineOptions({ name: 'ACommandItem' })

const props = defineProps<ListboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ListboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const id = useId()
const { filterState, allItems, allGroups } = useCommand()
const groupContext = useCommandGroup()

const isRender = computed(() => {
    if (!filterState.search) {
        // 没有搜索时显示所有项目
        return true
    } else {
        const filteredCurrentItem = filterState.filtered.items.get(id)
        // 如果过滤后的项目是undefined，则表示不在所有项目映射中
        // 第一次渲染时添加到映射中
        if (filteredCurrentItem === undefined) {
            return true
        }

        // 检查过滤后的项目是否大于0
        return filteredCurrentItem > 0
    }
})

const itemRef = ref()
const currentElement = useCurrentElement(itemRef)

onMounted(() => {
    if (!(currentElement.value instanceof HTMLElement)) return

    // 将文本值添加到映射中
    allItems.value.set(id, currentElement.value.textContent ?? props.value?.toString() ?? '')

    const groupId = groupContext?.id
    if (groupId) {
        if (!allGroups.value.has(groupId)) {
            allGroups.value.set(groupId, new Set([id]))
        } else {
            allGroups.value.get(groupId)?.add(id)
        }
    }
})

onUnmounted(() => {
    allItems.value.delete(id)
})
</script>

<template>
    <ListboxItem
        v-if="isRender"
        v-bind="forwarded"
        :id="id"
        ref="itemRef"
        data-slot="command-item"
        :class="cn(`data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-3 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, props.class)"
        @select="
            () => {
                filterState.search = ''
            }
        "
    >
        <slot />
    </ListboxItem>
</template>
