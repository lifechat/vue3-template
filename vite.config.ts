import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  // 根路径
  root:'',
  base:'./',//打包路径
  // 本地server配置
  server:{
    host:true,  
    port:8090,  // 端口
    https:false,
    open:true,  // 运行脚本自动打开游览器
    cors:true, //允许跨域
    proxy:{

    }// 目标代理
  },
  resolve:{
    alias:{
      'components':resolve('./src/components'), // 组件路径
      '@':resolve('./src'), // 页面路径
      'style':resolve('./src/styles'), // 样式路径
    },
    preserveSymlinks:false,
  },
  // 打包
  build:{
  },
})
