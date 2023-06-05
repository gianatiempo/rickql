import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
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
})
