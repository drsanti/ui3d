<script lang="ts">
	import { onMount } from 'svelte';
	import EngineComponent from '../components/EngineComponent.svelte';
	import GraphicsComponent from '../components/GraphicsComponent.svelte';
	import Grids from './grids.svelte';
	import Slides from './slides/slides.svelte';
	import Iphone from './iphone/iphone.svelte';
	onMount(() => console.log(`%c page.svelte loaded`, `background: #228`));
</script>

<!-- <div class="flex flex-col justify-center items-center h-screen w-screen">
	<EngineComponent>
		<GraphicsComponent modelId={2} />
		<GraphicsComponent modelId={0} />
	</EngineComponent>
</div> -->

<EngineComponent>
	<!--  -->
</EngineComponent>

<!-- <Slides /> -->
<!-- <Iphone /> -->
