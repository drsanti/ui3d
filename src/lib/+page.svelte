<script lang="ts">

	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import Scene from '../ui3d/Components/scene.svelte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	

	let stats: EngineStats;
	let heapLimit: number = 0;
	let heapAlloc: number = 0;
	let heapUsed: number = 0;

	let engine: Engine;

	Engine.init().then((instance: Engine) => {
		
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
				g1.nextEnvironment();
			},
			mouseDrag: (e: THREE.Intersection) => {
				console.dir(e.object.name);
			}
		});

		const D = 20;
		g0.setSize(D * 16, D * 9);

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
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<div class="flex flex-col space-y-5">
		<div class="heap">
			frames: {stats?.frames} delta: {stats?.delta.toFixed(3)} load: {stats?.load.toFixed(3)} fps: {stats?.fps.toFixed(
				2
			)}
		</div>

		<div id="container0" class="border border-blue-700 w-fit" />

		<div id="container1" class="border border-yellow-700 w-fit" />

		<!-- <div id="d2">Hello I am Child div</div> -->

		{#if engine}
			<Scene {engine} />
		{/if}
	</div>
	<div>
		<div class="heap">HeapLimit: {(heapLimit / 1e6).toFixed(2)}MB</div>
		<div class="heap">HeapSize: {heapAlloc.toFixed(4)}%</div>
		<div class="heap">HeapUsed: {heapUsed.toFixed(4)}%</div>
	</div>
</div>

<style>
	.heap {
		font-family: 'Lato', sans-serif;
		font-size: 0.8rem;
	}

	div {
		/* border: 1px solid red; */
	}

	canvas {
		border: 4px solid yellow;
	}
</style>
