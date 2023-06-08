


<script lang="ts">

	import { Engine } from "../ui3d/Engine";
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const t: ToastSettings = {
		message: "",
		timeout: 2000,
	};
	// toastStore.trigger(t);

	let infoMessage: string = "INFO:";


	Engine.init({
		
		onMouse: () => {
			infoMessage += `<div>Engine loaded</div>`;
		},
		onDestroy: () =>{
			infoMessage += `<div>Engine disposed</div>`;
		}
	},
	{
		onProgress(url, loaded, total, tag) {
			// color = tag;
			infoMessage += `<div class="text-green-400"">${url} ${loaded} ${total} ${tag}</div>`;
			t.message = `${url} ${loaded} ${total} ${tag}`;
			toastStore.trigger(t);
		},
	})


</script>


<div class="container flex items-center justify-center h-screen border">
	<div class="main">{@html infoMessage}</div>
</div>

<Toast />


<style>

</style>

