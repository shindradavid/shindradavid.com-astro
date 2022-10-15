import { defineConfig } from 'astro/config';
// integrations
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
// remark plugins
import { remarkReadingTime } from './src/lib/remark-plugins';

export default defineConfig({
	site: 'https://shindradavid.vercel.app',
	markdown: {
		shikiConfig: {
			theme: 'dark-plus'
		},
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [],
		extendDefaultPlugins: true
	},
	integrations: [sitemap(), mdx(), svelte()]
});
