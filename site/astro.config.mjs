// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site URL for canonical URLs and sitemap
  site: 'https://billson.me',

  // Astro integrations
  integrations: [
    // Generate sitemap for SEO and AI agent discovery
    sitemap({
      // Include all pages in the sitemap
      filter: (page) => true,
      // Customize the sitemap output
      customPages: [],
    }),
  ],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'everforest-light',
        dark: 'everforest-dark'
      },
      defaultColor: false
    },
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
