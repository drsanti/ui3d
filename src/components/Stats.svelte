<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { engineStore } from './store';
	import type { Unsubscriber } from 'svelte/store';
	import type { Engine, EngineStats } from '../ui3d/Engine/Engine';

	const log = (text: string, color?: string) => {
		// console.log(`%c${text}`, `color: ${color ? color : 'orange'}`);
	};

	let stats: EngineStats;

	const init = (engine: Engine) => {
		engine.onFrame((_stats) => (stats = _stats));
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

<div class="container">
	<span class="stats text-yellow-400">fps: {stats?.fps.toFixed(2)}</span>
	<span class="stats text-green-400">delta: {(stats?.delta * 1000).toFixed(2)}ms</span>
	<span class="stats text-blue-400">load: {stats?.load.toFixed(2)}%</span>
	<span class="stats text-pink-400">frames: {stats?.frames}</span>
</div>

<style>
	.container {
		@apply flex justify-evenly overflow-hidden py-1 pl-10 bg-yellow-950;
	}
	.stats {
		@apply flex-grow text-xs font-mono border-0 w-1/4;
	}
</style>
