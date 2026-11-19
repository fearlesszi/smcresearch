import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://fearlesszi.github.io',
  base: '/smcresearch',
  output: 'static',
  integrations: [react(), markdoc()],
});
