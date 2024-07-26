/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#F9F9F9",
				black: "#000000",
			},
			fontFamily: {
				sans: ["Helvetica", "sans-serif"],
				bitter: ["Bitter", "serif"],
			},
		},
	},
	plugins: [],
};
