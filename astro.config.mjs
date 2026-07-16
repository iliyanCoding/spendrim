// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://spendrim.com',
  output: 'static',
  integrations: [svelte(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
