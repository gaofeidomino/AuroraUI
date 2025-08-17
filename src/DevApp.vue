<script setup lang="ts">
import { ref } from 'vue'
import { AButton, ACard, ACardContent, ACardDescription, ACardFooter, ACardHeader, ACardTitle } from './components'

const clickCount = ref(0)

const handleClick = () => {
    clickCount.value++
    console.log('按钮被点击了！', clickCount.value)
}

const resetCount = () => {
    clickCount.value = 0
}
</script>

<template>
    <div class="min-h-screen p-8">
        <div class="max-w-6xl mx-auto">
            <!-- 头部 -->
            <header class="mb-8">
                <h1 class="text-3xl font-bold mb-2 text-foreground">AuroraUI 开发模式</h1>
                <p class="text-muted-foreground">快速测试和开发组件区域</p>
            </header>

            <!-- 组件测试区域 -->
            <div class="space-y-8">
                <!-- Button 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Button 组件测试</h2>

                    <div class="space-y-4">
                        <div>
                            <h3 class="text-lg font-medium mb-2">变体测试</h3>
                            <div class="flex flex-wrap gap-4">
                                <AButton>默认按钮</AButton>
                                <AButton variant="destructive">危险按钮</AButton>
                                <AButton variant="outline">轮廓按钮</AButton>
                                <AButton variant="secondary">次要按钮</AButton>
                                <AButton variant="ghost">幽灵按钮</AButton>
                                <AButton variant="link">链接按钮</AButton>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-2">尺寸测试</h3>
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

                        <div>
                            <h3 class="text-lg font-medium mb-2">状态测试</h3>
                            <div class="flex flex-wrap gap-4">
                                <AButton>正常按钮</AButton>
                                <AButton disabled>禁用按钮</AButton>
                                <AButton variant="outline" disabled>禁用轮廓按钮</AButton>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-2">交互测试</h3>
                            <div class="flex flex-wrap gap-4">
                                <AButton @click="handleClick" class="gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                    点击我 ({{ clickCount }})
                                </AButton>
                                <AButton variant="outline" @click="resetCount"> 重置计数 </AButton>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Card 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Card 组件测试</h2>

                    <div class="space-y-4">
                        <ACard>
                            <ACardHeader>
                                <ACardTitle>Card Title</ACardTitle>
                                <ACardDescription>Card Description</ACardDescription>
                            </ACardHeader>
                            <ACardContent>
                                <p>这是一个卡片组件的内容区域。</p>
                                <div class="mt-4">
                                    <AButton size="sm">卡片内按钮</AButton>
                                </div>
                            </ACardContent>
                            <ACardFooter>
                                <AButton variant="outline" size="sm">取消</AButton>
                                <AButton size="sm">确认</AButton>
                            </ACardFooter>
                        </ACard>
                    </div>
                </section>

                <!-- 新组件开发区域 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">新组件开发区域</h2>
                    <p class="text-muted-foreground mb-4">在这里测试新开发的组件</p>

                    <!-- 这里可以添加新组件 -->
                    <div class="p-4 border-2 border-dashed border-border rounded-lg">
                        <p class="text-center text-muted-foreground">在这里添加新组件进行测试</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
