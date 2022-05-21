module.exports = {
	// add this section
	prefix: 'tw-',
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px'
		},
		fontFamily: {
			heading: ['DotumHanjaOnly', 'BMHANNAPro', 'Tahoma', 'Arial', 'Helvetica', 'sans-serif'],
			body: ['SUIT-Regular']
		},
		fontSize: {
			xs: '.675rem',
			sm: '.75rem',
			base: '.875rem',
			md: '.875rem',
			lg: '1rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2rem',
			'5xl': '2.25rem',
			'6xl': '3rem',
			'7xl': '4rem'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	important: true
};
