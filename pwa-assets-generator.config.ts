/* eslint-disable @typescript-eslint/no-magic-numbers */

import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
	images: ['public/icons/icon.svg'],
	manifestIconsEntry: true,
	headLinkOptions: {
		basePath: '/icons/',
		xhtml: true
	},
	preset: {
		transparent: {
			sizes: [64, 96, 192, 512, 1024],
			favicons: [[48, 'favicon.ico']],
			padding: 0
		},
		maskable: {
			sizes: [64, 192, 512, 1024],
			padding: 0,
			resizeOptions: { background: '#ee3124', fit: 'contain' }
		},
		apple: {
			sizes: [180],
			padding: 0,
			resizeOptions: { background: '#ee3124', fit: 'contain' }
		}
	}
});
