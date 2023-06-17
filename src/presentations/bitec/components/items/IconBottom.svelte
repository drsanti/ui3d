<script>
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	export let scale = 1.0;
	export let icon = icons.pngAi;
	export let width = 128;
	export let height = 128;
	export let tw = '';
	import PngIcon from './PngIcon.svelte';
</script>

<div class="flex flex-col">
	<div class="flex flex-col justify-center items-center">
		<slot />
	</div>
	<div class="{tw} flex justify-center items-center">
		<PngIcon {icon} {scale} {width} {height} />
	</div>
</div>
