import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                entryFileNames: "[name].js"
            },
            input: ["build.js"]
        },
        outDir: './dist/elements/combine'    }
});