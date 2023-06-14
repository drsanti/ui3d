<script lang="ts">
	import ArrowDown from './icons/arrowDown.svelte';
	import ArrowIcon from './icons/arrowIcon.svelte';
	import ArrowUp from './icons/arrowUp.svelte';

	const data = {
		english: {
			topic: 'Sustainability',
			keywords: ['Highest Efficiency', 'Lowest Pollution']
		},
		thai: {
			topic: 'ความยั่งยืน',
			keywords: ['ประสิทธิภาพสูงสุด', 'มลพิษต่ำสุด']
		}
	};

	let info = data.english;
	let lang: 'TH' | 'EN' = 'EN';
	const changeLang = () => {
		lang = lang === 'EN' ? 'TH' : 'EN';
		info = lang === 'EN' ? data.english : data.thai;
	};
</script>

<section data-auto-animate>
	<div data-auto-animate-id="toppic" on:mousedown={changeLang} class="border cursor-pointer">
		<div>
			<p class="text-6xl">{info.topic}</p>
		</div>
	</div>
</section>

<section data-auto-animate>
	<div data-auto-animate-id="toppic" on:mousedown={changeLang} class=" cursor-pointer select-none">
		<div>
			<p class="text-6xl">{info.topic}</p>
			<!-- Horizontal line -->
			<div class="bg-cyan-700 h-1 mx-[10rem]" />
			<!-- Vertical lines -->
			<div class="flex flex-row justify-around gap-4">
				<span class="bg-cyan-700 h-16 w-1" />
				<div class="bg-cyan-700 h-16 w-1" />
			</div>
		</div>
		<!-- Fragment container -->
		<div class="flex flex-row justify-around">
			<!-- Up -->
			<div class="fragment fade-up flex flex-row">
				<span><ArrowIcon type={'Up'} stroke={'#8f8'} /></span>
				<span class="text-right">{info.keywords[0]}</span>
			</div>
			<!-- Down -->
			<div class="fragment fade-up flex flex-row">
				<span><ArrowIcon type={'Down'} stroke={'#f88'} /></span>
				<p class="text-left">{info.keywords[1]}</p>
			</div>
		</div>
	</div>
</section>
