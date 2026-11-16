import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost5173/',
        supportFile: false,
    },
    viewportWidth: 1024,
    viewportHeight: 768,
})