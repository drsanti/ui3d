<script lang="ts">
	import PngIcon from './icons/png/pngIcon.svelte';
	import ArrowIcon from './icons/svg/arrowIcon.svelte';
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import { langStore } from './icons/languageStore';

	const data = {
		english: {
			topic: 'Sustainability',
			keywords: ['Highest Efficiency', 'Lowest Pollution'],
			he: 'Maximize the Output',
			lp: 'Renewable Energy'
		},
		thai: {
			topic: 'ความยั่งยืน',
			keywords: ['ประสิทธิภาพสูงสุด', 'มลพิษต่ำสุด'],
			he: 'ทำให้ได้ผลลัพธ์ดีที่สุด',
			lp: 'ใช้พลังงานทดแทน'
		}
	};

	$: content = $langStore === 'EN' ? data.english : data.thai;
</script>

<section data-auto-animate class="">
	<div data-auto-animate-id="wrapper" class="select-none">
		<!-- Icon and topic name -->
		<div class="flex flex-col justify-center">
			<div class="flex justify-center">
				<PngIcon src={icons.pngEnv} />
			</div>
			<p class="text-6xl">{content.topic}</p>
		</div>
		<!-- Lines fragment-->
		<div class="fragment">
			<!-- Horizontal line -->
			<div class="bg-white/30 h-1 mx-[10rem]" />
			<!-- Vertical lines -->
			<div class="flex flex-row justify-around gap-4">
				<span class="bg-white/30 h-16 w-1" />
				<div class="bg-white/30 h-16 w-1" />
			</div>
		</div>

		<!-- Fragment container -->
		<div class="fragment fade-up flex flex-row justify-around">
			<!-- Up -->
			<div class="fade-up flex flex-row">
				<span><ArrowIcon type={'Up'} stroke={'#8f8'} /></span>
				<span class="text-right">{content.keywords[0]}</span>
			</div>
			<!-- Down -->
			<div class="fragment fade-up flex flex-row">
				<span><ArrowIcon type={'Down'} stroke={'#f88'} /></span>
				<p class="text-left">{content.keywords[1]}</p>
			</div>
		</div>
		<!--  -->
		<div class="flex flex-row justify-around">
			<div class="fragment fade-left flex flex-col justify-center items-center">
				<PngIcon src={icons.pngEff} />
				<p class="text-[1.7rem] text-blue-400">{content.he}</p>
			</div>
			<div class="fragment fade-right flex flex-col justify-center items-center">
				<PngIcon src={icons.pngSun} />
				<p class="text-[1.7rem] text-blue-400">{content.lp}</p>
			</div>
		</div>
	</div>
</section>
