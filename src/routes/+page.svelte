<script lang="ts">
	import { onMount } from 'svelte';
	import EngineComponent from '../components/EngineComponent.svelte';
	import type { Engine, EngineStats } from '../UI3D/Engine';

	import { engineStore } from '../components/store';

	let engine: Engine;
	let stats: EngineStats;
	engineStore.subscribe((egn) => {
		engine = egn;
		console.log(engine);
		if (engine) {
			engine.onFrame((s) => {
				stats = s;
			});
		}
	});
</script>

<EngineComponent>
	<div>
		{stats?.frames}
	</div>
</EngineComponent>
