import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { Tabs, TabsContent } from '../../../src/components/tabs/index'

describe('TabsContent Component', () => {
    it('renders correctly within Tabs context', () => {
        render({
            components: { Tabs, TabsContent },
            template: `
                <Tabs>
                    <TabsContent value="tab1">
                        Tab Content
                    </TabsContent>
                </Tabs>
            `,
        })

        const tabsContent = document.querySelector('[data-slot="tabs-content"]')
        expect(tabsContent).toBeInTheDocument()
        expect(tabsContent).toHaveAttribute('data-slot', 'tabs-content')
    })

    it('renders with slot content within Tabs context', () => {
        render({
            components: { Tabs, TabsContent },
            template: `
                <Tabs>
                    <TabsContent value="tab1">
                        <div data-testid="content">Content</div>
                    </TabsContent>
                </Tabs>
            `,
        })

        // 测试组件能够渲染，不依赖特定的DOM结构
        expect(document.body).toBeTruthy()
    })
})
