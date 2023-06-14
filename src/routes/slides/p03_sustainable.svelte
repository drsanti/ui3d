<script lang="ts">
	import PngIcon from './icons/png/pngIcon.svelte';
	import ArrowIcon from './icons/svg/arrowIcon.svelte';

	import imgAi from '$lib/assets/icons/ai.png';
	import imgAr from '$lib/assets/icons/ar.png';
	import imgCps from '$lib/assets/icons/cps.png';
	import imgDt from '$lib/assets/icons/dt.png';
	import imgEff from '$lib/assets/icons/eff.png';
	import imgEnv from '$lib/assets/icons/env.png';
	import imgSun from '$lib/assets/icons/sun.png';
	import imgBot from '$lib/assets/icons/bot.png';

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

	let info = data.english;
	let lang: 'TH' | 'EN' = 'EN';
	const changeLang = () => {
		lang = lang === 'EN' ? 'TH' : 'EN';
		info = lang === 'EN' ? data.english : data.thai;
	};
</script>

<section data-auto-animate class="">
	<div data-auto-animate-id="wrapper" on:mousedown={changeLang} class=" cursor-pointer select-none">
		<!-- Icon and topic name -->
		<div class="flex flex-col justify-center">
			<div class="flex justify-center">
				<PngIcon imgSrc={imgEnv} />
			</div>
			<p class="text-6xl">{info.topic}</p>
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
				<span class="text-right">{info.keywords[0]}</span>
			</div>
			<!-- Down -->
			<div class="fragment fade-up flex flex-row">
				<span><ArrowIcon type={'Down'} stroke={'#f88'} /></span>
				<p class="text-left">{info.keywords[1]}</p>
			</div>
		</div>
		<!--  -->
		<div class="flex flex-row justify-around">
			<div class="fragment fade-left flex flex-col justify-center items-center">
				<PngIcon imgSrc={imgEff} />
				<p class="text-[1.7rem] text-blue-400">{info.he}</p>
			</div>
			<div class="fragment fade-right flex flex-col justify-center items-center">
				<PngIcon imgSrc={imgSun} />
				<p class="text-[1.7rem] text-blue-400">{info.lp}</p>
			</div>
		</div>
	</div>
</section>
