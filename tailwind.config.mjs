import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			blueMain: 'var(--blueMain)',
			blueLight: 'var(--blueLight)',
			blueDarker: 'var(--blueDarker)',
			blueLighter: 'var(--blueLighter)',
			white: 'var(--white)',
			black: 'var(--black)',
			errorRed: 'var(--errorRed)',
		}
	},
	plugins: [],
}
