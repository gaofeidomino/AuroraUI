<template>
    <div class="space-y-12">
        <!-- Button 组件示例 -->
        <section class="component-card">
            <h2 class="component-title">Button 按钮</h2>
            <p class="component-description">按钮组件支持多种变体、尺寸和状态，适用于各种交互场景。</p>

            <!-- 变体示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">变体 (Variants)</h3>
                <div class="flex flex-wrap gap-4">
                    <AButton>默认按钮</AButton>
                    <AButton variant="destructive">危险按钮</AButton>
                    <AButton variant="outline">轮廓按钮</AButton>
                    <AButton variant="secondary">次要按钮</AButton>
                    <AButton variant="ghost">幽灵按钮</AButton>
                    <AButton variant="link">链接按钮</AButton>
                </div>
            </div>

            <!-- 尺寸示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">尺寸 (Sizes)</h3>
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

            <!-- 状态示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">状态 (States)</h3>
                <div class="flex flex-wrap gap-4">
                    <AButton>正常按钮</AButton>
                    <AButton disabled>禁用按钮</AButton>
                    <AButton variant="outline" disabled>禁用轮廓按钮</AButton>
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;AButton variant="default" size="default"&gt;
    默认按钮
  &lt;/AButton&gt;
  
  &lt;AButton variant="destructive" size="lg"&gt;
    危险按钮
  &lt;/AButton&gt;
  
  &lt;AButton variant="outline" disabled&gt;
    禁用按钮
  &lt;/AButton&gt;
&lt;/template&gt;</code></pre>
            </div>
        </section>

        <!-- 交互示例 -->
        <section class="component-card">
            <h2 class="component-title">交互示例</h2>
            <p class="component-description">展示按钮的交互功能和事件处理。</p>

            <div class="component-demo">
                <div class="flex flex-wrap gap-4">
                    <AButton @click="handleClick" class="gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        点击我 ({{ clickCount }})
                    </AButton>
                    <AButton variant="outline" @click="resetCount"> 重置计数 </AButton>
                </div>
                <p class="text-sm text-muted-foreground mt-2">点击按钮查看交互效果</p>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;AButton @click="handleClick"&gt;
    点击我 ({{ clickCount }})
  &lt;/AButton&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const clickCount = ref(0)

const handleClick = () => {
  clickCount.value++
}
&lt;/script&gt;</code></pre>
            </div>
        </section>

        <!-- 链接按钮示例 -->
        <section class="component-card">
            <h2 class="component-title">链接按钮</h2>
            <p class="component-description">按钮组件可以作为链接使用，支持外部链接和路由导航。</p>

            <div class="component-demo">
                <div class="flex flex-wrap gap-4">
                    <AButton as="a" href="https://github.com/gaofei/AuroraUI" target="_blank" class="gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                        </svg>
                        GitHub
                    </AButton>
                    <AButton as="a" href="/docs" variant="outline"> 查看文档 </AButton>
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;AButton as="a" href="https://github.com/gaofei/AuroraUI" target="_blank"&gt;
  GitHub
&lt;/AButton&gt;

&lt;AButton as="a" href="/docs" variant="outline"&gt;
  查看文档
&lt;/AButton&gt;</code></pre>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickCount = ref(0)

const handleClick = () => {
    clickCount.value++
}

const resetCount = () => {
    clickCount.value = 0
}
</script>
