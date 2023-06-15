<script>
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	export let scale = 1.0;
	export let icon = icons.pngAi;
	export let width = 128;
	export let height = 128;
	export let period = 5000;
	export let tw = '';
	import PngIcon from './PngIcon.svelte';
</script>

<div class="flex flex-row">
	<div class="flex justify-center items-center{tw}">
		<PngIcon {icon} {scale} {width} {height} {period} />
	</div>
	<div class="flex flex-col justify-center items-center">
		<slot />
	</div>
</div>
