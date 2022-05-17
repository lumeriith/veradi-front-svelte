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
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	important: true
};
