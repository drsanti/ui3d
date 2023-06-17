<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import { onMount } from 'svelte';
	export let scale = 1.0;
	export let icon = icons.pngAi;
	export let width = 128;
	export let height = 128;

	export let period = 5000;
	export let tw = '';

	let image: HTMLImageElement;
	let cls = 'animate';
	onMount(() => {
		image = document.querySelector('img') as HTMLImageElement;
		start();
	});

	let animating = false;
	let timeout: number | NodeJS.Timeout;
	const start = () => {
		cls = 'animate';
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			stop();
		}, period);
	};
	const stop = () => {
		clearTimeout(timeout);
		animating = false;
		cls = '';
	};
	const toggle = () => {
		animating = !animating;
		animating ? start() : stop();
	};
	start();
</script>

<span class="{tw} flex justify-center items-center">
	<img
		on:mousedown={toggle}
		src={icon}
		width={width * scale}
		height={height * scale}
		class="{cls} cursor-pointer"
		alt=""
	/>
</span>

<style>
	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}

	.animate {
		animation: scale 0.5s infinite;
	}
</style>
