<script setup lang="ts">
import { ref } from 'vue'
import { CalendarDate } from '@internationalized/date'
import type { DateValue } from 'reka-ui'
import { AButton, ACard, ACardContent, ACardDescription, ACardFooter, ACardHeader, ACardTitle, AInput, ATextarea, ALabel, AAccordion, AAccordionItem, AAccordionTrigger, AAccordionContent, AAlert, AAlertDescription, AAlertTitle, ABadge, AAvatar, AAvatarFallback, AAvatarImage, AAspectRatio, ACalendar, ACarousel, ACarouselContent, ACarouselItem, ACarouselNext, ACarouselPrevious } from './components'

const clickCount = ref(0)
const inputValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')
const searchValue = ref('')
const textareaValue = ref('')
const commentValue = ref('')
const descriptionValue = ref('这是一个默认的描述内容，用于测试只读状态。')
const feedbackValue = ref('')

// Accordion 相关状态
const accordionValue = ref<string | undefined>(undefined)
const accordionMultipleValue = ref<string[]>([])

// Alert 相关状态
const showAlert = ref(false)
const alertType = ref<'default' | 'destructive'>('default')

// Badge 相关状态
const badgeCount = ref(5)

// Calendar 相关状态
const selectedDate = ref<DateValue | undefined>(undefined)
const calendarValue = ref<DateValue | undefined>(undefined)

const handleClick = () => {
    clickCount.value++
    console.log('按钮被点击了！', clickCount.value)
}

const resetCount = () => {
    clickCount.value = 0
}

// Accordion 事件处理
const handleAccordionChange = (value: string | undefined) => {
    accordionValue.value = value
    console.log('单选 Accordion 值变化:', value)
}

const handleAccordionMultipleChange = (value: string[]) => {
    accordionMultipleValue.value = value
    console.log('多选 Accordion 值变化:', value)
}

// Alert 事件处理
const showAlertMessage = (type: 'default' | 'destructive' = 'default') => {
    alertType.value = type
    showAlert.value = true
    setTimeout(() => {
        showAlert.value = false
    }, 3000)
}

const incrementBadge = () => {
    badgeCount.value++
}

const decrementBadge = () => {
    if (badgeCount.value > 0) {
        badgeCount.value--
    }
}

// Calendar 事件处理
const handleDateSelect = (date: DateValue | undefined) => {
    selectedDate.value = date
    console.log('选择的日期:', date)
}

const goToToday = () => {
    const today = new Date()
    const calendarToday = new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
    selectedDate.value = calendarToday as DateValue
    calendarValue.value = calendarToday as DateValue
}

const goToNextMonth = () => {
    if (calendarValue.value) {
        calendarValue.value = calendarValue.value.add({ months: 1 })
    }
}

const goToPrevMonth = () => {
    if (calendarValue.value) {
        calendarValue.value = calendarValue.value.subtract({ months: 1 })
    }
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

                <!-- Accordion 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Accordion 组件测试</h2>
                    <p class="text-muted-foreground mb-4">测试可折叠面板组件</p>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法 - 单选模式</h3>
                            <AAccordion type="single" collapsible class="w-full max-w-2xl" @value-change="handleAccordionChange">
                                <AAccordionItem value="item-1">
                                    <AAccordionTrigger class="text-lg font-medium"> 什么是 AuroraUI？ </AAccordionTrigger>
                                    <AAccordionContent>
                                        <p class="text-muted-foreground">AuroraUI 是一个个人学习项目，使用 Vue 3 + TypeScript + Tailwind CSS 技术栈实现的现代化 UI 组件库。 专注于学习组件库开发的最佳实践，包括组件设计、测试策略、构建优化和文档编写。</p>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="item-2">
                                    <AAccordionTrigger class="text-lg font-medium"> 技术栈特点 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <ul class="text-muted-foreground space-y-2">
                                            <li>• Vue 3 Composition API - 现代 Vue 开发</li>
                                            <li>• TypeScript - 类型安全和开发体验</li>
                                            <li>• Tailwind CSS - 原子化 CSS 框架</li>
                                            <li>• Vite - 现代化构建工具</li>
                                            <li>• Vitest - 单元测试框架</li>
                                        </ul>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="item-3">
                                    <AAccordionTrigger class="text-lg font-medium"> 学习目标 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <p class="text-muted-foreground">这个项目旨在学习组件库设计的最佳实践，包括可复用组件开发、类型安全、测试策略、 构建优化和文档编写等各个方面。</p>
                                    </AAccordionContent>
                                </AAccordionItem>
                            </AAccordion>
                            <p class="text-sm text-muted-foreground mt-2">当前选中项: {{ accordionValue || '无' }}</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">多选模式</h3>
                            <AAccordion type="multiple" class="w-full max-w-2xl" @value-change="handleAccordionMultipleChange">
                                <AAccordionItem value="multi-1">
                                    <AAccordionTrigger class="text-lg font-medium"> 组件库特性 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <div class="text-muted-foreground space-y-2">
                                            <p>• 现代化设计语言</p>
                                            <p>• 完整的 TypeScript 支持</p>
                                            <p>• 响应式设计</p>
                                            <p>• 无障碍访问支持</p>
                                        </div>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="multi-2">
                                    <AAccordionTrigger class="text-lg font-medium"> 开发工具 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <div class="text-muted-foreground space-y-2">
                                            <p>• 热重载开发环境</p>
                                            <p>• 自动化测试</p>
                                            <p>• 代码质量检查</p>
                                            <p>• 自动化构建</p>
                                        </div>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="multi-3">
                                    <AAccordionTrigger class="text-lg font-medium"> 文档和示例 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <div class="text-muted-foreground space-y-2">
                                            <p>• 详细的 API 文档</p>
                                            <p>• 丰富的使用示例</p>
                                            <p>• 最佳实践指南</p>
                                            <p>• 在线演示环境</p>
                                        </div>
                                    </AAccordionContent>
                                </AAccordionItem>
                            </AAccordion>
                            <p class="text-sm text-muted-foreground mt-2">当前选中项: {{ accordionMultipleValue.length > 0 ? accordionMultipleValue.join(', ') : '无' }}</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">自定义样式</h3>
                            <AAccordion type="single" collapsible class="w-full max-w-2xl">
                                <AAccordionItem value="custom-1" class="border-primary/20">
                                    <AAccordionTrigger class="text-lg font-medium text-primary hover:text-primary/80"> 自定义主题色 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <p class="text-muted-foreground">这个手风琴项使用了自定义的主题色样式，包括边框颜色和文字颜色。</p>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="custom-2" class="border-secondary/20">
                                    <AAccordionTrigger class="text-lg font-medium text-secondary hover:text-secondary/80"> 次要主题色 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <p class="text-muted-foreground">这个手风琴项使用了次要主题色，展示不同的视觉层次。</p>
                                    </AAccordionContent>
                                </AAccordionItem>
                            </AAccordion>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">复杂内容示例</h3>
                            <AAccordion type="single" collapsible class="w-full max-w-3xl">
                                <AAccordionItem value="complex-1">
                                    <AAccordionTrigger class="text-lg font-medium"> 表单配置 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <div class="space-y-4">
                                            <div>
                                                <ALabel for="config-name">配置名称</ALabel>
                                                <AInput id="config-name" placeholder="请输入配置名称" class="mt-1" />
                                            </div>
                                            <div>
                                                <ALabel for="config-desc">配置描述</ALabel>
                                                <ATextarea id="config-desc" placeholder="请输入配置描述" class="mt-1" />
                                            </div>
                                            <div class="flex gap-2">
                                                <AButton size="sm">保存配置</AButton>
                                                <AButton variant="outline" size="sm">重置</AButton>
                                            </div>
                                        </div>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="complex-2">
                                    <AAccordionTrigger class="text-lg font-medium"> 数据统计 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="p-4 bg-muted rounded-lg">
                                                <div class="text-2xl font-bold text-primary">1,234</div>
                                                <div class="text-sm text-muted-foreground">总用户数</div>
                                            </div>
                                            <div class="p-4 bg-muted rounded-lg">
                                                <div class="text-2xl font-bold text-secondary">567</div>
                                                <div class="text-sm text-muted-foreground">活跃用户</div>
                                            </div>
                                        </div>
                                    </AAccordionContent>
                                </AAccordionItem>
                            </AAccordion>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">特殊状态示例</h3>
                            <AAccordion type="single" collapsible class="w-full max-w-2xl" default-value="default-open">
                                <AAccordionItem value="default-open">
                                    <AAccordionTrigger class="text-lg font-medium"> 默认展开的项目 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <p class="text-muted-foreground">这个手风琴项默认是展开状态，用户可以直接看到内容。</p>
                                    </AAccordionContent>
                                </AAccordionItem>
                                <AAccordionItem value="disabled-item" disabled>
                                    <AAccordionTrigger class="text-lg font-medium opacity-50"> 禁用的项目 </AAccordionTrigger>
                                    <AAccordionContent>
                                        <p class="text-muted-foreground">这个手风琴项被禁用了，用户无法点击展开。</p>
                                    </AAccordionContent>
                                </AAccordionItem>
                            </AAccordion>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">程序化控制示例</h3>
                            <div class="space-y-4">
                                <div class="flex flex-wrap gap-2">
                                    <AButton size="sm" @click="accordionValue = 'item-1'">展开第一项</AButton>
                                    <AButton size="sm" @click="accordionValue = 'item-2'">展开第二项</AButton>
                                    <AButton size="sm" @click="accordionValue = 'item-3'">展开第三项</AButton>
                                    <AButton size="sm" variant="outline" @click="accordionValue = undefined">全部折叠</AButton>
                                </div>
                                <AAccordion type="single" collapsible class="w-full max-w-2xl" v-model="accordionValue">
                                    <AAccordionItem value="item-1">
                                        <AAccordionTrigger class="text-lg font-medium"> 可控制的项 1 </AAccordionTrigger>
                                        <AAccordionContent>
                                            <p class="text-muted-foreground">这个手风琴项可以通过按钮程序化控制展开和折叠。</p>
                                        </AAccordionContent>
                                    </AAccordionItem>
                                    <AAccordionItem value="item-2">
                                        <AAccordionTrigger class="text-lg font-medium"> 可控制的项 2 </AAccordionTrigger>
                                        <AAccordionContent>
                                            <p class="text-muted-foreground">这个手风琴项也可以通过按钮程序化控制展开和折叠。</p>
                                        </AAccordionContent>
                                    </AAccordionItem>
                                    <AAccordionItem value="item-3">
                                        <AAccordionTrigger class="text-lg font-medium"> 可控制的项 3 </AAccordionTrigger>
                                        <AAccordionContent>
                                            <p class="text-muted-foreground">这个手风琴项同样可以通过按钮程序化控制展开和折叠。</p>
                                        </AAccordionContent>
                                    </AAccordionItem>
                                </AAccordion>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Alert 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Alert 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="space-y-4">
                                <AAlert variant="default">
                                    <AAlertTitle>提示信息</AAlertTitle>
                                    <AAlertDescription> 这是一个默认的提示框，用于显示重要信息。 </AAlertDescription>
                                </AAlert>

                                <AAlert variant="destructive">
                                    <AAlertTitle>错误信息</AAlertTitle>
                                    <AAlertDescription> 这是一个错误提示框，用于显示错误或警告信息。 </AAlertDescription>
                                </AAlert>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">动态显示</h3>
                            <div class="space-y-4">
                                <div class="flex gap-2">
                                    <AButton size="sm" @click="showAlertMessage('default')">显示普通提示</AButton>
                                    <AButton size="sm" variant="destructive" @click="showAlertMessage('destructive')">显示错误提示</AButton>
                                </div>

                                <div v-if="showAlert" class="transition-all duration-300">
                                    <AAlert :variant="alertType">
                                        <AAlertTitle>{{ alertType === 'destructive' ? '错误' : '提示' }}</AAlertTitle>
                                        <AAlertDescription>
                                            {{ alertType === 'destructive' ? '这是一个动态显示的错误提示！' : '这是一个动态显示的普通提示！' }}
                                        </AAlertDescription>
                                    </AAlert>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Badge 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Badge 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="flex flex-wrap items-center gap-4">
                                <div class="flex items-center gap-2">
                                    <span>通知</span>
                                    <ABadge>{{ badgeCount }}</ABadge>
                                </div>

                                <div class="flex items-center gap-2">
                                    <span>消息</span>
                                    <ABadge variant="secondary">新</ABadge>
                                </div>

                                <div class="flex items-center gap-2">
                                    <span>状态</span>
                                    <ABadge variant="destructive">错误</ABadge>
                                </div>

                                <div class="flex items-center gap-2">
                                    <span>成功</span>
                                    <ABadge variant="outline">完成</ABadge>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">交互控制</h3>
                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <span>当前计数: </span>
                                    <ABadge variant="default">{{ badgeCount }}</ABadge>
                                    <div class="flex gap-2">
                                        <AButton size="sm" @click="incrementBadge">增加</AButton>
                                        <AButton size="sm" variant="outline" @click="decrementBadge">减少</AButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同尺寸</h3>
                            <div class="flex flex-wrap items-center gap-4">
                                <div class="flex items-center gap-2">
                                    <span>小尺寸</span>
                                    <ABadge class="text-xs">小</ABadge>
                                </div>

                                <div class="flex items-center gap-2">
                                    <span>默认尺寸</span>
                                    <ABadge>默认</ABadge>
                                </div>

                                <div class="flex items-center gap-2">
                                    <span>大尺寸</span>
                                    <ABadge class="text-lg px-3 py-1">大</ABadge>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Avatar 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Avatar 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="flex flex-wrap items-center gap-4">
                                <AAvatar>
                                    <AAvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                                    <AAvatarFallback>CN</AAvatarFallback>
                                </AAvatar>

                                <AAvatar>
                                    <AAvatarFallback>AB</AAvatarFallback>
                                </AAvatar>

                                <AAvatar>
                                    <AAvatarImage src="https://invalid-url.com/avatar.png" alt="无效图片" />
                                    <AAvatarFallback>无效</AAvatarFallback>
                                </AAvatar>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同尺寸</h3>
                            <div class="flex flex-wrap items-center gap-4">
                                <AAvatar class="h-8 w-8">
                                    <AAvatarImage src="https://github.com/shadcn.png" alt="小头像" />
                                    <AAvatarFallback>小</AAvatarFallback>
                                </AAvatar>

                                <AAvatar class="h-12 w-12">
                                    <AAvatarImage src="https://github.com/shadcn.png" alt="默认头像" />
                                    <AAvatarFallback>默认</AAvatarFallback>
                                </AAvatar>

                                <AAvatar class="h-16 w-16">
                                    <AAvatarImage src="https://github.com/shadcn.png" alt="大头像" />
                                    <AAvatarFallback>大</AAvatarFallback>
                                </AAvatar>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">用户列表示例</h3>
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 p-3 border rounded-lg">
                                    <AAvatar>
                                        <AAvatarImage src="https://github.com/shadcn.png" alt="张三" />
                                        <AAvatarFallback>张三</AAvatarFallback>
                                    </AAvatar>
                                    <div>
                                        <div class="font-medium">张三</div>
                                        <div class="text-sm text-muted-foreground">前端开发工程师</div>
                                    </div>
                                    <ABadge class="ml-auto">在线</ABadge>
                                </div>

                                <div class="flex items-center gap-3 p-3 border rounded-lg">
                                    <AAvatar>
                                        <AAvatarFallback>李四</AAvatarFallback>
                                    </AAvatar>
                                    <div>
                                        <div class="font-medium">李四</div>
                                        <div class="text-sm text-muted-foreground">后端开发工程师</div>
                                    </div>
                                    <ABadge variant="secondary" class="ml-auto">离线</ABadge>
                                </div>

                                <div class="flex items-center gap-3 p-3 border rounded-lg">
                                    <AAvatar>
                                        <AAvatarImage src="https://github.com/vercel.png" alt="王五" />
                                        <AAvatarFallback>王五</AAvatarFallback>
                                    </AAvatar>
                                    <div>
                                        <div class="font-medium">王五</div>
                                        <div class="text-sm text-muted-foreground">UI/UX 设计师</div>
                                    </div>
                                    <ABadge variant="outline" class="ml-auto">忙碌</ABadge>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- AspectRatio 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">AspectRatio 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">不同比例</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h4 class="text-sm font-medium mb-2">16:9 比例</h4>
                                    <AAspectRatio :ratio="16 / 9" class="bg-muted rounded-md overflow-hidden">
                                        <div class="flex items-center justify-center h-full">
                                            <span class="text-muted-foreground">16:9</span>
                                        </div>
                                    </AAspectRatio>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium mb-2">4:3 比例</h4>
                                    <AAspectRatio :ratio="4 / 3" class="bg-muted rounded-md overflow-hidden">
                                        <div class="flex items-center justify-center h-full">
                                            <span class="text-muted-foreground">4:3</span>
                                        </div>
                                    </AAspectRatio>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium mb-2">1:1 比例</h4>
                                    <AAspectRatio :ratio="1" class="bg-muted rounded-md overflow-hidden">
                                        <div class="flex items-center justify-center h-full">
                                            <span class="text-muted-foreground">1:1</span>
                                        </div>
                                    </AAspectRatio>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">实际应用示例</h3>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="text-sm font-medium mb-2">视频播放器</h4>
                                    <AAspectRatio :ratio="16 / 9" class="bg-black rounded-lg overflow-hidden">
                                        <div class="flex items-center justify-center h-full text-white">
                                            <div class="text-center">
                                                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                                <p>视频播放器</p>
                                            </div>
                                        </div>
                                    </AAspectRatio>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium mb-2">图片卡片</h4>
                                    <AAspectRatio :ratio="4 / 3" class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                                        <div class="flex items-center justify-center h-full text-white">
                                            <div class="text-center">
                                                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                                    </svg>
                                                </div>
                                                <p>图片占位符</p>
                                            </div>
                                        </div>
                                    </AAspectRatio>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Calendar 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Calendar 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="space-y-4">
                                <ACard class="w-fit">
                                    <ACardHeader>
                                        <ACardTitle>日期选择器</ACardTitle>
                                        <ACardDescription>选择一个日期</ACardDescription>
                                    </ACardHeader>
                                    <ACardContent>
                                        <ACalendar v-model="selectedDate as any" @update:model-value="handleDateSelect" class="rounded-md border" />
                                    </ACardContent>
                                </ACard>

                                <div v-if="selectedDate" class="p-4 bg-muted rounded-lg">
                                    <p class="text-sm text-muted-foreground">选择的日期: {{ selectedDate }}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">带导航控制的日历</h3>
                            <div class="space-y-4">
                                <div class="flex items-center gap-2">
                                    <AButton size="sm" @click="goToPrevMonth">上个月</AButton>
                                    <AButton size="sm" @click="goToToday">今天</AButton>
                                    <AButton size="sm" @click="goToNextMonth">下个月</AButton>
                                </div>

                                <ACard class="w-fit">
                                    <ACardContent class="p-4">
                                        <ACalendar v-model="calendarValue as any" class="rounded-md border" />
                                    </ACardContent>
                                </ACard>

                                <div class="p-4 bg-muted rounded-lg">
                                    <p class="text-sm text-muted-foreground">当前月份: {{ calendarValue }}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">不同尺寸</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 class="text-sm font-medium mb-2">小尺寸</h4>
                                    <ACard class="w-fit">
                                        <ACardContent class="p-2">
                                            <ACalendar class="rounded-md border scale-75 origin-top-left" />
                                        </ACardContent>
                                    </ACard>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium mb-2">默认尺寸</h4>
                                    <ACard class="w-fit">
                                        <ACardContent class="p-4">
                                            <ACalendar class="rounded-md border" />
                                        </ACardContent>
                                    </ACard>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">表单集成示例</h3>
                            <ACard class="max-w-md">
                                <ACardHeader>
                                    <ACardTitle>预约时间</ACardTitle>
                                    <ACardDescription>请选择您的预约日期</ACardDescription>
                                </ACardHeader>
                                <ACardContent class="space-y-4">
                                    <div>
                                        <ALabel>选择日期</ALabel>
                                        <ACalendar v-model="selectedDate as any" class="rounded-md border mt-2" />
                                    </div>

                                    <div v-if="selectedDate" class="p-3 bg-muted rounded-lg">
                                        <p class="text-sm font-medium">已选择日期</p>
                                        <p class="text-sm text-muted-foreground">
                                            {{ selectedDate }}
                                        </p>
                                    </div>

                                    <div class="flex gap-2 pt-2">
                                        <AButton size="sm" :disabled="!selectedDate">确认预约</AButton>
                                        <AButton size="sm" variant="outline" @click="selectedDate = undefined">清除选择</AButton>
                                    </div>
                                </ACardContent>
                            </ACard>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">自定义样式</h3>
                            <ACard class="w-fit">
                                <ACardContent class="p-4">
                                    <ACalendar class="rounded-lg border-2 border-primary/20 shadow-lg" />
                                </ACardContent>
                            </ACard>
                        </div>
                    </div>
                </section>

                <!-- Carousel 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Carousel 组件测试</h2>

                    <div class="space-y-8">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法 - 水平轮播</h3>
                            <div class="max-w-xs mx-auto">
                                <ACarousel class="w-full">
                                    <ACarouselContent>
                                        <ACarouselItem v-for="i in 5" :key="i">
                                            <div class="p-1">
                                                <ACard>
                                                    <ACardContent class="flex aspect-square items-center justify-center p-6">
                                                        <span class="text-4xl font-semibold">{{ i }}</span>
                                                    </ACardContent>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>
                                    <ACarouselPrevious />
                                    <ACarouselNext />
                                </ACarousel>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">垂直轮播</h3>
                            <div class="max-w-xs mx-auto">
                                <ACarousel orientation="vertical" class="w-full max-w-xs">
                                    <ACarouselContent class="-mt-1 h-[200px]">
                                        <ACarouselItem v-for="i in 5" :key="i" class="pt-1 md:basis-1/2">
                                            <div class="p-1">
                                                <ACard>
                                                    <ACardContent class="flex items-center justify-center p-6">
                                                        <span class="text-3xl font-semibold">{{ i }}</span>
                                                    </ACardContent>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>
                                    <ACarouselPrevious />
                                    <ACarouselNext />
                                </ACarousel>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">图片轮播示例</h3>
                            <div class="max-w-2xl mx-auto">
                                <ACarousel class="w-full">
                                    <ACarouselContent>
                                        <ACarouselItem v-for="i in 4" :key="i">
                                            <div class="p-1">
                                                <ACard>
                                                    <ACardContent class="p-0">
                                                        <AAspectRatio :ratio="16 / 9" class="bg-muted">
                                                            <div class="flex items-center justify-center h-full">
                                                                <div class="text-center">
                                                                    <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                                                                        <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                                                        </svg>
                                                                    </div>
                                                                    <p class="text-muted-foreground">图片 {{ i }}</p>
                                                                </div>
                                                            </div>
                                                        </AAspectRatio>
                                                    </ACardContent>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>
                                    <ACarouselPrevious />
                                    <ACarouselNext />
                                </ACarousel>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">多项展示 - 一次显示 3 个</h3>
                            <div class="max-w-4xl mx-auto">
                                <ACarousel :opts="{ align: 'start' }" class="w-full">
                                    <ACarouselContent>
                                        <ACarouselItem v-for="i in 10" :key="i" class="md:basis-1/2 lg:basis-1/3">
                                            <div class="p-1">
                                                <ACard>
                                                    <ACardContent class="flex aspect-square items-center justify-center p-6">
                                                        <span class="text-2xl font-semibold">{{ i }}</span>
                                                    </ACardContent>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>
                                    <ACarouselPrevious />
                                    <ACarouselNext />
                                </ACarousel>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">产品卡片轮播</h3>
                            <div class="max-w-5xl mx-auto">
                                <ACarousel :opts="{ align: 'start', loop: true }" class="w-full">
                                    <ACarouselContent>
                                        <ACarouselItem v-for="i in 6" :key="i" class="md:basis-1/2 lg:basis-1/3">
                                            <div class="p-1">
                                                <ACard>
                                                    <ACardHeader>
                                                        <AAspectRatio :ratio="16 / 9" class="bg-muted rounded-md">
                                                            <div class="flex items-center justify-center h-full">
                                                                <span class="text-4xl text-muted-foreground">{{ i }}</span>
                                                            </div>
                                                        </AAspectRatio>
                                                    </ACardHeader>
                                                    <ACardContent>
                                                        <ACardTitle class="text-lg">产品 {{ i }}</ACardTitle>
                                                        <ACardDescription class="mt-2">这是产品 {{ i }} 的简要描述信息</ACardDescription>
                                                    </ACardContent>
                                                    <ACardFooter class="gap-2">
                                                        <AButton size="sm" class="w-full">查看详情</AButton>
                                                    </ACardFooter>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>
                                    <ACarouselPrevious />
                                    <ACarouselNext />
                                </ACarousel>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">自定义样式和控制</h3>
                            <div class="max-w-xl mx-auto">
                                <ACarousel v-slot="{ scrollPrev, scrollNext, canScrollPrev, canScrollNext }" :opts="{ loop: false }" class="w-full">
                                    <ACarouselContent>
                                        <ACarouselItem v-for="i in 5" :key="i">
                                            <div class="p-1">
                                                <ACard class="border-2 border-primary/20">
                                                    <ACardContent class="flex aspect-video items-center justify-center p-6">
                                                        <div class="text-center">
                                                            <span class="text-5xl font-bold text-primary">{{ i }}</span>
                                                            <p class="text-sm text-muted-foreground mt-2">幻灯片 {{ i }}</p>
                                                        </div>
                                                    </ACardContent>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>

                                    <!-- 自定义控制按钮 -->
                                    <div class="flex items-center justify-center gap-2 mt-4">
                                        <AButton size="sm" variant="outline" :disabled="!canScrollPrev" @click="scrollPrev()">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                            </svg>
                                            上一张
                                        </AButton>
                                        <AButton size="sm" variant="outline" :disabled="!canScrollNext" @click="scrollNext()">
                                            下一张
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </AButton>
                                    </div>
                                </ACarousel>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">用户评价轮播</h3>
                            <div class="max-w-3xl mx-auto">
                                <ACarousel :opts="{ loop: true }" class="w-full">
                                    <ACarouselContent>
                                        <ACarouselItem v-for="i in 4" :key="i">
                                            <div class="p-1">
                                                <ACard>
                                                    <ACardHeader>
                                                        <div class="flex items-center gap-4">
                                                            <AAvatar>
                                                                <AAvatarFallback>U{{ i }}</AAvatarFallback>
                                                            </AAvatar>
                                                            <div>
                                                                <ACardTitle class="text-base">用户 {{ i }}</ACardTitle>
                                                                <div class="flex gap-1 mt-1">
                                                                    <svg v-for="star in 5" :key="star" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ACardHeader>
                                                    <ACardContent>
                                                        <p class="text-muted-foreground">"这是一个非常棒的产品！使用体验超出了我的预期，强烈推荐给大家。"</p>
                                                    </ACardContent>
                                                </ACard>
                                            </div>
                                        </ACarouselItem>
                                    </ACarouselContent>
                                    <ACarouselPrevious />
                                    <ACarouselNext />
                                </ACarousel>
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
