<script setup lang="ts">
import { ref } from 'vue'
import { AButton, ACard, ACardContent, ACardDescription, ACardFooter, ACardHeader, ACardTitle, AInput, ATextarea, ALabel } from './components'

const clickCount = ref(0)
const inputValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')
const searchValue = ref('')
const textareaValue = ref('')
const commentValue = ref('')
const descriptionValue = ref('这是一个默认的描述内容，用于测试只读状态。')
const feedbackValue = ref('')

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
                <h1 class="text-3xl font-bold mb-2 text-foreground flex items-center">
                    <img src="/logo.png" alt="AuroraUI" class="w-8 h-8" />
                    <span class="ml-2">AuroraUI 开发模式</span>
                </h1>
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
                                <AButton variant="destructive" disabled>禁用危险按钮</AButton>
                                <AButton variant="secondary" disabled>禁用次要按钮</AButton>
                            </div>
                            <p class="text-sm text-muted-foreground mt-2">将鼠标悬停在禁用按钮上查看鼠标样式变化</p>
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
                            <ACardFooter class="gap-4">
                                <AButton variant="outline" size="sm">取消</AButton>
                                <AButton size="sm">确认</AButton>
                            </ACardFooter>
                        </ACard>
                    </div>
                </section>

                <!-- Input 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Input 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel for="basic-input">基础输入框</ALabel>
                                    <AInput id="basic-input" v-model="inputValue" placeholder="请输入内容..." class="mt-1" />
                                    <p class="text-sm text-muted-foreground mt-1">当前值: {{ inputValue }}</p>
                                </div>

                                <div>
                                    <ALabel for="email-input">邮箱输入框</ALabel>
                                    <AInput id="email-input" v-model="emailValue" type="email" placeholder="请输入邮箱地址..." class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="password-input">密码输入框</ALabel>
                                    <AInput id="password-input" v-model="passwordValue" type="password" placeholder="请输入密码..." class="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同状态</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel for="normal-input">正常状态</ALabel>
                                    <AInput id="normal-input" placeholder="正常输入框" class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="disabled-input">禁用状态</ALabel>
                                    <AInput id="disabled-input" placeholder="禁用输入框" disabled class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="readonly-input">只读状态</ALabel>
                                    <AInput id="readonly-input" value="只读内容" readonly class="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同尺寸和样式</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel for="search-input">搜索框</ALabel>
                                    <AInput id="search-input" v-model="searchValue" placeholder="搜索..." class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="custom-input">自定义样式</ALabel>
                                    <AInput id="custom-input" placeholder="自定义样式输入框" class="mt-1 border-2 border-primary focus:border-primary" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">表单组合示例</h3>
                            <div class="max-w-md space-y-4">
                                <div>
                                    <ALabel for="username">用户名</ALabel>
                                    <AInput id="username" placeholder="请输入用户名" class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="user-email">邮箱</ALabel>
                                    <AInput id="user-email" type="email" placeholder="请输入邮箱" class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="user-password">密码</ALabel>
                                    <AInput id="user-password" type="password" placeholder="请输入密码" class="mt-1" />
                                </div>

                                <div class="flex gap-2 pt-2">
                                    <AButton size="sm">提交</AButton>
                                    <AButton variant="outline" size="sm">重置</AButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Label 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Label 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel>基础标签</ALabel>
                                    <p class="text-sm text-muted-foreground mt-1">这是一个基础的标签组件</p>
                                </div>

                                <div>
                                    <ALabel for="label-input">关联输入框的标签</ALabel>
                                    <AInput id="label-input" placeholder="点击标签会聚焦到输入框" class="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同样式</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel class="text-primary">主要颜色标签</ALabel>
                                </div>

                                <div>
                                    <ALabel class="text-destructive">错误颜色标签</ALabel>
                                </div>

                                <div>
                                    <ALabel class="text-muted-foreground">次要颜色标签</ALabel>
                                </div>

                                <div>
                                    <ALabel class="text-lg font-bold">大号粗体标签</ALabel>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">表单组合示例</h3>
                            <div class="max-w-md space-y-4">
                                <div class="flex items-center space-x-2">
                                    <AInput id="checkbox-input" type="checkbox" class="h-4 w-4" />
                                    <ALabel for="checkbox-input">我同意服务条款</ALabel>
                                </div>

                                <div class="flex items-center space-x-2">
                                    <AInput id="radio-input" type="radio" name="option" class="h-4 w-4" />
                                    <ALabel for="radio-input">选项一</ALabel>
                                </div>

                                <div class="flex items-center space-x-2">
                                    <AInput id="radio-input-2" type="radio" name="option" class="h-4 w-4" />
                                    <ALabel for="radio-input-2">选项二</ALabel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Textarea 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Textarea 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel for="basic-textarea">基础文本域</ALabel>
                                    <ATextarea id="basic-textarea" v-model="textareaValue" placeholder="请输入多行文本内容..." class="mt-1" />
                                    <p class="text-sm text-muted-foreground mt-1">当前值: {{ textareaValue }}</p>
                                </div>

                                <div>
                                    <ALabel for="comment-textarea">评论输入框</ALabel>
                                    <ATextarea id="comment-textarea" v-model="commentValue" placeholder="请输入您的评论..." class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="feedback-textarea">反馈意见</ALabel>
                                    <ATextarea id="feedback-textarea" v-model="feedbackValue" placeholder="请告诉我们您的想法和建议..." class="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同状态</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel for="normal-textarea">正常状态</ALabel>
                                    <ATextarea id="normal-textarea" placeholder="正常状态的文本域" class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="disabled-textarea">禁用状态</ALabel>
                                    <ATextarea id="disabled-textarea" placeholder="禁用状态的文本域" disabled class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="readonly-textarea">只读状态</ALabel>
                                    <ATextarea id="readonly-textarea" v-model="descriptionValue" readonly class="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同尺寸和样式</h3>
                            <div class="space-y-4">
                                <div>
                                    <ALabel for="small-textarea">小尺寸文本域</ALabel>
                                    <ATextarea id="small-textarea" placeholder="小尺寸文本域" class="mt-1 min-h-12" />
                                </div>

                                <div>
                                    <ALabel for="large-textarea">大尺寸文本域</ALabel>
                                    <ATextarea id="large-textarea" placeholder="大尺寸文本域，适合输入大量内容" class="mt-1 min-h-32" />
                                </div>

                                <div>
                                    <ALabel for="custom-textarea">自定义样式</ALabel>
                                    <ATextarea id="custom-textarea" placeholder="自定义样式的文本域" class="mt-1 border-2 border-primary focus:border-primary" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">表单组合示例</h3>
                            <div class="max-w-2xl space-y-4">
                                <div>
                                    <ALabel for="contact-name">姓名</ALabel>
                                    <AInput id="contact-name" placeholder="请输入您的姓名" class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="contact-email">邮箱</ALabel>
                                    <AInput id="contact-email" type="email" placeholder="请输入您的邮箱" class="mt-1" />
                                </div>

                                <div>
                                    <ALabel for="contact-message">留言内容</ALabel>
                                    <ATextarea id="contact-message" placeholder="请输入您的留言内容，我们会尽快回复..." class="mt-1 min-h-24" />
                                </div>

                                <div class="flex gap-2 pt-2">
                                    <AButton size="sm">提交留言</AButton>
                                    <AButton variant="outline" size="sm">重置</AButton>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">特殊用途示例</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <ALabel for="code-textarea">代码输入</ALabel>
                                    <ATextarea id="code-textarea" placeholder="// 在这里输入代码..." class="mt-1 font-mono text-sm min-h-32" />
                                </div>

                                <div>
                                    <ALabel for="markdown-textarea">Markdown 编辑</ALabel>
                                    <ATextarea id="markdown-textarea" placeholder="# 标题&#10;&#10;在这里输入 Markdown 内容..." class="mt-1 font-mono text-sm min-h-32" />
                                </div>
                            </div>
                        </div>
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
