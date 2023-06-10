<script lang="ts">
	export let key: string = 'key';
	export let val: string | number = 'value';
	export let suffix: string = '';

	export let keyColor: string = '#8f8';
	export let valColor: string = '#f88';

	const mounted = (node: HTMLElement, id: string) => {
		node.style.color = id === 'key' ? keyColor : valColor;
	};
</script>

<div class="kv-container">
	<span use:mounted={'key'} class=" kv">{key}</span>
	<span class="kv symbol pr-1">:</span>
	<span use:mounted={'val'} class="kv">{typeof val === 'number' ? val.toFixed(2) : val}</span>
	<span class="kv symbol px-1">{suffix}</span>
</div>

<style>
	.kv-container {
		@apply flex border-0 rounded-md bg-indigo-950 pl-1 mx-2 justify-center items-center;
	}
	.kv {
		@apply text-xs font-mono;
	}
	.symbol {
		@apply text-gray-400;
	}
</style>
