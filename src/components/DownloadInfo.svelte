<script lang="ts">
	import type {
		CubeTextureDownloadInfo,
		ModelDownloadInfo
	} from '../ui3d/Graphics/GraphicsLoader';

	let cubeInfos: string[] = [];
	let modelInfos: string[] = [];

	export let resourcesDownloaded = false;

	let cInfo: string | undefined;
	let mInfo: string | undefined;

	let interval: number | NodeJS.Timer | undefined;
	export const childModelDownloadProgress = (info: ModelDownloadInfo) => {
		modelInfos.push(
			`${info.path}, ${info.percent.toFixed(2)}, ${(info.loaded / 1e6).toFixed(
				2
			)}, ${(info.total / 1e6).toFixed(2)}`
		);
		start();
	};

	export const childCubeTextureDownloadProgress = (
		info: CubeTextureDownloadInfo
	) => {
		cubeInfos.push(
			`${info.tag}, ${info.url}, ${info.loaded.toFixed(2)}, ${info.total}`
		);
		start();
	};

	if (resourcesDownloaded === true) {
		clearInterval(interval);
		interval = undefined;
		console.log('DONE');
	}

	// let counter = 0;
	const start = () => {
		if (interval === undefined) {
			interval = setInterval(() => {
				cInfo = cubeInfos.shift();
				mInfo = modelInfos.shift();

				if (
					resourcesDownloaded === true &&
					cInfo === undefined &&
					mInfo === undefined
				) {
					clearInterval(interval);
					interval = undefined;
					console.log('DONE');
				}
			}, 50);
		}
	};
</script>

<div class="flex h-screen items-center">
	<div
		class="flex bg-black/30 m-8 w-full h-1/3 rounded-xl flex-col justify-center items-center p-3"
	>
		<div>{cInfo !== undefined ? cInfo : 'done'}</div>
		<div>{mInfo !== undefined ? mInfo : 'done'}</div>
		<!-- {#if cubeTextureDownloadInfo && modelDownloadInfo}
			<div class="flex text-red-500">{cubeTextureDownloadInfo?.loaded}</div>
			<div class="flex text-green-500">{modelDownloadInfo?.percent}</div>
		{/if} -->
	</div>
</div>
