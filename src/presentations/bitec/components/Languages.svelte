<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { speakerStore, langStore, syncStore } from './languageStore';

	const toggleLang = () => {
		$langStore = $langStore === 'EN' ? 'TH' : 'EN';
	};

	import { connect, disconnect, onMessage, userId } from './pages/MqttPageSync';
	import { SlideToggle, type ModalSettings, Modal } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	let mqttMessage = window.location.hash;

	onMessage((message) => {
		mqttMessage = `${message.payloadString} - ${$langStore}`;

		// guest
		if ($speakerStore === false && $syncStore === true) {
			window.location.assign(message.payloadString);
		}

		// admin
	});

	const modal: ModalSettings = {
		type: 'prompt',
		// Data
		title: 'Speaker',
		//body: 'Provide your first name in the field below.',
		// Populates the input value and attributes
		value: '',
		valueAttr: { type: 'password', minlength: 3, maxlength: 30, required: true },
		// Returns the updated response value
		response: (r: string) => {
			if (r === 'santi/111122133') {
				speakerStore.set(true);
			} else {
				speakerStore.set(false);
			}
		}
	};

	onMount(() => {
		connect();
		checked = true;

		console.log($speakerStore);
	});
	onDestroy(() => disconnect());

	let checked: true;

	$: {
		console.log(checked);
		syncStore.set(checked);
	}
	function onChange(e: any) {
		modalStore.trigger(modal);
	}
</script>

<Modal />

<div class="relative z-[9999] my-1 mx-1 select-none text-gray-400">
	<div class="absolute w-full bg-red-700/0 flex">
		<!--  -->
		<!--  -->
		<div class="flex w-full justify-between items-center px-2">
			<!-- Page URL ---------------------------------------------------------------------------->
			<div class="">
				Page: {mqttMessage}
			</div>
			<!-- User ID ---------------------------------------------------------------------------->
			<div class="">
				{$speakerStore === true ? 'Speaker' : 'Guest'}: {userId}
			</div>
			<!-- Sync button ------------------------------------------------------------------------>
			<div class="flex flex-row justify-center items-center mr-4">
				<span class="mr-2">Sync:</span>
				<SlideToggle
					bind:checked
					on:change={onChange}
					transitionTime={1000}
					name="slider-small"
					active="bg-primary-500"
					size="sm"
				/>
			</div>
		</div>
		<!--  -->
		<!-- EN/TH Button ----------------------------------------------------------------------- -->
		<!--  -->
		<div class="flex justify-end items-center">
			<!-- Black box -->
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
