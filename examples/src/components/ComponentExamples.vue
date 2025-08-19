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
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
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

        <!-- Label 组件示例 -->
        <section class="component-card">
            <h2 class="component-title">Label 标签</h2>
            <p class="component-description">标签组件用于标识表单控件，支持多种属性和状态。</p>

            <!-- 基础示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">基础用法</h3>
                <div class="space-y-4">
                    <div>
                        <ALabel for="basic-input">基础标签</ALabel>
                        <AInput id="basic-input" placeholder="请输入内容" />
                    </div>
                    <div>
                        <ALabel for="required-input" required>必填标签</ALabel>
                        <AInput id="required-input" placeholder="必填字段" />
                    </div>
                </div>
            </div>

            <!-- 状态示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">状态</h3>
                <div class="space-y-4">
                    <div>
                        <ALabel for="disabled-input" disabled>禁用标签</ALabel>
                        <AInput id="disabled-input" disabled placeholder="禁用输入框" />
                    </div>
                    <div>
                        <ALabel for="error-input" class="text-destructive">错误标签</ALabel>
                        <AInput id="error-input" aria-invalid="true" placeholder="错误状态" />
                    </div>
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;ALabel for="input-id"&gt;基础标签&lt;/ALabel&gt;
  &lt;AInput id="input-id" placeholder="请输入内容" /&gt;
  
  &lt;ALabel for="required-input" required&gt;必填标签&lt;/ALabel&gt;
  &lt;AInput id="required-input" placeholder="必填字段" /&gt;
&lt;/template&gt;</code></pre>
            </div>
        </section>

        <!-- Input 组件示例 -->
        <section class="component-card">
            <h2 class="component-title">Input 输入框</h2>
            <p class="component-description">输入框组件支持多种类型、状态和交互功能。</p>

            <!-- 基础示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">基础用法</h3>
                <div class="space-y-4">
                    <AInput v-model="inputValue" placeholder="请输入文本" />
                    <p class="text-sm text-muted-foreground">当前值: {{ inputValue }}</p>
                </div>
            </div>

            <!-- 类型示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">输入类型</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <ALabel for="email-input">邮箱</ALabel>
                        <AInput id="email-input" type="email" placeholder="example@email.com" />
                    </div>
                    <div>
                        <ALabel for="password-input">密码</ALabel>
                        <AInput id="password-input" type="password" placeholder="请输入密码" />
                    </div>
                    <div>
                        <ALabel for="number-input">数字</ALabel>
                        <AInput id="number-input" type="number" placeholder="请输入数字" />
                    </div>
                    <div>
                        <ALabel for="file-input">文件</ALabel>
                        <AInput id="file-input" type="file" />
                    </div>
                </div>
            </div>

            <!-- 状态示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">状态</h3>
                <div class="space-y-4">
                    <AInput placeholder="正常状态" />
                    <AInput disabled placeholder="禁用状态" />
                    <AInput aria-invalid="true" placeholder="错误状态" />
                    <AInput required placeholder="必填字段" />
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;AInput v-model="value" placeholder="请输入文本" /&gt;
  
  &lt;AInput type="email" placeholder="example@email.com" /&gt;
  &lt;AInput type="password" placeholder="请输入密码" /&gt;
  &lt;AInput disabled placeholder="禁用状态" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const value = ref('')
&lt;/script&gt;</code></pre>
            </div>
        </section>

        <!-- 表单示例 -->
        <section class="component-card">
            <h2 class="component-title">表单示例</h2>
            <p class="component-description">展示 Label 和 Input 组件在表单中的实际应用。</p>

            <div class="component-demo">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div>
                        <ALabel for="name" required>姓名</ALabel>
                        <AInput id="name" v-model="formData.name" placeholder="请输入姓名" required />
                    </div>

                    <div>
                        <ALabel for="email" required>邮箱</ALabel>
                        <AInput id="email" v-model="formData.email" type="email" placeholder="请输入邮箱" required />
                    </div>

                    <div>
                        <ALabel for="message">留言</ALabel>
                        <AInput id="message" v-model="formData.message" placeholder="请输入留言" />
                    </div>

                    <div class="flex gap-4">
                        <AButton type="submit">提交表单</AButton>
                        <AButton type="button" variant="outline" @click="resetForm">重置</AButton>
                    </div>
                </form>

                <div v-if="formData.name || formData.email || formData.message" class="mt-4 p-4 bg-muted rounded-lg">
                    <h4 class="font-medium mb-2">表单数据:</h4>
                    <pre class="text-sm">{{ JSON.stringify(formData, null, 2) }}</pre>
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;form @submit.prevent="handleSubmit"&gt;
    &lt;div&gt;
      &lt;ALabel for="name" required&gt;姓名&lt;/ALabel&gt;
      &lt;AInput id="name" v-model="formData.name" required /&gt;
    &lt;/div&gt;
    
    &lt;div&gt;
      &lt;ALabel for="email" required&gt;邮箱&lt;/ALabel&gt;
      &lt;AInput id="email" v-model="formData.email" type="email" required /&gt;
    &lt;/div&gt;
    
    &lt;AButton type="submit"&gt;提交&lt;/AButton&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickCount = ref(0)
const inputValue = ref('')
const formData = ref({
    name: '',
    email: '',
    message: '',
})

const handleClick = () => {
    clickCount.value++
}

const resetCount = () => {
    clickCount.value = 0
}

const handleSubmit = () => {
    alert('表单提交: ' + JSON.stringify(formData.value))
}

const resetForm = () => {
    formData.value = {
        name: '',
        email: '',
        message: '',
    }
}
</script>
