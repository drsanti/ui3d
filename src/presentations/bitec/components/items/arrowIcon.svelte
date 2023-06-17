<script lang="ts">
	import ArrowDown from './arrowDown.svelte';
	import ArrowUp from './arrowUp.svelte';

	export let type: 'Up' | 'Down' = 'Up';
	export let width = 52;
	export let height = 52;
	export let color = 'currentColor';
</script>

{#if type === 'Up'}
	<ArrowUp {width} {height} {color} />
{/if}
{#if type === 'Down'}
	<ArrowDown {width} {height} {color} />
{/if}
