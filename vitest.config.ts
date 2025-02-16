import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    globals: false,
    reporters: ['verbose'],
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts']
  }
})