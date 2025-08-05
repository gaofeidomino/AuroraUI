<template>
    <div class="p-8 space-y-8">
        <h1 class="text-3xl font-bold">AuroraUI 组件示例</h1>

        <!-- Button 组件示例 -->
        <section class="space-y-4">
            <h2 class="text-2xl font-semibold">Button 按钮</h2>

            <div class="space-y-4">
                <h3 class="text-lg font-medium">变体 (Variants)</h3>
                <div class="flex flex-wrap gap-4">
                    <AButton>默认按钮</AButton>
                    <AButton variant="destructive">危险按钮</AButton>
                    <AButton variant="outline">轮廓按钮</AButton>
                    <AButton variant="secondary">次要按钮</AButton>
                    <AButton variant="ghost">幽灵按钮</AButton>
                    <AButton variant="link">链接按钮</AButton>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-lg font-medium">尺寸 (Sizes)</h3>
                <div class="flex flex-wrap items-center gap-4">
                    <AButton size="sm">小按钮</AButton>
                    <AButton>默认按钮</AButton>
                    <AButton size="lg">大按钮</AButton>
                    <AButton size="icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </AButton>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-lg font-medium">状态 (States)</h3>
                <div class="flex flex-wrap gap-4">
                    <AButton>正常按钮</AButton>
                    <AButton disabled>禁用按钮</AButton>
                    <AButton variant="outline" disabled>禁用轮廓按钮</AButton>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// 这个示例展示了如何在项目中使用 AuroraUI 组件
// 确保已经全局注册了组件或按需导入了组件
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>
