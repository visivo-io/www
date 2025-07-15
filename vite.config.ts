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
  css: {
    // Extract CSS to separate files for better caching
    extract: true,
    // Enable CSS code splitting
    codeSplit: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More granular chunking strategy
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) {
              return 'icons';
            }
            if (id.includes('@fortawesome')) {
              return 'icons-fa';
            }
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) {
              return 'react-vendor';
            }
            if (id.includes('flowbite') || id.includes('framer-motion')) {
              return 'ui-vendor';
            }
            if (id.includes('@segment')) {
              return 'analytics-vendor';
            }
            if (id.includes('styled-components')) {
              return 'styling-vendor';
            }
            if (id.includes('@mdx-js') || id.includes('react-markdown')) {
              return 'markdown-vendor';
            }
            if (id.includes('dagre') || id.includes('react-flow')) {
              return 'diagram-vendor';
            }
            // All other vendor modules
            return 'vendor';
          }
        },
      },
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Tree shaking
    treeshake: {
      preset: 'recommended',
      manualPureFunctions: ['console.log', 'console.info'],
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'flowbite-react'],
  },
});
