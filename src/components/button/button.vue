<script setup lang="ts">
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './button'

defineOptions({
    name: 'AButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { _ref, _size, _type, _disabled, _props, handleClick } = useButton(props, emit)

const buttonKls = computed(() => ['a-button'])

defineExpose({
    ref: _ref,
    size: _size,
    type: _type,
    disabled: _disabled,
})
</script>

<template>
    <component :is="tag" ref="_ref" v-bind="_props" @click="handleClick" :class="buttonKls" :style="buttonStyle">
        <template v-if="loading">
            <slot v-if="$slots.loading" name="loading" />
            <el-icon v-else :class="ns.is('loading')">
                <component :is="loadingIcon" />
            </el-icon>
        </template>
        <el-icon v-else-if="icon || $slots.icon">
            <component :is="icon" v-if="icon" />
            <slot v-else name="icon" />
        </el-icon>
        <span v-if="$slots.default" :class="{ [ns.em('text', 'expand')]: shouldAddSpace }">
            <slot />
        </span>
    </component>
</template>
