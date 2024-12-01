import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.JPG'],
  plugins: [react()],
  base: '/DeviPortfolio/',  // Adjust base URL if necessary
  build: {
    outDir: 'dist',  // Output to public folder
  },
})

