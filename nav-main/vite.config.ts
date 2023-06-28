import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

function pathResolve(dir: string) {
  return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [
    vue(), // ...
    viteMockServe({
      mockPath: '/src/mock',
      localEnabled: command === 'serve' && mode === 'mock',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/_mixins.scss";`,
      },
      scss: {
        additionalData: "@import '@/assets/styles/_mixins.scss';",
      },
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
}))
