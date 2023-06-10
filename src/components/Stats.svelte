<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { engineStore } from './store';
	import type { Unsubscriber } from 'svelte/store';
	import type { Engine, EngineStats } from '../ui3d/Engine/Engine';
	import KvItem from './kvItem.svelte';

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

<div class="stats-wrapper">
	<KvItem key={'fps'} val={stats?.fps} />
	<KvItem key={'delta'} val={stats?.delta * 1000} suffix={'ms'} />
	<KvItem key={'load'} val={stats?.load} suffix={'%'} />
	<KvItem key={'frames'} val={stats?.frames.toFixed(0)} />
</div>

<style>
	.stats-wrapper {
		@apply flex justify-around overflow-hidden py-1 bg-black;
	}
</style>
