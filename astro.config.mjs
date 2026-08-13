import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://diemer.codes',
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      // amber-friendly code theme; overridden further in prose CSS
      theme: 'vitesse-black',
    },
  },
});
