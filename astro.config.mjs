import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://shindradavid.vercel.app',
	markdown: {
		shikiConfig: {
			theme: 'dark-plus',
			// Enable word wrap to prevent horizontal scrolling
			wrap: false
		}
	},
	integrations: [sitemap()]
});
