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
	import { techIconsArray, techIconsList } from '$lib/assets/icons/png/tech';
	import Fragment from '../Fragment.svelte';

	let topicData = topic.english;
	let techData = tech.english;
	let title = tech.title.english;
	$: {
		topicData = $langStore === 'EN' ? topic.english : topic.thai;
		techData = $langStore === 'EN' ? tech.english : tech.thai;
		title = $langStore === 'EN' ? tech.title.english : tech.title.thai;
	}

	const tw = ' border-4 border-gray-500/50 rounded-full bg-black/50 mr-4 my-1 px-3 h-24 hover:border-yellow-300/50 hover:bg-red-600/20';
	const twg = 'text-gray-400 text-[2.0rem] pt-[0.8rem] ml-1';
</script>

<PageAutoAnimate>
	<PageVertical>
		<IconTop icon={icons.pngFbot} scale={2}>
			<TitleText>{topicData.title}</TitleText>
		</IconTop>
	</PageVertical>
	<PageVertical>
		<IconTop tw={'text-[3rem]'} icon={icons.pngJig}>
			<div class="flex flex-row">
				<span>{title}</span>
				<span class={twg}>(G1/4)</span>
			</div>
		</IconTop>
		<div class="flex flex-col ml-20 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={techIconsList.ele}>{techData.ele}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.emb}>{techData.emb}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.iot}>{techData.iot}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.rbt}>{techData.rbt}</IconLeft>
		</div>
	</PageVertical>
	<PageVertical>
		<IconTop tw={'text-[3rem]'} icon={icons.pngJig}>
			<div class="flex flex-row">
				<span>{title}</span>
				<span class={twg}>(G2/4)</span>
			</div>
		</IconTop>
		<div class="flex flex-col ml-40 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={techIconsList.ai}>{techData.ai}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.ml}>{techData.ml}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.ccs}>{techData.ccs}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.dma}>{techData.dma}</IconLeft>
		</div>
	</PageVertical>
	<PageVertical>
		<IconTop tw={'text-[3rem]'} icon={icons.pngJig}>
			<div class="flex flex-row">
				<span>{title}</span>
				<span class={twg}>(G3/4)</span>
			</div>
		</IconTop>
		<div class="flex flex-col ml-40 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={techIconsList.vr}>{techData.vr}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.ar}>{techData.ar}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.dt}>{techData.dt}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.cps}>{techData.cps}</IconLeft>
		</div>
	</PageVertical>
	<PageVertical>
		<IconTop tw={'text-[3rem]'} icon={icons.pngJig}>
			<div class="flex flex-row">
				<span>{title}</span>
				<span class={twg}>(G4/4)</span>
			</div>
		</IconTop>
		<div class="flex flex-col ml-40 text-[2rem]">
			<IconLeft scale={0.5} {tw} icon={techIconsList.cbm}>{techData.cbm}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.hmc}>{techData.hmc}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.eft}>{techData.eft}</IconLeft>
			<IconLeft scale={0.5} {tw} icon={techIconsList.sci}>{techData.sci}</IconLeft>
		</div>
	</PageVertical>
</PageAutoAnimate>
