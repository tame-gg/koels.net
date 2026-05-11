import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://koels.site',
  trailingSlash: 'never',
  integrations: [tailwind()],
  output: 'static',
  build: { assets: '_assets', format: 'file' },
});
