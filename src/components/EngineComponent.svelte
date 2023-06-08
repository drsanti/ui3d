<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { Engine } from '../UI3D/Engine';

	import { engineStore } from './store';

	let engine: Engine;

	const unsubscribe = engineStore.subscribe((egn) => {
		engine = egn;
	});

	const t: ToastSettings = {
		message: '',
		timeout: 3000
	};

	let infoMessage: string = 'INFO:';

	Engine.init(
		{
			onMount: () => {
				infoMessage += `<div>Engine mounted</div>`;
				t.message = `Engine mounted`;
				toastStore.trigger(t);
			},

			onLoaded: () => {
				infoMessage += `<div>Engine loaded</div>`;
				t.message = `Engine loaded`;
				toastStore.trigger(t);

				engineStore.set(Engine.getInstance());

				Engine.getInstance().start();
			},

			onDestroy: () => {
				unsubscribe();

				infoMessage += `<div>Engine disposed</div>`;
				t.message = `Engine disposed`;
				toastStore.trigger(t);

				Engine.getInstance().stop();
			}
		},
		{
			onProgress(url, loaded, total, tag) {
				// color = tag;
				infoMessage += `<div class="text-green-400"">${url} ${loaded} ${total} ${tag}</div>`;
			}
		}
	);
</script>

<div class="container flex items-center justify-center h-screen border">
	<div class="main">{@html infoMessage}</div>
</div>

<slot />

<Toast />

<style>
</style>
