// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: { default: true },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			plugins: [
				Icons({
					compiler: 'svelte'
				}),
				AutoImport({
					resolvers: [
						IconsResolver({
							prefix: 'Icon',
							extension: 'svelte'
						})
					]
				})
			]
		}
	}
};

export default config;
