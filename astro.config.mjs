import { defineConfig } from 'astro/config';
// integrations
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
// rehype plugins
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// remark plugins
import { remarkReadingTime } from './src/lib/remark-plugins';

export default defineConfig({
	site: 'https://shindradavid.vercel.app',
	markdown: {
		syntaxHighlight: 'prism',
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
		extendDefaultPlugins: true
	},
	integrations: [sitemap(), mdx(), svelte()]
});
