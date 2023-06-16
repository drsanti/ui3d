<script lang="ts">
	import { pngIconsList as icons, pngAi, pngEnv, pngFac, pngSun } from '$lib/assets/icons/png';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import IconTop from '../items/IconTop.svelte';
	import TitleText from '../items/TitleText.svelte';
	import { langStore } from '../languageStore';
	import Fragment from '../Fragment.svelte';
	import IconBottom from '../items/IconBottom.svelte';

	import { data as topic } from './topic.data';
	import { data as smart } from './smart.data';
	import ArrowUp from '../items/arrowUp.svelte';
	import ArrowDown from '../items/arrowDown.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import PageVertical from '../PageVertical.svelte';

	let content = smart.english;
	let topicData = topic.english;
	$: {
		topicData = $langStore === 'EN' ? topic.english : topic.thai;
		content = $langStore === 'EN' ? smart.english : smart.thai;
	}

	const tw = ' border-4 border-gray-500/50 rounded-full bg-black/50 mr-4 my-1 px-3 h-24 hover:border-yellow-300/50 hover:bg-red-600/20';
	const twg = 'text-gray-400 text-[2.0rem] pt-[0.8rem] ml-1';
</script>

<!-- Icon, Title and Subtitle -->
<PageAutoAnimate>
	<PageVertical>
		<IconTop icon={icons.pngIbt} scale={2}>
			<TitleText tw={'text-gray-400'}>{topicData.title}</TitleText>
			<TitleText tw={'text-[3rem] text-gray-400'}>
				{topicData.subtitle}
			</TitleText>
			<Fragment>
				<TitleText tw={'text-[4.5rem]'}>
					{content.topic}
				</TitleText>
			</Fragment>
		</IconTop>
	</PageVertical>

	<PageVertical>
		<PngFadeIcons scale={0.7} images={[icons.pngAr, icons.pngIbt, icons.pngSf, icons.pngAi]} />
		<TitleText tw={'text-[3.7rem]'}>{content.topic}</TitleText>

		<Fragment>
			<div class="mx-40">
				<div class="h-1 bg-yellow-500" />
				<div class="flex flex-row justify-around">
					<div class="w-1 h-[62px] bg-yellow-500" />
					<div class="w-128" />
					<div class="w-1 h-[62px] bg-yellow-500" />
				</div>
			</div>
		</Fragment>

		<!-- Highest Efficiency and Lowest Pollution with Icons -->
		<Fragment>
			<div class="flex flex-row justify-around my-4 text-[3rem]">
				<div class="flex flex-row">
					<IconBottom icon={icons.pngWfb}>{content.keywords[0]}</IconBottom>
				</div>
				<div class="flex flex-row">
					<IconBottom icon={icons.pngVrh}>{content.keywords[1]}</IconBottom>
				</div>
			</div>
		</Fragment>

		<!--  Maximize the Output and Renewable Energy -->
		<Fragment>
			<div class="flex flex-row text-[2rem] justify-around my-2">
				<p>{content.desc[0]}</p>
				<p>{content.desc[1]}</p>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>
