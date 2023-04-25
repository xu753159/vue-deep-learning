import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import bingPlugin from './src/plugins/bing-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir:'web-b',
  plugins: [vue(),vueJsx(),bingPlugin()],
})
