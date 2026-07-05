import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://bialystok-korepetycje.pl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [tailwind()],
});
