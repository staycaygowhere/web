import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import copy from 'rollup-plugin-copy';

// see:	https://shoelace.style/getting-started/installation?id=bundling
// and: https://vitejs.dev/config/build-options.html#build-outdir
export default defineConfig({
	plugins: [
		copy({
			copyOnce: true,
			targets: [
				{
					src: 'node_modules/@shoelace-style/shoelace/dist/assets',
					dest: 'static/shoelace'
				}
			]
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		setupFiles: ['./src/tests/vitest-setup.ts'],
		coverage: {
			provider: 'c8',
			reporter: ['json-summary', 'lcovonly', 'text']
		}
	}
});
