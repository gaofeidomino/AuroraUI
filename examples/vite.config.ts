import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
        },
    },
    server: {
        port: 3001,
        open: true,
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            external: ['vue'],
        },
    },
})
