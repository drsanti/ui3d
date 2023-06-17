<script lang="ts">
	import ArrowUpDouble from './arrowUpDouble.svelte';
	import ArrowDownDouble from './arrowDownDouble.svelte';
	import ArrowLeftDouble from './arrowLeftDouble.svelte';
	import ArrowRightDouble from './arrowRightDouble.svelte';

	export let arrow: 'up' | 'down' | 'right' | 'left' = 'left';
	export let id: string = `arrow-double-${Math.random().toFixed(4)}`;
	export let width = 52;
	export let height = 52;
	export let scale = 1;
	export let color = 'currentColor';
	export let tw = '';

	let anim = '';
	const animate = () => {
		anim = anim === 'animate-scale' ? '' : 'animate-scale';
	};
</script>

<div {id} on:mousedown={animate} class="flex {anim} cursor-pointer">
	{#if arrow === 'up'}
		<ArrowUpDouble {width} {height} {scale} {color} {tw} />
	{:else if arrow === 'down'}
		<ArrowDownDouble {width} {height} {scale} {color} {tw} />
	{:else if arrow === 'left'}
		<ArrowLeftDouble {width} {height} {scale} {color} {tw} />
	{:else if arrow === 'right'}
		<ArrowRightDouble {width} {height} {scale} {color} {tw} />
	{/if}
</div>

<style>
	@keyframes scale {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}

	.animate-scale {
		animation: scale 0.5s infinite;
	}
</style>
