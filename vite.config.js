import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {// 别名配置
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/components'),
      '@s': path.resolve(__dirname, './src/styles')
    },
    extensions: ['.js', '.jsx', '.ts', '.json', 'less']
  },
})
