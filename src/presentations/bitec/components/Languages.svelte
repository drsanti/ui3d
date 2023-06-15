<script lang="ts">
	import { onMount } from 'svelte';
	import { langStore } from './languageStore';

	const toggleLang = () => {
		$langStore = $langStore === 'EN' ? 'TH' : 'EN';
	};
</script>

<div id="box" class="flex absolute justify-end z-[1001] w-full">
	<div
		class="flex justify-center items-center w-8 h-8 border border-gray-500 rounded-md bg-black/50 select-none mr-1 mt-1"
	>
		<span
			on:mousedown={toggleLang}
			class="text-[1.0rem] text-gray-400 cursor-pointer hover:text-blue-400 active:text-yellow-300"
			>{$langStore}
		</span>
	</div>
</div>

<slot />
