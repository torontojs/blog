import sitemap from '@astrojs/sitemap';
import astroPWA, { type PwaOptions } from '@vite-pwa/astro';
import astroIcon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import remarkBehead from 'remark-behead';

import { assetsCache, externalResourcesCache, pagesCache, scriptsCache } from './src/sw-caching.js';

const manifest: PwaOptions['manifest'] = JSON.parse(readFileSync('./src/manifest.json', {
	encoding: 'utf8'
}));

const mode = process.env['NODE_ENV'] === 'production' ? 'production' : 'development';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	site: 'https://blog.torontojs.com',
	base: '/',
	trailingSlash: 'ignore',
	compressHTML: true,
	build: {
		format: 'directory'
	},
	server: {
		host: 'localhost',
		port: 3000
	},
	...(mode !== 'production' && {
		vite: {
			server: {
				https: {
					cert: './certs/server.crt',
					key: './certs/server.key'
				}
			}
		}
	}),
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'css-variables',
			themes: {
				light: 'light-plus',
				dark: 'dark-plus'
			},
			wrap: true
		},
		remarkPlugins: [[remarkBehead, { minDepth: 2 }]]
	},
	integrations: [
		astroPWA({
			registerType: 'prompt',
			minify: true,
			includeAssets: ['/icons/icon.svg'],
			manifest,
			workbox: {
				// eslint-disable-next-line @typescript-eslint/no-magic-numbers
				maximumFileSizeToCacheInBytes: 1024 * 128,
				cleanupOutdatedCaches: true,
				clientsClaim: true,
				skipWaiting: false,
				navigateFallback: '/offline',
				navigateFallbackDenylist: [/\.(?:png|gif|jpg|jpeg|webp|svg|ico)$/iu],
				directoryIndex: 'index.html',
				runtimeCaching: [externalResourcesCache, assetsCache, scriptsCache, pagesCache]
			},
			selfDestroying: true,
			devOptions: {
				enabled: false
			}
		}),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date()
		}),
		astroIcon({
			iconDir: 'src/assets/icons'
		})
	]
});
