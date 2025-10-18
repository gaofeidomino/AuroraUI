<script setup lang="ts">
import { ref } from 'vue'
import { CalendarDate } from '@internationalized/date'
import type { DateValue } from 'reka-ui'
import {
    AButton,
    ACard,
    ACardContent,
    ACardDescription,
    ACardFooter,
    ACardHeader,
    ACardTitle,
    AInput,
    ATextarea,
    ALabel,
    AAccordion,
    AAccordionItem,
    AAccordionTrigger,
    AAccordionContent,
    AAlert,
    AAlertDescription,
    AAlertTitle,
    ABadge,
    AAvatar,
    AAvatarFallback,
    AAvatarImage,
    AAspectRatio,
    ACalendar,
    ACarousel,
    ACarouselContent,
    ACarouselItem,
    ACarouselNext,
    ACarouselPrevious,
    ACheckbox,
    ACollapsible,
    ACollapsibleContent,
    ACollapsibleTrigger,
    ACombobox,
    AComboboxInput,
    AComboboxItem,
    ACommand,
    ACommandInput,
    ACommandList,
    ACommandEmpty,
    ACommandGroup,
    ACommandItem,
    AContextMenu,
    AContextMenuContent,
    AContextMenuItem,
    AContextMenuTrigger,
    ADialog,
    ADialogContent,
    ADialogDescription,
    ADialogFooter,
    ADialogHeader,
    ADialogTitle,
    ADialogTrigger,
    ADrawer,
    ADrawerContent,
    ADrawerDescription,
    ADrawerHeader,
    ADrawerTitle,
    ADrawerTrigger,
    ADropdownMenu,
    ADropdownMenuContent,
    ADropdownMenuItem,
    ADropdownMenuTrigger,
    AMenubar,
    AMenubarContent,
    AMenubarItem,
    AMenubarMenu,
    AMenubarTrigger,
    AMenubarSeparator,
    ANavigationMenu,
    ANavigationMenuContent,
    ANavigationMenuItem,
    ANavigationMenuLink,
    ANavigationMenuList,
    ANavigationMenuTrigger,
    AForm,
    AFormControl,
    AFormDescription,
    AFormFieldArray,
    AFormItem,
    AFormLabel,
    AFormMessage,
    AHoverCard,
    AHoverCardContent,
    AHoverCardTrigger,
} from './components'

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

// Checkbox 相关状态
const checkboxValue = ref(false)
const checkboxGroup = ref<string[]>([])

// Combobox 相关状态
const comboboxValue = ref<string | undefined>(undefined)
const comboboxOpen = ref(false)

// Dialog 相关状态
const dialogOpen = ref(false)

// Drawer 相关状态
const drawerOpen = ref(false)

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

                <!-- Checkbox 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Checkbox 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="space-y-4">
                                <div class="flex items-center space-x-2">
                                    <ACheckbox id="terms" v-model:checked="checkboxValue" />
                                    <ALabel for="terms">我同意服务条款</ALabel>
                                </div>
                                <p class="text-sm text-muted-foreground">当前状态: {{ checkboxValue ? '选中' : '未选中' }}</p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">多选组</h3>
                            <div class="space-y-2">
                                <div class="flex items-center space-x-2">
                                    <ACheckbox id="option1" value="option1" v-model:checked="checkboxGroup" />
                                    <ALabel for="option1">选项 1</ALabel>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <ACheckbox id="option2" value="option2" v-model:checked="checkboxGroup" />
                                    <ALabel for="option2">选项 2</ALabel>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <ACheckbox id="option3" value="option3" v-model:checked="checkboxGroup" />
                                    <ALabel for="option3">选项 3</ALabel>
                                </div>
                                <p class="text-sm text-muted-foreground">选中项: {{ checkboxGroup.join(', ') || '无' }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Collapsible 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Collapsible 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <ACollapsible class="w-full max-w-md">
                                <ACollapsibleTrigger class="flex items-center justify-between w-full px-4 py-2 text-left bg-muted rounded-md hover:bg-muted/80">
                                    <span>点击展开/折叠内容</span>
                                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </ACollapsibleTrigger>
                                <ACollapsibleContent class="px-4 py-2">
                                    <p class="text-muted-foreground">这是可折叠的内容区域。你可以在这里放置任何内容。</p>
                                </ACollapsibleContent>
                            </ACollapsible>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">复杂内容</h3>
                            <ACollapsible class="w-full max-w-lg">
                                <ACollapsibleTrigger class="flex items-center justify-between w-full px-4 py-3 text-left bg-primary/10 rounded-lg hover:bg-primary/20">
                                    <span class="font-medium">用户设置</span>
                                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </ACollapsibleTrigger>
                                <ACollapsibleContent class="px-4 py-4">
                                    <div class="space-y-4">
                                        <div>
                                            <ALabel for="username">用户名</ALabel>
                                            <AInput id="username" placeholder="请输入用户名" class="mt-1" />
                                        </div>
                                        <div>
                                            <ALabel for="email">邮箱</ALabel>
                                            <AInput id="email" type="email" placeholder="请输入邮箱" class="mt-1" />
                                        </div>
                                        <div class="flex gap-2">
                                            <AButton size="sm">保存</AButton>
                                            <AButton size="sm" variant="outline">取消</AButton>
                                        </div>
                                    </div>
                                </ACollapsibleContent>
                            </ACollapsible>
                        </div>
                    </div>
                </section>

                <!-- Combobox 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Combobox 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="w-full max-w-sm">
                                <ACombobox v-model:open="comboboxOpen" v-model:model-value="comboboxValue">
                                    <AComboboxInput placeholder="搜索框架..." />
                                    <div class="p-1">
                                        <AComboboxItem value="nextjs">Next.js</AComboboxItem>
                                        <AComboboxItem value="sveltekit">SvelteKit</AComboboxItem>
                                        <AComboboxItem value="astro">Astro</AComboboxItem>
                                        <AComboboxItem value="nuxt">Nuxt</AComboboxItem>
                                        <AComboboxItem value="remix">Remix</AComboboxItem>
                                    </div>
                                </ACombobox>
                                <p class="text-sm text-muted-foreground mt-2">选中值: {{ comboboxValue || '无' }}</p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">编程语言选择</h3>
                            <div class="w-full max-w-sm">
                                <ACombobox>
                                    <AComboboxInput placeholder="选择编程语言..." />
                                    <div class="p-1">
                                        <AComboboxItem value="javascript">JavaScript</AComboboxItem>
                                        <AComboboxItem value="typescript">TypeScript</AComboboxItem>
                                        <AComboboxItem value="python">Python</AComboboxItem>
                                        <AComboboxItem value="java">Java</AComboboxItem>
                                        <AComboboxItem value="rust">Rust</AComboboxItem>
                                        <AComboboxItem value="go">Go</AComboboxItem>
                                    </div>
                                </ACombobox>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Command 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Command 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="w-full max-w-sm">
                                <ACommand class="rounded-lg border shadow-md">
                                    <ACommandInput placeholder="输入命令或搜索..." />
                                    <ACommandList>
                                        <ACommandEmpty>未找到结果。</ACommandEmpty>
                                        <ACommandGroup heading="建议">
                                            <ACommandItem value="calendar">Calendar</ACommandItem>
                                            <ACommandItem value="search-emoji">Search Emoji</ACommandItem>
                                            <ACommandItem value="calculator">Calculator</ACommandItem>
                                        </ACommandGroup>
                                        <ACommandGroup heading="设置">
                                            <ACommandItem value="profile">Profile</ACommandItem>
                                            <ACommandItem value="billing">Billing</ACommandItem>
                                            <ACommandItem value="settings">Settings</ACommandItem>
                                        </ACommandGroup>
                                    </ACommandList>
                                </ACommand>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Dialog 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Dialog 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <ADialog v-model:open="dialogOpen">
                                <ADialogTrigger as-child>
                                    <AButton variant="outline">打开对话框</AButton>
                                </ADialogTrigger>
                                <ADialogContent class="sm:max-w-[425px]">
                                    <ADialogHeader>
                                        <ADialogTitle>编辑个人资料</ADialogTitle>
                                        <ADialogDescription> 在这里更新您的个人信息。点击保存时您的更改将被保存。 </ADialogDescription>
                                    </ADialogHeader>
                                    <div class="grid gap-4 py-4">
                                        <div class="grid grid-cols-4 items-center gap-4">
                                            <ALabel for="name" class="text-right">姓名</ALabel>
                                            <AInput id="name" value="张三" class="col-span-3" />
                                        </div>
                                        <div class="grid grid-cols-4 items-center gap-4">
                                            <ALabel for="username" class="text-right">用户名</ALabel>
                                            <AInput id="username" value="@zhangsan" class="col-span-3" />
                                        </div>
                                    </div>
                                    <ADialogFooter>
                                        <AButton type="submit">保存更改</AButton>
                                    </ADialogFooter>
                                </ADialogContent>
                            </ADialog>
                        </div>
                    </div>
                </section>

                <!-- Drawer 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Drawer 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <ADrawer v-model:open="drawerOpen">
                                <ADrawerTrigger as-child>
                                    <AButton variant="outline">打开抽屉</AButton>
                                </ADrawerTrigger>
                                <ADrawerContent>
                                    <ADrawerHeader class="text-left">
                                        <ADrawerTitle>移动端菜单</ADrawerTitle>
                                        <ADrawerDescription> 这是一个移动端友好的抽屉组件。 </ADrawerDescription>
                                    </ADrawerHeader>
                                    <div class="px-4 pb-4">
                                        <div class="space-y-4">
                                            <div class="flex items-center space-x-2">
                                                <AButton variant="ghost" class="w-full justify-start">
                                                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                    </svg>
                                                    首页
                                                </AButton>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <AButton variant="ghost" class="w-full justify-start">
                                                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    个人资料
                                                </AButton>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <AButton variant="ghost" class="w-full justify-start">
                                                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    设置
                                                </AButton>
                                            </div>
                                        </div>
                                    </div>
                                </ADrawerContent>
                            </ADrawer>
                        </div>
                    </div>
                </section>

                <!-- DropdownMenu 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">DropdownMenu 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <ADropdownMenu>
                                <ADropdownMenuTrigger as-child>
                                    <AButton variant="outline">打开菜单</AButton>
                                </ADropdownMenuTrigger>
                                <ADropdownMenuContent class="w-56">
                                    <ADropdownMenuItem>新建</ADropdownMenuItem>
                                    <ADropdownMenuItem>复制</ADropdownMenuItem>
                                    <ADropdownMenuItem>粘贴</ADropdownMenuItem>
                                    <ADropdownMenuItem>删除</ADropdownMenuItem>
                                </ADropdownMenuContent>
                            </ADropdownMenu>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">用户菜单</h3>
                            <ADropdownMenu>
                                <ADropdownMenuTrigger as-child>
                                    <AButton variant="ghost" class="relative h-8 w-8 rounded-full">
                                        <AAvatar class="h-8 w-8">
                                            <AAvatarFallback>用户</AAvatarFallback>
                                        </AAvatar>
                                    </AButton>
                                </ADropdownMenuTrigger>
                                <ADropdownMenuContent class="w-56" align="end" force-mount>
                                    <div class="flex items-center justify-start gap-2 p-2">
                                        <div class="flex flex-col space-y-1 leading-none">
                                            <p class="font-medium">用户名</p>
                                            <p class="w-[200px] truncate text-sm text-muted-foreground">user@example.com</p>
                                        </div>
                                    </div>
                                    <div class="my-1 h-px bg-border" />
                                    <ADropdownMenuItem>个人资料</ADropdownMenuItem>
                                    <ADropdownMenuItem>设置</ADropdownMenuItem>
                                    <ADropdownMenuItem>帮助</ADropdownMenuItem>
                                    <div class="my-1 h-px bg-border" />
                                    <ADropdownMenuItem>登出</ADropdownMenuItem>
                                </ADropdownMenuContent>
                            </ADropdownMenu>
                        </div>
                    </div>
                </section>

                <!-- ContextMenu 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">ContextMenu 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <p class="text-sm text-muted-foreground mb-4">在下面的卡片上右键点击查看上下文菜单</p>

                            <AContextMenu>
                                <AContextMenuTrigger as-child>
                                    <ACard class="w-64 h-32 flex items-center justify-center cursor-context-menu">
                                        <ACardContent class="text-center">
                                            <p class="text-lg font-medium">右键点击我</p>
                                            <p class="text-sm text-muted-foreground">查看上下文菜单</p>
                                        </ACardContent>
                                    </ACard>
                                </AContextMenuTrigger>
                                <AContextMenuContent>
                                    <AContextMenuItem>复制</AContextMenuItem>
                                    <AContextMenuItem>粘贴</AContextMenuItem>
                                    <AContextMenuItem>剪切</AContextMenuItem>
                                    <div class="my-1 h-px bg-border" />
                                    <AContextMenuItem>重命名</AContextMenuItem>
                                    <AContextMenuItem>删除</AContextMenuItem>
                                </AContextMenuContent>
                            </AContextMenu>
                        </div>
                    </div>
                </section>

                <!-- Menubar 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Menubar 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="w-full max-w-2xl">
                                <AMenubar>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>文件</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>新建</AMenubarItem>
                                            <AMenubarItem>打开</AMenubarItem>
                                            <AMenubarItem>保存</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>退出</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>编辑</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>撤销</AMenubarItem>
                                            <AMenubarItem>重做</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>复制</AMenubarItem>
                                            <AMenubarItem>粘贴</AMenubarItem>
                                            <AMenubarItem>剪切</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>视图</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>放大</AMenubarItem>
                                            <AMenubarItem>缩小</AMenubarItem>
                                            <AMenubarItem>重置缩放</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>全屏</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>帮助</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>帮助文档</AMenubarItem>
                                            <AMenubarItem>快捷键</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>关于</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                </AMenubar>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">应用程序菜单示例</h3>
                            <div class="w-full max-w-3xl">
                                <AMenubar>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>应用</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>关于应用</AMenubarItem>
                                            <AMenubarItem>偏好设置</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>隐藏应用</AMenubarItem>
                                            <AMenubarItem>隐藏其他</AMenubarItem>
                                            <AMenubarItem>显示全部</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>退出</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>项目</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>新建项目</AMenubarItem>
                                            <AMenubarItem>打开项目</AMenubarItem>
                                            <AMenubarItem>最近项目</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>项目设置</AMenubarItem>
                                            <AMenubarItem>项目信息</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>工具</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>代码格式化</AMenubarItem>
                                            <AMenubarItem>语法检查</AMenubarItem>
                                            <AMenubarItem>包管理</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>终端</AMenubarItem>
                                            <AMenubarItem>调试器</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger>窗口</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>最小化</AMenubarItem>
                                            <AMenubarItem>缩放</AMenubarItem>
                                            <AMenubarSeparator />
                                            <AMenubarItem>开发工具</AMenubarItem>
                                            <AMenubarItem>控制台</AMenubarItem>
                                            <AMenubarItem>网络监控</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                </AMenubar>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">自定义样式</h3>
                            <div class="w-full max-w-2xl">
                                <AMenubar class="border-primary/20 bg-primary/5">
                                    <AMenubarMenu>
                                        <AMenubarTrigger class="text-primary font-medium">自定义</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>主题设置</AMenubarItem>
                                            <AMenubarItem>布局配置</AMenubarItem>
                                            <AMenubarItem>插件管理</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                    <AMenubarMenu>
                                        <AMenubarTrigger class="text-secondary font-medium">高级</AMenubarTrigger>
                                        <AMenubarContent>
                                            <AMenubarItem>高级设置</AMenubarItem>
                                            <AMenubarItem>开发者选项</AMenubarItem>
                                            <AMenubarItem>实验性功能</AMenubarItem>
                                        </AMenubarContent>
                                    </AMenubarMenu>
                                </AMenubar>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- NavigationMenu 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">NavigationMenu 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="w-full max-w-4xl">
                                <ANavigationMenu>
                                    <ANavigationMenuList>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuTrigger>产品</ANavigationMenuTrigger>
                                            <ANavigationMenuContent>
                                                <div class="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                                                    <div class="row-span-3">
                                                        <ACard>
                                                            <ACardHeader>
                                                                <ACardTitle>产品概览</ACardTitle>
                                                                <ACardDescription>了解我们的产品系列</ACardDescription>
                                                            </ACardHeader>
                                                            <ACardContent>
                                                                <p class="text-sm text-muted-foreground">从基础功能到高级特性，我们提供完整的产品解决方案。</p>
                                                            </ACardContent>
                                                        </ACard>
                                                    </div>
                                                    <div class="grid gap-2">
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-2 h-2 bg-primary rounded-full"></div>
                                                                    <span class="font-medium">核心产品</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">主要功能模块</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-2 h-2 bg-secondary rounded-full"></div>
                                                                    <span class="font-medium">扩展功能</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">高级特性</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                    </div>
                                                </div>
                                            </ANavigationMenuContent>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuTrigger>解决方案</ANavigationMenuTrigger>
                                            <ANavigationMenuContent>
                                                <div class="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                                                    <div class="grid gap-2">
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                    <span class="font-medium">企业解决方案</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">为企业量身定制</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                                    <span class="font-medium">个人解决方案</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">个人用户首选</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                                    <span class="font-medium">开发者工具</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">开发人员专用</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                    </div>
                                                </div>
                                            </ANavigationMenuContent>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2">
                                                    <span class="font-medium">定价</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2">
                                                    <span class="font-medium">文档</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2">
                                                    <span class="font-medium">支持</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                    </ANavigationMenuList>
                                </ANavigationMenu>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">网站导航示例</h3>
                            <div class="w-full max-w-5xl">
                                <ANavigationMenu>
                                    <ANavigationMenuList>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuTrigger>服务</ANavigationMenuTrigger>
                                            <ANavigationMenuContent>
                                                <div class="grid gap-3 p-6 w-[500px] md:w-[600px] lg:w-[700px]">
                                                    <div class="row-span-2">
                                                        <ACard class="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                                                            <ACardHeader>
                                                                <ACardTitle class="text-primary">我们的服务</ACardTitle>
                                                                <ACardDescription> 提供全方位的技术服务和解决方案 </ACardDescription>
                                                            </ACardHeader>
                                                            <ACardContent>
                                                                <p class="text-sm text-muted-foreground">从咨询到实施，从维护到优化，我们提供完整的服务链条。</p>
                                                            </ACardContent>
                                                        </ACard>
                                                    </div>
                                                    <div class="grid grid-cols-2 gap-2">
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4 hover:bg-accent/50 transition-colors">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                                                        <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                                        </svg>
                                                                    </div>
                                                                    <span class="font-medium">咨询</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">专业咨询</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4 hover:bg-accent/50 transition-colors">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                                                                        <svg class="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                    </div>
                                                                    <span class="font-medium">实施</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">项目实施</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4 hover:bg-accent/50 transition-colors">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                                                        <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                        </svg>
                                                                    </div>
                                                                    <span class="font-medium">维护</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">系统维护</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4 hover:bg-accent/50 transition-colors">
                                                                <div class="flex items-center gap-2">
                                                                    <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                                                        <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                        </svg>
                                                                    </div>
                                                                    <span class="font-medium">优化</span>
                                                                </div>
                                                                <p class="text-sm text-muted-foreground mt-1">性能优化</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                    </div>
                                                </div>
                                            </ANavigationMenuContent>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuTrigger>公司</ANavigationMenuTrigger>
                                            <ANavigationMenuContent>
                                                <div class="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                                                    <div class="grid gap-2">
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <span class="font-medium">关于我们</span>
                                                                <p class="text-sm text-muted-foreground mt-1">了解我们的故事</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <span class="font-medium">团队介绍</span>
                                                                <p class="text-sm text-muted-foreground mt-1">认识我们的团队</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <span class="font-medium">新闻动态</span>
                                                                <p class="text-sm text-muted-foreground mt-1">最新资讯</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                        <ANavigationMenuLink>
                                                            <ACard class="p-4">
                                                                <span class="font-medium">加入我们</span>
                                                                <p class="text-sm text-muted-foreground mt-1">招聘信息</p>
                                                            </ACard>
                                                        </ANavigationMenuLink>
                                                    </div>
                                                </div>
                                            </ANavigationMenuContent>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2">
                                                    <span class="font-medium">联系我们</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2">
                                                    <span class="font-medium">登录</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                    </ANavigationMenuList>
                                </ANavigationMenu>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">简洁导航</h3>
                            <div class="w-full max-w-3xl">
                                <ANavigationMenu>
                                    <ANavigationMenuList>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2 hover:bg-accent/50 transition-colors">
                                                    <span class="font-medium">首页</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2 hover:bg-accent/50 transition-colors">
                                                    <span class="font-medium">产品</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2 hover:bg-accent/50 transition-colors">
                                                    <span class="font-medium">服务</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2 hover:bg-accent/50 transition-colors">
                                                    <span class="font-medium">关于</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                        <ANavigationMenuItem>
                                            <ANavigationMenuLink>
                                                <ACard class="px-4 py-2 hover:bg-accent/50 transition-colors">
                                                    <span class="font-medium">联系</span>
                                                </ACard>
                                            </ANavigationMenuLink>
                                        </ANavigationMenuItem>
                                    </ANavigationMenuList>
                                </ANavigationMenu>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Form 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">Form 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础表单用法</h3>
                            <div class="w-full max-w-md">
                                <AForm>
                                    <AFormItem>
                                        <AFormLabel>用户名</AFormLabel>
                                        <AFormControl>
                                            <AInput placeholder="请输入用户名" />
                                        </AFormControl>
                                        <AFormDescription>
                                            请输入您的用户名，长度在3-20个字符之间
                                        </AFormDescription>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <AFormLabel>邮箱</AFormLabel>
                                        <AFormControl>
                                            <AInput type="email" placeholder="请输入邮箱地址" />
                                        </AFormControl>
                                        <AFormDescription>
                                            请输入有效的邮箱地址
                                        </AFormDescription>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <AFormLabel>密码</AFormLabel>
                                        <AFormControl>
                                            <AInput type="password" placeholder="请输入密码" />
                                        </AFormControl>
                                        <AFormDescription>
                                            密码长度至少8个字符
                                        </AFormDescription>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <AFormLabel>确认密码</AFormLabel>
                                        <AFormControl>
                                            <AInput type="password" placeholder="请再次输入密码" />
                                        </AFormControl>
                                        <AFormMessage />
                                    </AFormItem>

                                    <div class="flex gap-2 pt-4">
                                        <AButton type="submit" class="w-full">注册</AButton>
                                        <AButton variant="outline" class="w-full">重置</AButton>
                                    </div>
                                </AForm>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">联系表单</h3>
                            <div class="w-full max-w-lg">
                                <AForm>
                                    <AFormItem>
                                        <AFormLabel>姓名</AFormLabel>
                                        <AFormControl>
                                            <AInput placeholder="请输入您的姓名" />
                                        </AFormControl>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <AFormLabel>邮箱</AFormLabel>
                                        <AFormControl>
                                            <AInput type="email" placeholder="请输入您的邮箱" />
                                        </AFormControl>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <AFormLabel>主题</AFormLabel>
                                        <AFormControl>
                                            <AInput placeholder="请输入邮件主题" />
                                        </AFormControl>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <AFormLabel>消息内容</AFormLabel>
                                        <AFormControl>
                                            <ATextarea placeholder="请输入您的消息内容..." class="min-h-24" />
                                        </AFormControl>
                                        <AFormDescription>
                                            请详细描述您的问题或建议
                                        </AFormDescription>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormItem>
                                        <div class="flex items-center space-x-2">
                                            <ACheckbox id="agree" />
                                            <ALabel for="agree">我同意服务条款和隐私政策</ALabel>
                                        </div>
                                        <AFormMessage />
                                    </AFormItem>

                                    <div class="flex gap-2 pt-4">
                                        <AButton type="submit">发送消息</AButton>
                                        <AButton variant="outline">取消</AButton>
                                    </div>
                                </AForm>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">动态表单字段</h3>
                            <div class="w-full max-w-2xl">
                                <AForm>
                                    <AFormItem>
                                        <AFormLabel>项目名称</AFormLabel>
                                        <AFormControl>
                                            <AInput placeholder="请输入项目名称" />
                                        </AFormControl>
                                        <AFormMessage />
                                    </AFormItem>

                                    <AFormFieldArray name="tags">
                                        <template #default="{ fields, append, remove }">
                                            <AFormItem>
                                                <AFormLabel>标签</AFormLabel>
                                                <div class="space-y-2">
                                                    <div v-for="(field, index) in fields" :key="field.key" class="flex gap-2">
                                                        <AFormControl>
                                                            <AInput :placeholder="`标签 ${index + 1}`" />
                                                        </AFormControl>
                                                        <AButton
                                                            type="button"
                                                            variant="outline"
                                                            size="icon"
                                                            @click="remove(index)"
                                                        >
                                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </AButton>
                                                    </div>
                                                </div>
                                                <AFormDescription>
                                                    为您的项目添加相关标签
                                                </AFormDescription>
                                                <AFormMessage />
                                            </AFormItem>
                                            <AButton
                                                type="button"
                                                variant="outline"
                                                @click="append('')"
                                                class="mt-2"
                                            >
                                                添加标签
                                            </AButton>
                                        </template>
                                    </AFormFieldArray>

                                    <div class="flex gap-2 pt-4">
                                        <AButton type="submit">保存项目</AButton>
                                        <AButton variant="outline">预览</AButton>
                                    </div>
                                </AForm>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- HoverCard 组件测试 -->
                <section class="border rounded-lg p-6 bg-card">
                    <h2 class="text-xl font-semibold mb-4 text-card-foreground">HoverCard 组件测试</h2>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium mb-3">基础用法</h3>
                            <div class="flex flex-wrap gap-6">
                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="link">@nextjs</AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80">
                                        <div class="flex justify-between space-x-4">
                                            <AAvatar>
                                                <AAvatarFallback>JS</AAvatarFallback>
                                            </AAvatar>
                                            <div class="space-y-1">
                                                <h4 class="text-sm font-semibold">@nextjs</h4>
                                                <p class="text-sm">
                                                    The React Framework for the Web.
                                                </p>
                                                <div class="flex items-center pt-2">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                    <span class="text-xs text-muted-foreground">
                                                        20.1k stars
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>

                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="link">@vuejs</AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80">
                                        <div class="flex justify-between space-x-4">
                                            <AAvatar>
                                                <AAvatarFallback>V</AAvatarFallback>
                                            </AAvatar>
                                            <div class="space-y-1">
                                                <h4 class="text-sm font-semibold">@vuejs</h4>
                                                <p class="text-sm">
                                                    The Progressive JavaScript Framework.
                                                </p>
                                                <div class="flex items-center pt-2">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                    <span class="text-xs text-muted-foreground">
                                                        38.5k stars
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>

                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="link">@reactjs</AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80">
                                        <div class="flex justify-between space-x-4">
                                            <AAvatar>
                                                <AAvatarFallback>R</AAvatarFallback>
                                            </AAvatar>
                                            <div class="space-y-1">
                                                <h4 class="text-sm font-semibold">@reactjs</h4>
                                                <p class="text-sm">
                                                    A JavaScript library for building user interfaces.
                                                </p>
                                                <div class="flex items-center pt-2">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                    <span class="text-xs text-muted-foreground">
                                                        216k stars
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">用户信息卡片</h3>
                            <div class="flex flex-wrap gap-6">
                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="ghost" class="h-auto p-0">
                                            <div class="flex items-center space-x-2">
                                                <AAvatar class="h-8 w-8">
                                                    <AAvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                                                    <AAvatarFallback>张三</AAvatarFallback>
                                                </AAvatar>
                                                <div class="text-left">
                                                    <div class="text-sm font-medium">张三</div>
                                                    <div class="text-xs text-muted-foreground">前端开发工程师</div>
                                                </div>
                                            </div>
                                        </AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80">
                                        <div class="space-y-3">
                                            <div class="flex justify-between space-x-4">
                                                <AAvatar class="h-12 w-12">
                                                    <AAvatarImage src="https://github.com/shadcn.png" alt="张三" />
                                                    <AAvatarFallback>张三</AAvatarFallback>
                                                </AAvatar>
                                                <div class="space-y-1">
                                                    <h4 class="text-sm font-semibold">张三</h4>
                                                    <p class="text-sm text-muted-foreground">
                                                        前端开发工程师
                                                    </p>
                                                    <p class="text-xs text-muted-foreground">
                                                        专注于 Vue.js 和 React 开发
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex items-center space-x-4 text-xs text-muted-foreground">
                                                <div class="flex items-center">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                    128 项目
                                                </div>
                                                <div class="flex items-center">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                                                    </svg>
                                                    2.1k 关注者
                                                </div>
                                            </div>
                                            <div class="pt-2">
                                                <AButton size="sm" class="w-full">关注</AButton>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>

                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="ghost" class="h-auto p-0">
                                            <div class="flex items-center space-x-2">
                                                <AAvatar class="h-8 w-8">
                                                    <AAvatarFallback>李四</AAvatarFallback>
                                                </AAvatar>
                                                <div class="text-left">
                                                    <div class="text-sm font-medium">李四</div>
                                                    <div class="text-xs text-muted-foreground">UI/UX 设计师</div>
                                                </div>
                                            </div>
                                        </AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80">
                                        <div class="space-y-3">
                                            <div class="flex justify-between space-x-4">
                                                <AAvatar class="h-12 w-12">
                                                    <AAvatarFallback>李四</AAvatarFallback>
                                                </AAvatar>
                                                <div class="space-y-1">
                                                    <h4 class="text-sm font-semibold">李四</h4>
                                                    <p class="text-sm text-muted-foreground">
                                                        UI/UX 设计师
                                                    </p>
                                                    <p class="text-xs text-muted-foreground">
                                                        专注于用户体验和界面设计
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex items-center space-x-4 text-xs text-muted-foreground">
                                                <div class="flex items-center">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                    89 项目
                                                </div>
                                                <div class="flex items-center">
                                                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                                        <circle cx="9" cy="7" r="4"/>
                                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                                                    </svg>
                                                    1.5k 关注者
                                                </div>
                                            </div>
                                            <div class="pt-2">
                                                <AButton size="sm" variant="outline" class="w-full">已关注</AButton>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">产品信息卡片</h3>
                            <div class="flex flex-wrap gap-6">
                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="outline" class="h-auto p-4">
                                            <div class="text-left">
                                                <div class="flex items-center space-x-2 mb-2">
                                                    <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div class="font-medium">AuroraUI Pro</div>
                                                        <div class="text-sm text-muted-foreground">专业版</div>
                                                    </div>
                                                </div>
                                                <div class="text-sm text-muted-foreground">
                                                    功能完整的企业级组件库
                                                </div>
                                            </div>
                                        </AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-96">
                                        <div class="space-y-3">
                                            <div class="flex items-start space-x-3">
                                                <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                </div>
                                                <div class="space-y-1">
                                                    <h4 class="text-sm font-semibold">AuroraUI Pro</h4>
                                                    <p class="text-sm text-muted-foreground">
                                                        专业版组件库，包含所有高级功能
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div class="text-sm">
                                                    <div class="flex items-center justify-between">
                                                        <span>包含组件数量</span>
                                                        <span class="font-medium">50+</span>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <span>主题定制</span>
                                                        <span class="font-medium">✓ 支持</span>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <span>TypeScript</span>
                                                        <span class="font-medium">✓ 支持</span>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <span>响应式设计</span>
                                                        <span class="font-medium">✓ 支持</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-2">
                                                <AButton size="sm" class="w-full">了解更多</AButton>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>

                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="outline" class="h-auto p-4">
                                            <div class="text-left">
                                                <div class="flex items-center space-x-2 mb-2">
                                                    <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div class="font-medium">AuroraUI Free</div>
                                                        <div class="text-sm text-muted-foreground">免费版</div>
                                                    </div>
                                                </div>
                                                <div class="text-sm text-muted-foreground">
                                                    基础组件库，适合个人项目
                                                </div>
                                            </div>
                                        </AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-96">
                                        <div class="space-y-3">
                                            <div class="flex items-start space-x-3">
                                                <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                </div>
                                                <div class="space-y-1">
                                                    <h4 class="text-sm font-semibold">AuroraUI Free</h4>
                                                    <p class="text-sm text-muted-foreground">
                                                        免费版组件库，包含基础功能
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div class="text-sm">
                                                    <div class="flex items-center justify-between">
                                                        <span>包含组件数量</span>
                                                        <span class="font-medium">20+</span>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <span>主题定制</span>
                                                        <span class="font-medium text-muted-foreground">✗ 不支持</span>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <span>TypeScript</span>
                                                        <span class="font-medium">✓ 支持</span>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <span>响应式设计</span>
                                                        <span class="font-medium">✓ 支持</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-2">
                                                <AButton size="sm" variant="outline" class="w-full">立即使用</AButton>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium mb-3">自定义样式</h3>
                            <div class="flex flex-wrap gap-6">
                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="secondary" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                                            渐变按钮
                                        </AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                                        <div class="space-y-2">
                                            <h4 class="text-sm font-semibold text-purple-900">自定义样式</h4>
                                            <p class="text-sm text-purple-700">
                                                这是一个带有自定义渐变背景的悬停卡片
                                            </p>
                                            <div class="pt-2">
                                                <AButton size="sm" class="w-full bg-purple-500 hover:bg-purple-600">
                                                    自定义按钮
                                                </AButton>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>

                                <AHoverCard>
                                    <AHoverCardTrigger as-child>
                                        <AButton variant="outline" class="border-2 border-blue-300 text-blue-600 hover:bg-blue-50">
                                            蓝色主题
                                        </AButton>
                                    </AHoverCardTrigger>
                                    <AHoverCardContent class="w-80 border-blue-200 bg-blue-50">
                                        <div class="space-y-2">
                                            <h4 class="text-sm font-semibold text-blue-900">蓝色主题</h4>
                                            <p class="text-sm text-blue-700">
                                                这是一个蓝色主题的悬停卡片
                                            </p>
                                            <div class="pt-2">
                                                <AButton size="sm" class="w-full bg-blue-500 hover:bg-blue-600">
                                                    蓝色按钮
                                                </AButton>
                                            </div>
                                        </div>
                                    </AHoverCardContent>
                                </AHoverCard>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
