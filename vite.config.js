import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置原始文件导入
  optimizeDeps: {
    exclude: ['*.jsx?raw']
  },
  assetsInclude: ['*.jsx?raw']
})
