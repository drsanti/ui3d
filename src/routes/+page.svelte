<script lang="ts">
	import { onMount } from 'svelte';
	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import EngineComponent from '../components/EngineComponent.svelte';
	import GraphicsComponent from '../components/GraphicsComponent.svelte';

	onMount(() => console.log(`%c page.svelte loaded`, `background: #228`));

	// onMount(() => {
	// 	const engine = Engine.getInstance();
	// 	engine.start();
	// 	engine.start();
	// 	engine.start();
	// 	engine.onFrame((s: EngineStats) => {
	// 		console.log(s.fps);
	// 	});
	// });

	// const init = async () => {
	// 	await Engine.init({
	// 		onLoaded(engine, resources) {
	// 			console.log(resources);
	// 		}
	// 	});
	// };

	// init();
</script>

<EngineComponent>
	<GraphicsComponent modelId={2} />
	<GraphicsComponent modelId={0} />
</EngineComponent>
