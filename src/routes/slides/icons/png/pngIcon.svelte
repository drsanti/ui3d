<script lang="ts">
	import { onMount } from 'svelte';

	export let src: any;
	export let width = 128;
	export let height = 128;
	export let scale = 1.0;
	export let animate = false;

	let image: HTMLImageElement;
	let className = animate === true ? 'scaling-image' : '';

	const toggle = () => {
		className = className === 'scaling-image' ? '' : 'scaling-image';
	};
</script>

<img
	on:mousedown={toggle}
	{src}
	width={width * scale}
	height={height * scale}
	alt=""
	class="cursor-pointer {className}"
/>

<style>
	.scaling-image {
		animation: scaleAnimation 0.5s infinite alternate;
	}

	@keyframes scaleAnimation {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1.05);
		}
	}
</style>
