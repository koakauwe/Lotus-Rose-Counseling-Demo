import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://lotusrosecounseling.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/blog/coming-soon/'),
    }),
  ],
});
