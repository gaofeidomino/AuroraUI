import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import RekaResolver from 'reka-ui/resolver'
import path from 'node:path'

export default defineConfig(({ command, mode }) => {
    console.log(command, mode)
    const isLibrary = process.env.BUILD_LIB === 'true'

    if (isLibrary) {
        // 库构建配置
        return {
            plugins: [
                Components({
                    dts: true,
                    resolvers: [RekaResolver()],
                }),
                tailwindcss(),
                vue(),
                vueDevTools(),
            ],
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url)),
                },
            },
            build: {
                lib: {
                    entry: path.resolve(__dirname, 'src/index.ts'),
                    name: 'AuroraUIPlus',
                    fileName: (format) => `aurora-ui-plus.${format}.js`,
                    formats: ['es', 'umd'],
                },
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        globals: {
                            vue: 'Vue',
                        },
                    },
                },
            },
        }
    }

    // 开发模式配置
    return {
        plugins: [
            Components({
                dts: true,
                resolvers: [RekaResolver()],
            }),
            tailwindcss(),
            vue(),
            vueDevTools(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    }
})
