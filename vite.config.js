import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.js',
        injectRegister: 'inline',
        // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'ВТБ Отделения',
          short_name: 'VTB',
          description: 'Поиск отделений банковв, быстро и надежно',
          theme_color: '#009fdf',
          start_url: '/',
          icons: [
            {
              src: 'vtb-square-icon-72.webp',
              sizes: '72x72',
              type: 'image/webp',
              purpose: "any"
            },
            {
              src: 'vtb-square-icon-512.webp',
              sizes: '512x512',
              type: 'image/webp',
              purpose: "any"
            },
          ],
        },
      }),
  ]
})
