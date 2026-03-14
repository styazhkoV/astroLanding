// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexsnow.github.io',
  base: '/astroLanding',
  vite: {
    plugins: [tailwindcss()]
  }
});