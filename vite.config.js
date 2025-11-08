import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // 💡 ADD THIS RESOLVE BLOCK
  resolve: {
    alias: {
      // Maps any path starting with '@/' to the 'src' directory.
      // Assumes your source code is in the 'src' folder at the root.
      '@': path.resolve(__dirname, './src'), 
    },
  },
  // 💡 END OF RESOLVE BLOCK
})
