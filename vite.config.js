import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: '@unrest/form'
    },
    rollupOptions: {
      external: ['vue', 'jsonschema'],
      output: {
        globals: {
          vue: 'Vue',
          jsonschema: 'jsonschema',
        }
      }
    }
  },
  plugins: [vue()]
})