import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pngrugbyleaguetours.com.au',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
