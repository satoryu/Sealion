import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:7071'
      }
    }
  }
}
