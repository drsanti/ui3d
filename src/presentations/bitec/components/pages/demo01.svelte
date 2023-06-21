<script lang="ts">
	import EngineComponent from '../../../../components/EngineComponent.svelte';
	import GraphicsComponent from '../../../../components/GraphicsComponent.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PageVertical from '../PageVertical.svelte';
</script>

<div id="container0" class="border border-blue-700 w-fit" />

<PageAutoAnimate>
	<EngineComponent>
		<PageVertical>
			<div class="flex justify-evenly items-center flex-row m-4 mt-12">
				<GraphicsComponent modelId={2} width={512} height={512} />
			</div>
			<div class="flex justify-evenly items-center flex-row m-4">
				<GraphicsComponent modelId={1} width={512} height={512} />
				<GraphicsComponent modelId={0} width={512} height={512} />
			</div>
		</PageVertical>

		<PageVertical>
			<div class="flex justify-evenly items-center mx-4">
				<GraphicsComponent modelId={2} width={1200} height={600} />
			</div>
			<div class="flex justify-between items-center flex-row my-4 mx-0 px-0">
				<GraphicsComponent modelId={1} width={400} height={400} />
				<GraphicsComponent modelId={0} width={400} height={400} />
			</div>
		</PageVertical>
	</EngineComponent>
</PageAutoAnimate>

<style>
	div {
		font-family: 'Lato', sans-serif;
		font-size: 0.8rem;
	}
</style>
