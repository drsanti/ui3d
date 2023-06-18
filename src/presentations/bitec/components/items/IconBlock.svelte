<script lang="ts">
	import IconBottom from './IconBottom.svelte';
	import TextClickFlash from './TextClickFlash.svelte';
	import { pngIconsList as icons } from '$lib/assets/icons/png';

	export let icon = icons.pngBtg;
	export let width = 220;

	export let tw = '';

	const css = `py-2 w-[${width}px] px-8 text-[2rem] bg-black/20 rounded-3xl  border-2 border-lime-200/70 `;
</script>

<div class=" {tw} {css} hover:bg-blue-700/50">
	<IconBottom {icon}>
		<TextClickFlash>
			<slot />
		</TextClickFlash>
	</IconBottom>
</div>
