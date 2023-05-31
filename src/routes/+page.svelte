
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap, Power2, Power3, Power4, Back, Elastic, Bounce } from 'gsap';
	import { Engine, type EngineStats, THREE } from '../Canvas3D/Engine/Engine';
	import { Graphics } from '../Canvas3D/Graphics/Graphics';
	
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { group_outros } from 'svelte/internal';
	import { RaySensor } from '../Canvas3D/Graphics/RaySensor';

	// const progress = tweened(0, {
	// 	duration: 2000,
	// 	easing: cubicOut
	// });

	let engine: Engine;

	let stats: EngineStats;

	let heapLimit: number = 0;
	let heapAlloc: number = 0;
	let heapUsed: number = 0;

	let loaded: number = 0;

	onMount(async() => {

		engine = new Engine();

		engine.start();

		engine.onFrame((s: EngineStats) => {
			stats = s;
			heapLimit = engine.getHeapLimit();
			heapAlloc = engine.getHeapAllocated();
			heapUsed = engine.getHeapConsumed();
		});

		
		// progress.set(1);

		// let g1 = new Graphics(engine, 'container1');
		let g2 = new Graphics(engine, 'container2');
		let g3 = new Graphics(engine, 'container3');
		// let g4 = new Graphics(engine, 'container4');

		const scene2 = await g2.loadScene("cube1.glb", 1);
		const scene3 = await g3.loadScene("cube1.glb", 0);
	
		
		const sensor = new RaySensor(g3);
		sensor.sense("Sphere", {
			mouseClick: (e) => console.log(e)
		});


		let progress: { value: number } = { value: 0 };

		gsap.to(progress, {
			value: Math.PI * 2,
			duration: 2,
			ease: Elastic.easeInOut,
			repeat: -1, // Repeat indefinitely
     		yoyo: true, // Reverse the animation on each repeat	
			onUpdate: () => {
				scene2.rotation.y = progress.value;
				scene3.rotation.y = progress.value;
			},
			onComplete: () => {

			},
		});



	});
	

</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	
	<!-- <div>loading: {($progress*100).toFixed(2)}</div> -->

	<div class="flex flex-col space-y-5">
		<div class="heap ">frames: {stats?.frames} delta: {stats?.delta.toFixed(3)} load: {stats?.load.toFixed(3)} fps: {stats?.fps.toFixed(2)}</div>
		
		<!-- <div id="container1" class="border border-green-700"></div> -->

		<div id="container2" class="border border-blue-700"></div>

		<div id="container3" class="border border-yellow-700"></div>

		<!-- <div id="container4" class="border border-red-700"></div> -->
	</div>
	<div>
		<div class="heap">HeapLimit: {(heapLimit/1e6).toFixed(2)}MB</div>
		<div class="heap">HeapSize: {heapAlloc.toFixed(4)}%</div>
		<div class="heap">HeapUsed: {heapUsed.toFixed(4)}%</div>
	</div>
</div>



<style>
.heap {
	font-family: 'Lato', sans-serif;
	font-size: 0.8rem;
}
</style>
  