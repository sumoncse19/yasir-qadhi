import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// Base API URL
const BASE_API_URL = 'https://yasirqadriadmin.islamicdigitallane.com/api/v1'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // Define the base API URL as a global variable
    BASE_API_URL: JSON.stringify(BASE_API_URL)
  }
})
