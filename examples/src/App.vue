<template>
    <div class="min-h-screen bg-background">
        <!-- 导航栏 -->
        <nav class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span class="text-primary-foreground font-bold text-sm">A</span>
                        </div>
                        <h1 class="text-xl font-bold">AuroraUI</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="https://github.com/gaofei/AuroraUI" target="_blank" class="text-muted-foreground hover:text-foreground transition-colors"> GitHub </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 主要内容 -->
        <main class="container mx-auto px-4 py-8">
            <div class="max-w-4xl mx-auto">
                <!-- 介绍部分 -->
                <section class="mb-12">
                    <h1 class="text-4xl font-bold mb-4">AuroraUI 组件库</h1>
                    <p class="text-xl text-muted-foreground mb-6">现代化的 Vue 3 UI 组件库，基于 Tailwind CSS 构建</p>
                    <div class="flex flex-wrap gap-4">
                        <AButton size="lg" class="gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            开始使用
                        </AButton>
                        <AButton variant="outline" size="lg"> 查看文档 </AButton>
                    </div>
                </section>

                <!-- 组件示例 -->
                <ComponentExamples />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import ComponentExamples from './components/ComponentExamples.vue'
</script>
