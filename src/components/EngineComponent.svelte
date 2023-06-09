<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import { Linear, Elastic, Back } from 'gsap';

	import { engineStore } from './store';
	import type { Resources } from '../ui3d/Graphics/GraphicsResources';

	let engine: Engine;

	// const unsubscribe = engineStore.subscribe((egn) => {
	// 	engine = egn;
	// });

	const toastSettings: ToastSettings = {
		message: '',
		background: 'variant-filled-success',
		timeout: 3000
	};

	// let infoMessage: string = 'INFO:';
	let stats: EngineStats;
	let memory: any;

	Engine.init(
		{
			onMount: () => {
				console.log(`%c EngineComponent.svelte loaded`, `background: #228`);
				toastSettings.message = `Engine mounted`;
			},

			onLoaded: (_engine: Engine, resources: Resources) => {
				toastSettings.message = `Engine loaded`;

				engine = _engine;
				engineStore.set(engine);

				engine.onFrame((_states: EngineStats) => {
					stats = _states;
					memory = {
						limit: stats.heap?.limitSize, // bytes
						size: stats?.heap?.totalSize,
						alloc: stats.heap?.allocated, // %
						used: stats.heap?.consumed // %
					};
				});
			},

			onDestroy: () => {
				// unsubscribe();
				toastSettings.message = `Engine disposed`;
				Engine.getInstance().stop();
			}
		},
		{
			onProgress(url, loaded, total, tag) {
				//
			}
		}
	);
</script>

{#if stats}
	<div class="flex justify-evenly overflow-hidden p-0 mx-2">
		<div class="stats-container text-yellow-400">
			<span class="stats-item">frames: {stats?.frames}</span>
			<span class="stats-item">limit: {(memory?.limit / 1e6).toFixed(2)}MB</span>
		</div>
		<div class="stats-container text-green-400">
			<span class="stats-item">fps: {stats?.fps.toFixed(2)}</span>
			<span class="stats-item">size: {(memory?.size / 1e6).toFixed(2)}MB</span>
		</div>
		<div class="stats-container text-blue-400">
			<span class="stats-item">delta: {(stats?.delta * 1000).toFixed(2)}ms</span>
			<span class="stats-item">alloc: {memory?.alloc.toFixed(2)}%</span>
		</div>
		<div class="stats-container text-pink-400">
			<span class="stats-item">load: {stats?.load.toFixed(2)}%</span>
			<span class="stats-item">used: {memory?.used.toFixed(2)}%</span>
		</div>
	</div>
{:else}
	<div class="flex justify-center overflow-hidden h-screen items-center bg-green-950">
		<span class="text-yellow-300 text-xl">Initializing...</span>
	</div>
{/if}
<div class="border-t mt-1 border-gray-500 p-0 m-0">
	<slot />
</div>

<Toast />

<style>
	.stats-container {
		@apply flex flex-col border-0 flex-grow;
	}
	.stats-item {
		@apply flex-grow text-xs font-mono;
	}
</style>
