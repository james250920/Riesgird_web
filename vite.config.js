/// <reference types="vite/client" />

import { defineConfig } from 'vite';

export default defineConfig({
  // Base path para GitHub Pages
  base: '/Riesgird-web/',

  // Configuración de servidor para desarrollo
  server: {
    port: 4200,
    host: '0.0.0.0',
    open: false,
  },

  // Configuración de build
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['@angular/core', '@angular/common', '@angular/router'],
          rxjs: ['rxjs'],
        },
      },
    },
  },

  // Optimizaciones para dependencias
  optimizeDeps: {
    include: [
      '@angular/core',
      '@angular/common',
      '@angular/router',
      '@angular/forms',
      'rxjs',
      'rxjs/operators',
    ],
  },
});
