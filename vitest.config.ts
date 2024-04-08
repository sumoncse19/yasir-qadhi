import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// Base API URL
const BASE_API_URL = 'https://yasirqadriadmin.islamicdigitallane.com/api/v1'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
    define: {
      // Define the base API URL as a global variable
      BASE_API_URL: JSON.stringify(BASE_API_URL)
    }
  })
)
