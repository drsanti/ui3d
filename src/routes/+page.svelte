<script lang="ts">

	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import Scene from '../ui3d/Components/scene.svelte';
	import { Linear, Elastic, Back } from 'gsap';
	import { Painter } from '../ui3d/Painter/Painter';
	import { Plotter } from '../ui3d/Painter/Plotter';

	let stats: EngineStats;
	let heapLimit: number = 0;
	let heapAlloc: number = 0;
	let heapUsed: number = 0;

	let ready = false;
	let engine: Engine;

	Engine.init().then((instance: Engine) => {
		ready = true;
		engine = instance;
		engine.start();
		engine.onFrame((s: EngineStats) => {
			stats = s;
			heapLimit = engine.getHeapLimit();
			heapAlloc = engine.getHeapAllocated();
			heapUsed = engine.getHeapConsumed();
		});

		let g0 = engine.createGraphics(`container0`);
		let g1 = engine.createGraphics(`container1`);

		g0.nextEnvironment();
		g1.previousEnvironment();

		const glTF = engine.getResources().glTFs[0];

		const s0 = g0.useScene(glTF, 2);
		const s1 = g1.useScene(glTF, 2);

		const sensor = g0.createRaySensor();
		sensor.sense('Ball', {
			mouseDown: (e) => {
				g0.previousEnvironment();
				g1.previousEnvironment();
			},
			mouseDrag: (e: THREE.Intersection) => {
				console.dir(e.object.name);
			}
		});

		const D = 20;
		g0.setSize(D * 16, D * 9);
		g1.setSize(D * 16, D * 9);

		// Engine.updateDOMRect().then(e => console.log(e));
		// engine.getOverlayCanvases().then( (c) => console.log(c));

		g0.getGraphicsCanvas()
			.initialCanvas2D()
			.then((canvas) => {
				// const canvas = g0.getGraphicsCanvas().getOverlayCanvas();
				const context = canvas.getContext('2d');
				const centerX = canvas.width / 2;
				const centerY = canvas.height / 2;
				const radius = 50;
				if (context) {
					context.beginPath();
					context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
					context.closePath();
					context.fillStyle = 'rgba(255, 0, 255, 0.4)'; // Set your desired fill color
					context.fill();
				}
			});

		const tween = engine.createTween({
			firstValue: 0,
			lastValue: Math.PI * 2,
			ease: Back.easeIn,
			yoyo: true,
			repeat: -1,
			duration: 2.5,
			onUpdate: (value: number) => {
				s0.rotation.y = value;
				s1.rotation.y = value * 1.5;
			}
		});
		// tween.repeat(0);
		// tween.kill();


		// setTimeout(() =>{
		// 	const canvases = document.querySelectorAll("canvas");
		// 	console.log(canvases);
		// 	canvases.forEach((c) => {
		// 		const rect = c.getBoundingClientRect();
		// 		console.log(rect);
		// 	})
		// },2000);

		engine.getOverlayCanvases().then( (canvases) => {
			const p = new Plotter(canvases[0]);
			const tween = engine.createTween({
				firstValue: 0,
				lastValue: Math.PI * 2,
				ease: Elastic.easeIn,
				yoyo: true,
				repeat: -1,
				duration: 1.5,
				onUpdate: (value: number) => {
					p.add(value/(Math.PI * 2) * p.getHeight()/2);
				}
			});
			
		});// engine
		



	});
</script>

<!-- {#if ready} -->
	

<div class="{`${ready ? 'border border-red-500' : 'hidden'}`} container h-full mx-auto flex justify-center items-center flex-col">

	<div class="flex flex-col space-y-5">
		<div class="pt-4">
			<span class="heap px-1 text-yellow-400">frames: {stats?.frames}</span>
			<span class="heap px-1 text-pink-400">fps: {stats?.fps.toFixed(3)}</span>
			<span class="heap px-1 text-blue-400">delta: {stats?.delta.toFixed(3)}</span>
			<span class="heap px-1 text-green-400">load: {stats?.load.toFixed(3)}%</span>
		</div>

		<div id="container0" class="border border-blue-700 w-fit" />

		<div id="container1" class="border border-yellow-700 w-fit" />

		<!-- <div id="d2">Hello I am Child div</div> -->

		{#if engine}
			<Scene {engine} />
		{/if}
	</div>
	<div class="py-4">
		<span class="heap text-yellow-400 px-1">HeapLimit: {(heapLimit / 1e6).toFixed(2)}MB</span>
		<span class="heap text-green-400 px-1">HeapSize: {heapAlloc.toFixed(4)}%</span>
		<span class="heap text-pink-400 px-1">HeapUsed: {heapUsed.toFixed(4)}%</span>
	</div>

</div>


<style>
	.heap {
		font-family: 'Lato', sans-serif;
		font-size: 0.8rem;
	}
	canvas{
		@apply border border-2 border-red-500;
	}
</style>
