import { defineConfig, splitVendorChunkPlugin } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    svgr({ exportAsDefault: true }),
    tsconfigPaths(),
    eslint(),
    checker({
      typescript: true,
    }),
    pluginRewriteAll(),
    ViteImageOptimizer(),
    splitVendorChunkPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
    assetsDir: "app-assets",
  },
  resolve: {
    alias: {
      $fonts: path.resolve(__dirname, "src/assets/fonts"),
    },
  },
  css: {
    modules: {
      generateScopedName:
        command === "build" ? undefined : "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/shared/styles/index.global.scss';`,
      },
    },
  },
}));
