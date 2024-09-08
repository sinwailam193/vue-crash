import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const PORT = 3000;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: PORT
    },
    preview: {
        port: PORT
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});
