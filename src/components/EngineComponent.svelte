<script lang="ts">
	import { Toast } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import { engineStore } from './store';
	import type { Resources } from '../ui3d/Graphics/GraphicsResources';
	import Stats from './Stats.svelte';
	import Memory from './Memory.svelte';
	import type {
		CubeTextureDownloadInfo,
		ModelDownloadInfo
	} from '../ui3d/Graphics/GraphicsLoader';
	import DownloadInfo from './DownloadInfo.svelte';

	let engine: Engine;

	let resourcesDownloaded = false;

	const toastSettings: ToastSettings = {
		message: '',
		background: 'variant-filled-success',
		timeout: 3000
	};

	let stats: EngineStats;
	let memory: any;

	// let cubeTextureDownloadInfo: CubeTextureDownloadInfo;

	// let modelDownloadInfo: ModelDownloadInfo;

	Engine.init(
		{
			onMount: () => {
				console.log(`%c EngineComponent.svelte loaded`, `background: #228`);
				toastSettings.message = `Engine mounted`;
			},

			onDestroy: () => {
				toastSettings.message = `Engine disposed`;
				Engine.getInstance().stop();
			},

			onLoaded: (_engine: Engine, resources: Resources) => {
				toastSettings.message = `Engine loaded`;
				resourcesDownloaded = true;

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
			}
		},
		{
			onProgress(info: CubeTextureDownloadInfo) {
				// Cube Textures
				progressTextureInfo(info);
			}
		},
		{
			onProgress: (info: ModelDownloadInfo) => {
				// Model
				progressModelInfo(info);
			}
		}
	);

	//- -Used for bindings
	let parentModelDownloadProgress: (info: ModelDownloadInfo) => void;
	let parentCubeTextureDownloadProgress: (info: CubeTextureDownloadInfo) => void;

	function progressModelInfo(info: ModelDownloadInfo) {
		parentModelDownloadProgress(info);
	}

	function progressTextureInfo(info: CubeTextureDownloadInfo) {
		parentCubeTextureDownloadProgress(info);
	}

	// End fo script
</script>

{#if resourcesDownloaded}
	<!-- <Stats /> -->
	<slot />
	<!-- <Memory /> -->
{:else}
	<DownloadInfo
		bind:childModelDownloadProgress={parentModelDownloadProgress}
		bind:childCubeTextureDownloadProgress={parentCubeTextureDownloadProgress}
		{resourcesDownloaded}
	/>
{/if}

<Toast />
