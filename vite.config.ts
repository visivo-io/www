import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from '@mdx-js/rollup';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: "@mdx-js/react",
    }),
    Sitemap({
      hostname: 'https://visivo.io', 
    }),
  ],
});
