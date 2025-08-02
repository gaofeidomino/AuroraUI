import type { App } from 'vue'

import * as components from './components/index'
export * from './components/index'

export const install = function (app: App) {
    Object.keys(components).forEach((key) => {
        const component = components[key as keyof typeof components]
        if (component.install) {
            app.use(component)
        }
    })
    return app
}

export default {
    install,
}
