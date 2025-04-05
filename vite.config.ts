import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Calculadora de IMC',
        short_name: 'IMC Calc',
        description: 'Calculadora de IMC com React + Vite + PWA',
        theme_color: '#1976d2',
        background_color: '#f4f4f4',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/calculadora.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/calculadora.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/calculadora.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
