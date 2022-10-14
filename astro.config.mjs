import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: 'dark-plus',
			// Enable word wrap to prevent horizontal scrolling
			wrap: false
		}
	}
});
