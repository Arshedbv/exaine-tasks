import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "name": "Exaine-tasks",
        "short_name": "Exaine",
        "description": "Tasks made easy",
        "start_url": "/exaine-tasks/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": [
          {
            "src": "./exaine.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "./exaine.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "splash_pages": null,
        "scope": "/",
        "dir": "auto",
        "lang": "en-US",
        "prefer_related_applications": false,
        "related_applications": [],
      },
      devOptions: {
        enabled: true
      },
      // other PWA options go here
      // ...
    })
  ],
  base: "/exaine-tasks/"
})
