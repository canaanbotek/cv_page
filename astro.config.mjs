// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://canaanbotek.github.io',
  base: '/cv_page',
  vite: {
    plugins: [tailwindcss()],
  },
});