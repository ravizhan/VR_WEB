import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 如果是VrView开头的Vue组件，将它们打包到一个名为vr-views的chunk中
          if (id.includes('VrView') && id.endsWith('.vue')) {
            return 'vr-views';
          }
        },
      }
    }
  },
  optimizeDeps: {
    include: ['lodash.debounce']
  },
})
