<!-- <script lang="ts">
	import imgAi from '$lib/assets/icons/ai.png';
	import imgAr from '$lib/assets/icons/ar.png';
	import imgCps from '$lib/assets/icons/cps.png';
	import imgDt from '$lib/assets/icons/dt.png';
	import imgEff from '$lib/assets/icons/eff.png';
	import imgEnv from '$lib/assets/icons/env.png';
	import imgSun from '$lib/assets/icons/sun.png';
	import imgBot from '$lib/assets/icons/bot.png';

	const imgs = [imgAi, imgAr, imgBot, imgCps, imgDt, imgEff, imgEnv, imgSun];
	console.dir(imgs);

	// import { imageList } from '../../../../lib/assets/icons';

	export let name: 'ai' | 'ar' | 'bot' | 'cps' | 'dt' | 'eff' | 'env' | 'sun';
	export let width = 128;
	export let height = 128;
	export let scale = 1.0;

	let target = imgs.filter((x) => x.includes(`assets/${name}.`) && x.endsWith('.png'))[0];
	console.log(name, target);
</script>

<img src={target} width={width * scale} height={height * scale} alt="png icon" /> -->

<script lang="ts">
	// import imgAi from '$lib/assets/icons/ai.png';
	// import imgAr from '$lib/assets/icons/ar.png';
	// import imgCps from '$lib/assets/icons/cps.png';
	// import imgDt from '$lib/assets/icons/dt.png';
	// import imgEff from '$lib/assets/icons/eff.png';
	// import imgEnv from '$lib/assets/icons/env.png';
	// import imgSun from '$lib/assets/icons/sun.png';
	// import imgBot from '$lib/assets/icons/bot.png';

	export let imgSrc: any;
	export let width = 128;
	export let height = 128;
	export let scale = 1.0;
</script>

<img src={imgSrc} width={width * scale} height={height * scale} alt="png icon" />
