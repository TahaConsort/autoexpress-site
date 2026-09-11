import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at a domain root and under a GitHub
// Pages project subpath (…github.io/autoexpress-site/) without rebuilding.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Keep hashed bundles out of dist/assets so they do not mix with the
    // images copied verbatim from public/assets.
    assetsDir: 'bundle',
  },
})
