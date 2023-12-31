import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: parseInt(env.VITE_APP_DEV_SERVER),
      strictPort: true,
    },

    plugins: [
      react(),
      viteCompression({ verbose: true, algorithm: "gzip", ext: ".gz" }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // xxx: "src/xxx",
      },
    },

    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
        },
      },
    },

    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-hook-form",
        "@emotion/react",
        "@emotion/styled",
        "@mui/material",
        "@mui/icons-material",
        // "@mui/x-charts",
        // "@mui/lab",
        "@uiw/react-md-editor",
        // "reactflow",
      ],
    },
  };
});
