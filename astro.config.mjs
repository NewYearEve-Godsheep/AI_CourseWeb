import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://course.example.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
