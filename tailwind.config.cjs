/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				principal: '#fce9eb',
				secondary: '#5D5D81',
				'green-whatsapp' : '#25D366'
			}
		},
	},
	plugins: [],
}
