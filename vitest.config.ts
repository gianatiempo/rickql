import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vitest/config'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react()],
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
  },
  server: {
    port: 8000,
    strictPort: true,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['html', 'text', 'json-summary'],
      exclude: [
        '**/*.cjs',
        '**/index.ts',
        '**/*.test.tsx',
        'public',
        'src/main.tsx',
        'src/mocks/*.ts',
        'src/gql/*.tsx',
        'src/querys/*.ts',
        'src/utils/testUtils.tsx',
      ],
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
})
