/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				display: "'Oswald', sans-serif",
				body: "'Fira Sans Condensed', sans-serif"
			},
			colors: {
				'black-900': '#121314'
			}
		}
	},
	plugins: []
};
