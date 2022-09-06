/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'orange-dark': '#FDA214',
			'blue-main': '#6395B8',
			'light-blue': '#BCCED9',
			'medium-blue': '#304859',
			'dark-blue': '#152938',
			'gray-main': '#F2F2F2',
			'medium-gray': '#7191A5',
			'white-main': '#FCFCFC',
		},
		fontFamily: {
			Atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
		},
		fontSize: {
			xsm: '15px',
			normal: '16px',
			sm: '18px',
			md: '20px',
			lg: '32px',
			xl: '48px',
			'num-sm': '44px',
			'num-lg': '56px',
		},
		extend: {},
	},
	plugins: [],
};
