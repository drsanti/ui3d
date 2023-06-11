<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { onMount } from 'svelte';

	// console.clear();
	onMount(async () => console.log(`%c layout.svelte loaded`, `background: #228`));
</script>

<svelte:head>
	<title>Presentation</title>
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai" rel="stylesheet" />
</svelte:head>

<slot />
