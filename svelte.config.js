// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-auto';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		vite: {
			plugins: [
				Icons({
					compiler: 'svelte'
				})
			]
		}
	}
};

export default config;
