module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				main: 'var(--main)',
				bg: 'var(--bg)',
				header: 'var(--header)',
				accent: 'var(--accent)',

				darkPrimary: 'var(--darkPrimary)',
				darkSecondary: 'var(--darkSecondary)',
				darkMain: 'var(--darkMain)',
				darkBg: 'var(--darkBg)',
				darkHeader: 'var(--darkHeader)',
				darkAccent: 'var(--darkAccent)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
