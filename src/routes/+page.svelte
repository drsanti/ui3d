<script lang="ts">
	import EngineComponent from '../components/EngineComponent.svelte';

	import type { Engine, EngineStats } from '../ui3d/Engine';

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
