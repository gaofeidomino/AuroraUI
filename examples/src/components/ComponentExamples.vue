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

        <!-- Alert 组件示例 -->
        <section class="component-card">
            <h2 class="component-title">Alert 警告框</h2>
            <p class="component-description">警告框组件用于显示重要的信息、警告或错误消息，支持多种变体。</p>

            <!-- 基础示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">基础用法</h3>
                <div class="space-y-4">
                    <AAlert variant="default">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 16v-4M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <AAlertTitle>提示</AAlertTitle>
                        <AAlertDescription> 这是一个默认的警告框，用于显示一般信息。 </AAlertDescription>
                    </AAlert>

                    <AAlert variant="destructive">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        <AAlertTitle>错误</AAlertTitle>
                        <AAlertDescription> 这是一个错误警告框，用于显示错误或危险信息。 </AAlertDescription>
                    </AAlert>
                </div>
            </div>

            <!-- 不同状态示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">不同状态</h3>
                <div class="space-y-4">
                    <AAlert variant="default">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <AAlertTitle>成功</AAlertTitle>
                        <AAlertDescription> 操作已成功完成！ </AAlertDescription>
                    </AAlert>

                    <AAlert variant="default">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <AAlertTitle>警告</AAlertTitle>
                        <AAlertDescription> 请注意这个重要信息。 </AAlertDescription>
                    </AAlert>
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;AAlert variant="default"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;AAlertTitle&gt;提示&lt;/AAlertTitle&gt;
    &lt;AAlertDescription&gt;
      这是一个默认的警告框。
    &lt;/AAlertDescription&gt;
  &lt;/AAlert&gt;
  
  &lt;AAlert variant="destructive"&gt;
    &lt;svg&gt;...&lt;/svg&gt;
    &lt;AAlertTitle&gt;错误&lt;/AAlertTitle&gt;
    &lt;AAlertDescription&gt;
      这是一个错误警告框。
    &lt;/AAlertDescription&gt;
  &lt;/AAlert&gt;
&lt;/template&gt;</code></pre>
            </div>
        </section>

        <!-- Textarea 组件示例 -->
        <section class="component-card">
            <h2 class="component-title">Textarea 文本域</h2>
            <p class="component-description">文本域组件用于输入多行文本，支持自动调整高度和多种状态。</p>

            <!-- 基础示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">基础用法</h3>
                <div class="space-y-4">
                    <div>
                        <ALabel for="basic-textarea">基础文本域</ALabel>
                        <ATextarea id="basic-textarea" v-model="textareaValue" placeholder="请输入多行文本..." />
                    </div>
                    <p class="text-sm text-muted-foreground">当前值: {{ textareaValue }}</p>
                </div>
            </div>

            <!-- 不同尺寸示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">不同尺寸</h3>
                <div class="space-y-4">
                    <div>
                        <ALabel for="small-textarea">小尺寸</ALabel>
                        <ATextarea id="small-textarea" placeholder="小尺寸文本域" class="min-h-12" />
                    </div>
                    <div>
                        <ALabel for="large-textarea">大尺寸</ALabel>
                        <ATextarea id="large-textarea" placeholder="大尺寸文本域" class="min-h-32" />
                    </div>
                </div>
            </div>

            <!-- 状态示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">状态</h3>
                <div class="space-y-4">
                    <ATextarea placeholder="正常状态" />
                    <ATextarea disabled placeholder="禁用状态" />
                    <ATextarea aria-invalid="true" placeholder="错误状态" />
                    <ATextarea required placeholder="必填字段" />
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;ATextarea v-model="value" placeholder="请输入多行文本..." /&gt;
  
  &lt;ATextarea disabled placeholder="禁用状态" /&gt;
  &lt;ATextarea aria-invalid="true" placeholder="错误状态" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const value = ref('')
&lt;/script&gt;</code></pre>
            </div>
        </section>

        <!-- Card 组件示例 -->
        <section class="component-card">
            <h2 class="component-title">Card 卡片</h2>
            <p class="component-description">卡片组件用于组织和展示相关内容，支持头部、内容、描述和底部等部分。</p>

            <!-- 基础示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">基础用法</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ACard>
                        <ACardHeader>
                            <ACardTitle>基础卡片</ACardTitle>
                            <ACardDescription> 这是一个基础的卡片组件示例 </ACardDescription>
                        </ACardHeader>
                        <ACardContent>
                            <p>这是卡片的主要内容区域，可以放置任何内容。</p>
                        </ACardContent>
                        <ACardFooter>
                            <AButton>操作按钮</AButton>
                        </ACardFooter>
                    </ACard>

                    <ACard>
                        <ACardHeader>
                            <ACardTitle>简单卡片</ACardTitle>
                        </ACardHeader>
                        <ACardContent>
                            <p>这是一个没有描述和底部的简单卡片。</p>
                        </ACardContent>
                    </ACard>
                </div>
            </div>

            <!-- 不同样式示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">不同样式</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ACard class="border-primary">
                        <ACardHeader>
                            <ACardTitle class="text-primary">主要卡片</ACardTitle>
                            <ACardDescription>带有主要色调的卡片</ACardDescription>
                        </ACardHeader>
                        <ACardContent>
                            <p>这个卡片使用了主要色调的边框。</p>
                        </ACardContent>
                    </ACard>

                    <ACard class="bg-muted">
                        <ACardHeader>
                            <ACardTitle>背景卡片</ACardTitle>
                            <ACardDescription>带有背景色的卡片</ACardDescription>
                        </ACardHeader>
                        <ACardContent>
                            <p>这个卡片使用了背景色。</p>
                        </ACardContent>
                    </ACard>

                    <ACard class="shadow-lg">
                        <ACardHeader>
                            <ACardTitle>阴影卡片</ACardTitle>
                            <ACardDescription>带有阴影效果的卡片</ACardDescription>
                        </ACardHeader>
                        <ACardContent>
                            <p>这个卡片使用了阴影效果。</p>
                        </ACardContent>
                    </ACard>
                </div>
            </div>

            <!-- 交互示例 -->
            <div class="component-demo">
                <h3 class="text-lg font-medium mb-4">交互示例</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ACard class="hover:shadow-md transition-shadow cursor-pointer" @click="handleCardClick">
                        <ACardHeader>
                            <ACardTitle>可点击卡片</ACardTitle>
                            <ACardDescription>点击这个卡片查看交互效果</ACardDescription>
                        </ACardHeader>
                        <ACardContent>
                            <p>点击次数: {{ cardClickCount }}</p>
                        </ACardContent>
                    </ACard>

                    <ACard>
                        <ACardHeader>
                            <ACardTitle>表单卡片</ACardTitle>
                            <ACardDescription>在卡片中使用表单组件</ACardDescription>
                        </ACardHeader>
                        <ACardContent class="space-y-4">
                            <div>
                                <ALabel for="card-name">姓名</ALabel>
                                <AInput id="card-name" v-model="cardForm.name" placeholder="请输入姓名" />
                            </div>
                            <div>
                                <ALabel for="card-email">邮箱</ALabel>
                                <AInput id="card-email" v-model="cardForm.email" type="email" placeholder="请输入邮箱" />
                            </div>
                        </ACardContent>
                        <ACardFooter>
                            <AButton @click="handleCardSubmit">提交</AButton>
                        </ACardFooter>
                    </ACard>
                </div>
            </div>

            <!-- 代码示例 -->
            <div class="component-code">
                <pre><code>&lt;template&gt;
  &lt;ACard&gt;
    &lt;ACardHeader&gt;
      &lt;ACardTitle&gt;卡片标题&lt;/ACardTitle&gt;
      &lt;ACardDescription&gt;卡片描述&lt;/ACardDescription&gt;
    &lt;/ACardHeader&gt;
    &lt;ACardContent&gt;
      &lt;p&gt;卡片内容&lt;/p&gt;
    &lt;/ACardContent&gt;
    &lt;ACardFooter&gt;
      &lt;AButton&gt;操作按钮&lt;/AButton&gt;
    &lt;/ACardFooter&gt;
  &lt;/ACard&gt;
&lt;/template&gt;</code></pre>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickCount = ref(0)
const inputValue = ref('')
const textareaValue = ref('')
const cardClickCount = ref(0)
const formData = ref({
    name: '',
    email: '',
    message: '',
})
const cardForm = ref({
    name: '',
    email: '',
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

const handleCardClick = () => {
    cardClickCount.value++
}

const handleCardSubmit = () => {
    alert('卡片表单提交: ' + JSON.stringify(cardForm.value))
}
</script>
