<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { langStore } from './languageStore';

	const toggleLang = () => {
		$langStore = $langStore === 'EN' ? 'TH' : 'EN';
	};

	import { connect, disconnect, onMessage, userId } from './pages/MqttPageSync';

	let mqttMessage = window.location.hash;

	onMessage((message) => {
		mqttMessage = `${message.payloadString} - ${$langStore}`;

		// guest
		if ($langStore === 'TH') {
			window.location.assign(message.payloadString);
		}
		// Speaker
		if ($langStore === 'EN') {
			console.log(mqttMessage);
		}
	});

	onMount(() => {
		connect();
	});
	onDestroy(() => disconnect());
</script>

<div class="relative z-[9999] my-1 mx-1 select-none">
	<div class="absolute w-full">
		<div class="flex justify-between text-gray-400">
			<div class="flex justify-start items-center w-[180px] text-left">
				Page: {mqttMessage}
			</div>
			<div class="flex justify-start items-center w-[180px]">
				User: {userId}
			</div>
			<div
				class="flex justify-center items-center w-8 h-8 border border-gray-500 rounded-md bg-black/50"
			>
				<span
					on:mousedown={toggleLang}
					class="text-[1.0rem] text-gray-400 cursor-pointer hover:text-blue-400 active:text-yellow-300"
					>{$langStore}
				</span>
			</div>
		</div>
	</div>
</div>
<slot />
