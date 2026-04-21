import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@app": path.resolve(__dirname, "./src/0_app"),
            "@pages": path.resolve(__dirname, "./src/1_pages"),
            "@widgets": path.resolve(__dirname, "./src/2_widgets"),
            "@features": path.resolve(__dirname, "./src/3_features"),
            "@entities": path.resolve(__dirname, "./src/4_entities"),
            "@shared": path.resolve(__dirname, "./src/5_shared"),
            "@assets": path.resolve(__dirname, "./src/5_shared/assets"),
            "@styles": path.resolve(__dirname, "./src/0_app/styles"),
            "@ui": path.resolve(__dirname, "./src/5_shared/ui"),
            "@lib": path.resolve(__dirname, "./src/5_shared/lib"),
        },
    },
});
