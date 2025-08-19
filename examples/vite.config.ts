import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
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
