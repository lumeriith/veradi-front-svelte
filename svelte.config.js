// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: { default: true },
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
