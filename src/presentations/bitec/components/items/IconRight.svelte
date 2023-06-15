<script>
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	export let scale = 1.0;
	export let icon = icons.pngAr;
	export let width = 128;
	export let height = 128;
	import PngIcon from './PngIcon.svelte';
</script>

<div class="flex flex-row">
	<div class="flex flex-col justify-center items-center">
		<slot />
	</div>
	<div class="flex justify-center items-center">
		<PngIcon {icon} {scale} {width} {height} />
	</div>
</div>
