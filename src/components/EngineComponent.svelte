<script lang="ts">
	import { Toast } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Engine, type EngineStats } from '../ui3d/Engine/Engine';
	import { engineStore } from './store';
	import type { Resources } from '../ui3d/Graphics/GraphicsResources';
	import Stats from './Stats.svelte';
	import Memory from './Memory.svelte';
	import type { ModelDownloadInfo } from '../ui3d/Graphics/GraphicsLoader';
	import { action_destroyer } from 'svelte/internal';

	let engine: Engine;

	let downloadInfo: any;

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

			onDestroy: () => {
				toastSettings.message = `Engine disposed`;
				Engine.getInstance().stop();
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
			}
		},
		{
			onProgress(url, loaded, total, tag) {
				addInfo(url, loaded, total, tag);
			}
		},
		{
			onProgress: (info: ModelDownloadInfo) => {
				const msg = `downloading ${info.path} ${(info.loaded / 1e6).toFixed(
					2
				)}MB ${info.percent.toFixed(2)}%`;
				addDownloadInfo(msg);
			}
		}
	);

	let downloadInfoArray: string[] = [];
	let interval: number | undefined = undefined;
	function addDownloadInfo(info: string) {
		downloadInfoArray.push(info);

		const action = () => {
			if (downloadInfoArray.length > 0) {
				downloadInfo = downloadInfoArray.shift();
			} else {
				downloadInfoArray = [];
				clearInterval(interval);
				downloadInfo = 'model downloading completed.';
			}
		};

		if (interval === undefined) {
			console.log(downloadInfoArray.length);
			interval = setInterval(() => action(), 500);
		}

		if (info.includes('100.00%')) {
			clearInterval(interval);
			interval = setInterval(() => action(), 10);
		}
	}

	const infoDivs: HTMLElement[] = [];
	let count = 1;
	function addInfo(url: string, loaded: number, total: number, tag: string) {
		const div = document.createElement('div');
		const sp1 = document.createElement('span');
		const sp2 = document.createElement('span');
		const sp3 = document.createElement('span');
		const sp4 = document.createElement('span');
		sp1.innerHTML = `${url}`;
		sp2.innerHTML = `${tag}`;
		sp3.innerHTML = `${loaded}`;
		sp4.innerHTML = `${total}`;
		div.appendChild(sp1);
		div.appendChild(sp2);
		div.appendChild(sp3);
		div.appendChild(sp4);
		infoDivs.push(div);

		sp1.className = 'px-2 text-green-600';
		sp2.className = 'px-2 text-blue-600';
		sp3.className = 'px-2 text-yellow-600';
		sp4.className = 'px-2 text-cyan-600';

		// console.log(info);
		document.getElementById('downloadInfo')?.appendChild(div);

		setTimeout(() => {
			document.getElementById('downloadInfo')?.removeChild(div);
		}, count * 100);
		count++;
	}
</script>

<div>{downloadInfo}</div>
<Stats />
<slot />
<Memory />
<div id="downloadInfo" />
<Toast />

<style>
	span {
		@apply p-2 m-2;
	}
</style>
