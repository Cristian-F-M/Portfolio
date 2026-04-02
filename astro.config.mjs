// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import { languages, defaultLanguage } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: Object.keys(languages),
		defaultLocale: defaultLanguage,
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
			fallbackType: 'rewrite'
		},
	},
	output: 'server',
	vite: {
		plugins: [tailwindcss()],
		server: {
			watch: { usePolling: true }
		}
	},
	integrations: [react()],
	adapter: vercel()
});