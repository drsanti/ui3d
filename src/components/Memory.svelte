<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { engineStore } from './store';
	import type { Unsubscriber } from 'svelte/store';
	import type { ChromeHeap, Engine, EngineStats } from '../ui3d/Engine/Engine';
	import KvItem from './kvItem.svelte';

	const log = (text: string, color?: string) => {
		// console.log(`%c${text}`, `color: ${color ? color : 'orange'}`);
	};

	let memory: any;

	const init = (engine: Engine) => {
		engine.onFrame((stats) => {
			memory = {
				limit: stats.heap?.limitSize, // bytes
				size: stats?.heap?.totalSize,
				alloc: stats.heap?.allocated, // %
				used: stats.heap?.consumed // %
			};
		});
	};

	let unsubscribe: Unsubscriber;
	onMount(async () => {
		unsubscribe = engineStore.subscribe((engine) => {
			log(`engine's instance => ${engine !== undefined}`);
			if (engine) {
				log(`got engine instance`, `yellow`);
				init(engine);
				unsubscribe?.();
			}
		});
	});
	onDestroy(() => unsubscribe?.());
</script>

<!-- <div class="container">
	<span class="stats text-yellow-400">used: {memory?.used.toFixed(2)}%</span>
	<span class="stats text-green-400">alloc: {memory?.alloc.toFixed(2)}%</span>
	<span class="stats text-blue-400">size: {(memory?.size / 1e6).toFixed(2)}MB</span>
	<span class="stats text-pink-400">limit: {(memory?.limit / 1e9).toFixed(2)}GB</span>
</div>

<style>
	.container {
		@apply flex justify-evenly overflow-hidden py-1 pt-1 pl-10 bg-green-950;
	}
	.stats {
		@apply flex-grow text-xs font-mono border-0 w-1/4;
	}
</style> -->

<div class="stats-wrapper">
	<KvItem key={'used'} val={memory?.used} suffix={'%'} />
	<KvItem key={'alloc'} val={memory?.alloc} suffix={'%'} />
	<KvItem key={'size'} val={memory?.size / 1e6} suffix={'MB'} />
	<KvItem key={'limit'} val={memory?.limit / 1e9} suffix={'GB'} />
</div>

<style>
	.stats-wrapper {
		@apply flex justify-evenly overflow-hidden py-1 w-screen;
	}
</style>
