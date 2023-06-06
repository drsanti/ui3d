
<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { gsap, Power2, Power3, Power4, Back, Elastic, Bounce } from 'gsap';
	import type { Engine } from "../Engine/Engine";

	export let engine: Engine;

	let containerId = `containerId-${Math.random().toFixed(4)}`;

    onMount( async () => {

		const graphics = engine.createGraphics(containerId);
		const scene = graphics.useScene(engine.getResources().glTFs[0], 2);
		graphics.nextEnvironment()

		const sensor = graphics.createRaySensor();
		sensor.sense("Ball", {
			mouseDown: (e) => graphics.previousEnvironment()
		});

		let progress: { value: number } = { value: 0 };
		gsap.to(progress, {
			value: Math.PI * 2,
			duration: 2,
			ease: Back.easeInOut,
			repeat: -1,
     		yoyo: true,
			onUpdate: () => {
				scene.rotation.y = progress.value;
			},
			onComplete: () => {

			},
		});
    });

	onDestroy(()=>{
		engine?.stop();
	})


</script>

<div id={containerId} class="border border-yellow-400 w-fit">
	<span class="flex bg-black w-fill p-2 opacity-20 z-auto">
		Additional Scene
	</span>
</div>
