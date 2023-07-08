import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['src/composables/*.ts'], })

  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: ["./src/composables/index.ts"],
      formats: ["es", "cjs"],
      name: "FormkitBuilder",
      fileName: (format, entry) => {
        return format === `es` ? `${entry}.js` : `${entry}.cjs`
      }
    },
    rollupOptions: {
      external: ["vue",
        "vue-router",
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
