import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [vue()],
    clearScreen: false,
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@sections': resolve(__dirname, 'src/sections'),
            '@components': resolve(__dirname, 'src/components'),
            '@layouts': resolve(__dirname, 'src/layouts'),
            '@styles': resolve(__dirname, 'src/styles'),
        },
    },
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            ignored: ['**/src-tauri/**'],
        },
    },
}));
