<script lang="ts">
	import EngineComponent from '../components/EngineComponent.svelte';
	import { Linear, Elastic, Back } from 'gsap';

	import { engineStore } from '../components/store';
	import { Plotter } from '../ui3d/Painter/Plotter';
	import { onDestroy, onMount } from 'svelte';
	import type { Engine } from '../ui3d/Engine';
	import type { Size } from '../ui3d/Graphics/Graphics';
	// import type { Writable } from 'svelte/store';

	let engine: Engine;
	let unsubscribe: any;

	let created = false;

	let count = 0;
	onMount( async()=>{
		/**
		 * This function is called more then one times.
		*/
		console.log(`%c layout.svelte loaded`,`background: #228`);
		
		unsubscribe = engineStore.subscribe( async(egn) => {
			engine = egn ;
			count++;
			if(engine){
				console.log(`%cpage.svelte got the engine.`, `color: #fa5`);
				unsubscribe?.();
				doOnce();
			}

			console.log(`counter: ${count}`);
			console.log(unsubscribe);
		});

		
	});

	onDestroy(()=>{
		unsubscribe?.();
		engine?.stop();
	});

	const doOnce = () => {
		if(created) {
			console.log(`%c Warning: the graphics is created. Reject this call.`, `background: rgba(255, 100, 0, 0.5)`);
			return;
		}

		created = true;


		engine.onFrame((s) => {
			// stats = s;
		});

		

		let g0 = engine.createGraphics(`container0`);
		g0.nextEnvironment();
		g0.setSize169();
		g0.onResize( (size: Size) => {
			g0.setSize169();
		});

		

		const glTF = engine.getResources().glTFs[0];
		const s0 = g0.useScene(glTF, 2);


		/**
		 * RaySensor must be called after the scene is fully setup.
		 */
		const sensor = g0.createRaySensor();
		sensor.sense('Ball', {
			mouseDown: (e) => {
				g0.previousEnvironment();
			},
			mouseDrag: (e: THREE.Intersection) => {
				console.dir(e.object.name);
			}
		});
		
		engine.getOverlayCanvases().then((canvases) => {
			const p = new Plotter(canvases[0]);
			p.hideGrids();
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
		}); 
	}

</script>

<EngineComponent>
	<div class="flex flex-col bg-black">
		<div id="container0" class="border border-blue-700 w-fit"></div>
	</div>	
</EngineComponent>




<style>
	div{
		font-family: 'Lato', sans-serif;
		font-size: 0.8rem;
	}
</style>