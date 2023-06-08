<script lang="ts">
	import EngineComponent from '../components/EngineComponent.svelte';
	import { Linear, Elastic, Back } from 'gsap';
	import type { Engine, EngineStats } from '../ui3d/Engine';

	import { engineStore } from '../components/store';
	import { Graphics } from '../ui3d/Graphics/Graphics';
	import { Plotter } from '../ui3d/Painter/Plotter';

	let engine: Engine;
	let stats: EngineStats;
	engineStore.subscribe((egn) => {
		engine = egn;
		console.log(engine);
		if (engine) {
			engine.onFrame((s) => {
				stats = s;
			});

			let g0 = engine.createGraphics(`container0`);
			g0.nextEnvironment();
			g0.setSize(window.innerWidth, window.innerHeight);

			const glTF = engine.getResources().glTFs[0];
			const s0 = g0.useScene(glTF, 2);

			engine.getOverlayCanvases().then((canvases) => {
				const p = new Plotter(canvases[0]);
				const tween = engine.createTween({
					firstValue: 0,
					lastValue: Math.PI * 2,
					ease: Elastic.easeIn,
					yoyo: true,
					repeat: -1,
					duration: 1.5,
					onUpdate: (value: number) => {
						s0.rotation.y = value;

						p.add(((value / (Math.PI * 2)) * p.getHeight()) / 2);
					}
				});
			}); // engine
		}
	});
</script>

<EngineComponent>
	<div>
		{stats?.frames} stats?.fps
		<div id="container0" class="border border-blue-700 w-fit" />
	</div>
</EngineComponent>
