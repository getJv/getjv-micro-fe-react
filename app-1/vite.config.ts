import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote-app-1',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './Button': './src/components/Button.tsx',
            },
            shared: ['react','react-dom']
        })
    ],
    build: {
        target: 'esnext'
    },
})