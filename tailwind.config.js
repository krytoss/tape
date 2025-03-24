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
		"gap-4",
		"gap-8",
		"gap-12",
		{
			pattern: /^grid-cols-?\d{0,3}$/
		},
		{
		  pattern: /^grid-cols-\d+$/, 
		  variants: ["xs", "sm", "md", "lg", "xl", "2xl"],
		},
		{
		  pattern: /^text-\d+xl$/, 
		  variants: ["xs", "sm", "md", "lg", "xl", "2xl"],
		},
		{
			pattern: /^text-(red|blue|white|green|yellow|gray|black|slate)-?\d{0,3}$/,
		},
	  ],
}

