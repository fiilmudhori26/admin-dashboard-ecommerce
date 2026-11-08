import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'admin-dashboard-ecommerce',
    environment: 'jsdom',
    globals: true,
  },
})
