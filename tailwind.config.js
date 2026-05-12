/** @type {import('tailwindcss').Config} */

export default {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eff6ff",
					500: "#3b82f6",
					900: "#1e3a8a",
				},
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.3s ease-out",
			},
		},
	},

	plugins: [],
};
