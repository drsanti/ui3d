<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Engine, type EngineStats } from '../Canvas3D/Engine/Engine';
	import { Graphics } from '../Canvas3D/Graphics/Graphics';

	let engine: Engine;

	let _stats: EngineStats;

	onMount(() => {
		engine = new Engine();
		engine.start();
		engine.onFrame((stats: EngineStats) => {
			_stats = stats;
		});

		let g1 = new Graphics(engine, 'canvas1');
		let g2 = new Graphics(engine, 'canvas2');
		let g3 = new Graphics(engine, 'canvas3');
		let g4 = new Graphics(engine, 'canvas4');
	});

	onDestroy(() => {
		engine?.stop();
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">{_stats?.frames} {_stats?.delta.toFixed(3)} {_stats?.load.toFixed(3)}</h1>
		<div>
			<canvas id="canvas1" class="border border-blue-700" />
		</div>

		<div>
			<canvas id="canvas2" class="border border-green-700" />
		</div>

		<div>
			<canvas id="canvas3" class="border border-green-700" />
		</div>

		<div>
			<canvas id="canvas4" class="border border-green-700" />
		</div>

		<h5 class="h5">HeapLimit: {_stats?.heap?.jsHeapSizeLimit}</h5>
		<h5 class="h5">HeapSize: {_stats?.heap?.totalJSHeapSize}</h5>
		<h5 class="h5">HeapUsed: {_stats?.heap?.usedJSHeapSize}</h5>
	</div>
</div>
