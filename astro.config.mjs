import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://lotusrosecounseling.com',
  trailingSlash: 'always',
  redirects: {
    '/therapists': '/our-therapists/',
    '/therapists/': '/our-therapists/',
    '/contact-us': '/contact/',
    '/contact-us/': '/contact/',
    '/modalities': '/services/',
    '/modalities/': '/services/',
    '/insurance-and-pricing': '/insurance-and-pricing/',
    '/joys-therapy-background': '/therapists/joy-bouchard/',
    '/joys-therapy-background/': '/therapists/joy-bouchard/',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/blog/coming-soon/'),
    }),
  ],
});
