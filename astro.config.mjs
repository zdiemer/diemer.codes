import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diemer.codes',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // amber-friendly code theme; overridden further in prose CSS
      theme: 'vitesse-black',
    },
  },
});
