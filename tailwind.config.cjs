/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:"#212941",
				secondary:"#ccd1e7",
				brand:"#de979d",
				subtitle:"#b8bdd1"
			}
		},
	},
	plugins: [],
}
