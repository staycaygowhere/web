<script lang="ts">
	/**
	 * Site-wide Layout Stuff
	 */

	import '../app.css';
	import '/node_modules/@shoelace-style/shoelace/dist/themes/light.css';

	import HeaderBar from '$lib/components/HeaderBar/index.svelte';
	import FooterBar from '$lib/components/FooterBar/index.svelte';

	import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
	setBasePath('/shoelace');

	registerIconLibrary('custom', {
		resolver: (name) => `/icons/${name}.svg`
	});
</script>

<div class="w-full font-normal flex flex-col justify-center items-center">
	<HeaderBar />
	<div class="container">
		<slot />
	</div>
	<FooterBar />
</div>
