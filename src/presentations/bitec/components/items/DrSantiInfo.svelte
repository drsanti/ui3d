<script lang="ts">
	import { data } from './DrSantiInfo.data';

	let lang: 'EN' | 'TH' = 'EN';
	let content = data.english;
	const toggleLang = () => {
		lang = lang === 'EN' ? 'TH' : 'EN';
		content = lang === 'EN' ? data.english : data.thai;
	};
</script>

<div class="bg-black/50 py-4 mt-4 mx-14 border-2 border-gray-500 rounded-xl relative">
	<!-- Name and email -->
	<div class="grid grid-cols-1">
		<p class="text-[2.5rem]">{content.name}</p>
		<p class="text-[2.0rem]">{content.email}</p>
	</div>
	<!-- Additional information -->
	<div class="grid grid-cols-1 mt-4 text-[1.5rem]">
		<p>{content.dept}</p>
		<p>{content.faculty}</p>
		<p>{content.university}</p>
	</div>
	<!-- EN/TH -->
	<div
		on:mousedown={toggleLang}
		class="absolute flex justify-center items-center w-10 h-10 bg-black/50 border border-gray-500 inset-1 rounded-md text-[1rem] hover:text-blue-500 cursor-pointer select-none"
	>
		{lang}
	</div>
</div>
