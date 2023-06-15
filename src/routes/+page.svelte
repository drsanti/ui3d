<script lang="ts">
	import { onMount } from 'svelte';
	import EngineComponent from '../components/EngineComponent.svelte';
	import GraphicsComponent from '../components/GraphicsComponent.svelte';
	import Grids from './grids.svelte';
	import Iphone from './iphone/iphone.svelte';
	import RevealSlides from './slides/RevealSlides.svelte';
	onMount(() => console.log(`%c page.svelte loaded`, `background: #228`));

	import Reveal from '../presentations/bitec/components/Reveal.svelte';
</script>

<!-- <div class="flex flex-col justify-center items-center h-screen w-screen">
	<EngineComponent>
		<GraphicsComponent modelId={2} />
		<GraphicsComponent modelId={0} />
	</EngineComponent>
</div> -->

<!-- <EngineComponent /> -->
<!-- <RevealSlides /> -->
<!-- <Iphone /> -->

<Reveal />
