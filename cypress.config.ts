import { defineConfig } from 'cypress';

export default defineConfig({
	env: {
		baseUrl: 'http://192.168.43.12:3000'
	},
	e2e: {
		baseUrl: 'http://192.168.43.12:3000',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
});
