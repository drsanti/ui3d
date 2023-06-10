<script lang="ts">
	import { Toast } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import { engineStore } from './store';
	import type { Resources } from '../ui3d/Graphics/GraphicsResources';
	import Stats from './Stats.svelte';
	import Memory from './Memory.svelte';

	let engine: Engine;

	const toastSettings: ToastSettings = {
		message: '',
		background: 'variant-filled-success',
		timeout: 3000
	};

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
						limit: stats.heap?.limitSize,
						size: stats?.heap?.totalSize,
						alloc: stats.heap?.allocated,
						used: stats.heap?.consumed
					};
				});
			},

			onDestroy: () => {
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

<Stats />
<slot />
<Memory />
<Toast />
