// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
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
    // Keep the unified pipeline so the rehype plugin below keeps working
    // with Astro v7's new Sätteri default processor.
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
      ]
    }),
    shikiConfig: {
      themes: {
        light: 'everforest-light',
        dark: 'everforest-dark'
      },
      defaultColor: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
