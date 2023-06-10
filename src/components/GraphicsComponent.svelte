<script lang="ts">
	import { onMount } from 'svelte';
	import { engineStore } from './store';
	import { Engine } from '../ui3d/Engine/Engine';
	import { Elastic } from '../ui3d/Engine/Engine';
	import { Plotter } from '../ui3d/Painter/Plotter';

	let containerId = Engine.generateUUID(`main-container`);

	let engine: Engine;

	let counter = 0;

	export let modelId = 2;

	let isCreated = false;

	onMount(async () => {
		console.log(`%c GraphicsComponent.svelte loaded`, `background: #228`);
		console.log(`%c Container ID: ${containerId}`, `background: #833`);

		const init = () => {
			const gr = engine.createGraphics(containerId);
			gr.setSize169();
			gr.nextEnvironment();
			gr.setBackground(null);
			const model = engine.getResources().glTFs[0];
			const s0 = gr.useScene(model, modelId);
			s0.position.set(0, -1, 0);

			const backCanvas = gr.getBackCanvas();

			const backPlotter = new Plotter(backCanvas);
			backPlotter.setGainFactor(0.8);
			backPlotter.hideGrids();
			const tween = engine.createTween({
				firstValue: -1,
				lastValue: 1,
				ease: `elastic.inOut(1, 0.5)`,
				yoyo: true,
				repeat: -1,
				duration: 3 + Math.random() * 2,
				onUpdate: (value: number) => {
					s0.rotation.y = value * Math.PI + Math.PI;
					backPlotter.add(value);
					backPlotter.drawText(`id: ${containerId}`, 5, 5);
				}
			});

			const frontCanvas = gr.getOverlayCanvas();
			const frontPlotter = new Plotter(frontCanvas);
			frontPlotter.setGainFactor(0.5);
			frontPlotter.hideGrids();
			const frontTween = engine.createTween({
				firstValue: -1,
				lastValue: 1,
				ease: `elastic.inOut(2, 0.2)`,
				yoyo: true,
				repeat: -1,
				duration: 3 + Math.random() * 2,
				onUpdate: (value: number) => {
					frontPlotter.add(value);
				}
			});

			gr.onResize(() => {
				gr.setSize169();
			});

			/**
			 * RaySensor must be called after the scene is fully setup.
			 */
			const sensor = gr.createRaySensor();
			sensor.sense('Ball', {
				mouseDown: (e) => {
					gr.previousEnvironment();
				},
				mouseDrag: (e: THREE.Intersection) => {
					console.dir(e.object.name);
				}
			});
		};

		engineStore.subscribe((_engine) => {
			engine = _engine;
			counter += 1;
			if (engine && isCreated === false) {
				init();
				isCreated = true;
			}
		});
	});
</script>

<!-- <div>Graphics....{counter}</div> -->

<div class="border border-blue-500 p-0 m-0">
	<div id={containerId} />
	<slot />
</div>
