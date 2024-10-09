import sitemap from '@astrojs/sitemap';
import {
	transformerMetaHighlight,
	transformerMetaWordHighlight,
	transformerNotationDiff,
	transformerNotationErrorLevel,
	transformerNotationFocus,
	transformerNotationHighlight,
	transformerNotationWordHighlight,
	transformerRenderWhitespace
} from '@shikijs/transformers';
import { transformerTwoslash } from '@shikijs/twoslash';
import astroPWA, { type PwaOptions } from '@vite-pwa/astro';
import astroIcon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import { assetsCache, externalResourcesCache, pagesCache, scriptsCache } from './src/sw-caching.js';

import hcShikiTheme from './src/styles/hc-shiki-theme.json';

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
				light: 'one-light',
				dark: 'ayu-dark',
				// @ts-expect-error - Astro is fussy about custom theme
				contrast: hcShikiTheme
			},
			defaultColor: false,
			wrap: true,
			transformers: [
				transformerTwoslash({
					explicitTrigger: true,
					rendererRich: { errorRendering: 'hover' }
				}),
				transformerNotationDiff(),
				transformerNotationHighlight(),
				transformerNotationWordHighlight(),
				transformerNotationFocus(),
				transformerNotationErrorLevel(),
				transformerRenderWhitespace({ position: 'boundary' }),
				transformerMetaHighlight(),
				transformerMetaWordHighlight()
			]
		},
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
