import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { RemoteModule } from "@titan-app/plugin"
import { RemoteModule } from "../vite-plugin/src/index"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      RemoteModule({ entry: "packages/index.tsx" })
  ],
    resolve: {
      alias: {
          antd: "https://esm.sh/antd@5.8.5"
      }
    }
})
