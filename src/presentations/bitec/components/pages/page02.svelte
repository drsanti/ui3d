<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PageVertical from '../PageVertical.svelte';
	import IconTop from '../items/IconTop.svelte';
	import TitleText from '../items/TitleText.svelte';
	import { langStore } from '../languageStore';
	import { data as topic } from './topic.data';
	import { data as tech } from './technology.data';
	import IconLeft from '../items/IconLeft.svelte';
	import { techIconsList as ic } from '$lib/assets/icons/png/tech';
	import Fragment from '../Fragment.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';

	let topicData = topic.english;
	let techData = tech.english;
	let title = tech.title.english;
	$: {
		topicData = $langStore === 'EN' ? topic.english : topic.thai;
		techData = $langStore === 'EN' ? tech.english : tech.thai;
		title = $langStore === 'EN' ? tech.title.english : tech.title.thai;
	}

	const tw =
		' border-4 border-gray-500/50 rounded-full bg-black/50 mr-4 my-1 px-3 h-24 hover:border-yellow-300/50 hover:bg-red-600/20';
	const twg = 'text-gray-400 text-[2.0rem] pt-[0.8rem] ml-1';
</script>

<PageAutoAnimate>
	<!-- Blue robot and "Factory of the Future" ----------------------------------------->
	<PageVertical>
		<IconTop icon={icons.pngFbot} scale={2}>
			<TitleText>{topicData.title}</TitleText>
		</IconTop>
	</PageVertical>
	<!-- G1/4 --------------------------------------------------------------------------->
	<PageVertical>
		<div class="flex flex-col justify-center items-center mb-12">
			<PngFadeIcons images={[ic.ele, ic.emb, ic.iot, ic.rbt]} />
			<div class="flex flex-row mt-12 text-[4rem] justify-center items-center">
				<span>{title}</span>
				<span class={twg}>(G1/4)</span>
			</div>
		</div>
		<div class="flex flex-col ml-20 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={ic.ele}>{techData.ele}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.emb}>{techData.emb}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.iot}>{techData.iot}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.rbt}>{techData.rbt}</IconLeft>
		</div>
	</PageVertical>
	<!-- G2/4 -------------------------------------------------------------------------->
	<PageVertical>
		<div class="flex flex-col justify-center items-center mb-12">
			<PngFadeIcons images={[ic.ai, ic.ml, ic.ccs, ic.dma]} />
			<div class="flex flex-row mt-12 text-[4rem] justify-center items-center">
				<span>{title}</span>
				<span class={twg}>(G2/4)</span>
			</div>
		</div>

		<div class="flex flex-col ml-40 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={ic.ai}>{techData.ai}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.ml}>{techData.ml}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.ccs}>{techData.ccs}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.dma}>{techData.dma}</IconLeft>
		</div>
	</PageVertical>
	<!-- G3/4 -------------------------------------------------------------------------->
	<PageVertical>
		<div class="flex flex-col justify-center items-center mb-12">
			<PngFadeIcons images={[ic.vr, ic.ar, ic.dt, ic.cps]} />
			<div class="flex flex-row mt-12 text-[4rem] justify-center items-center">
				<span>{title}</span>
				<span class={twg}>(G3/4)</span>
			</div>
		</div>

		<div class="flex flex-col ml-40 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={ic.vr}>{techData.vr}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.ar}>{techData.ar}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.dt}>{techData.dt}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.cps}>{techData.cps}</IconLeft>
		</div>
	</PageVertical>

	<PageVertical>
		<div class="flex flex-col justify-center items-center mb-12">
			<PngFadeIcons images={[ic.cbm, ic.hmc, ic.eft, ic.sci]} />
			<div class="flex flex-row mt-12 text-[4rem] justify-center items-center">
				<span>{title}</span>
				<span class={twg}>(G4/4)</span>
			</div>
		</div>
		<div class="flex flex-col ml-40 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={ic.cbm}>{techData.cbm}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.hmc}>{techData.hmc}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.eft}>{techData.eft}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={ic.sci}>{techData.sci}</IconLeft>
		</div>
	</PageVertical>
</PageAutoAnimate>
