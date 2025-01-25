/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		"grid-cols-1",
		"grid-cols-2",
		"grid-cols-3",
		"grid-cols-4",
		"gap-4",
		"gap-8",
		"gap-12",
		{
			pattern: /^text-(red|blue|white|green|yellow|gray|black|slate)-?\d{0,3}$/,
		},
	  ],
}

