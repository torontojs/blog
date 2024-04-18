import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			mainRed: '#EA4F4A',
			darkGrey: '#9B9BA9',
			mediumGrey: '#B9B4AD',
			black: '#130E02',
			white: '#ffffff'
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'serif']
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem'
		},
		screens: {
			mobile: '640px',
			tablet: '768px',
			desktop: '1024px',
			'desktop-xl': '1280px',
			'desktop-2xl': '1536px'
		}
	},
	plugins: []
};

export default config;
