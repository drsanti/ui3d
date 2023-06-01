
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap, Power2, Power3, Power4, Back, Elastic, Bounce } from 'gsap';
	import { Engine, type EngineStats, THREE } from '../Canvas3D/Engine/Engine';
	import { Graphics } from '../Canvas3D/Graphics/Graphics';
	import { GraphicsRaySensor } from '../Canvas3D/Graphics/GraphicsRaySensor';
	import { Triangle } from 'three';
	import { GraphicsLoader } from '../Canvas3D/Graphics/GraphicsLoader';
	import { text } from '@sveltejs/kit';


	let engine: Engine;

	let stats: EngineStats;

	let heapLimit: number = 0;
	let heapAlloc: number = 0;
	let heapUsed: number = 0;


	onMount(async() => {

		engine = new Engine();

		engine.start();
		engine.onFrame((s: EngineStats) => {
			stats = s;
			heapLimit = engine.getHeapLimit();
			heapAlloc = engine.getHeapAllocated();
			heapUsed = engine.getHeapConsumed();
		});

		
		const model = await Graphics.loadGLTF("cube1.glb");
		const gltf = model.gltf;

		

		let gC = new Graphics(engine, 'container1');
		let gM = new Graphics(engine, 'container2');

		const sceneC  = gC.useScene(gltf, 0);
		const sceneM  = gM.useScene(gltf, 2);

		

		// await gM.setSceneType("park");
		// await gM.setSceneType("snow");
		await gM.setSceneType("park");
		

		
		const sensor = new GraphicsRaySensor(gM);
		sensor.sense("Ball", {
			// mouseMove: (e) => console.log(e)
		});


		let progress: { value: number } = { value: 0 };

		gsap.to(progress, {
			value: Math.PI * 2,
			duration: 2,
			ease: Elastic.easeInOut,
			repeat: -1,
     		yoyo: true,
			onUpdate: () => {
				sceneC.rotation.y = progress.value;
				sceneM .rotation.y = progress.value;
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
		

		<div id="container1" class="border border-blue-700"></div>

		<div id="container2" class="border border-yellow-700"></div>

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
  