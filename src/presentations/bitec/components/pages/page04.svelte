<script lang="ts">
	import {
		pngIconsList as icons,
		pngAi,
		pngEnv,
		pngFac,
		pngSun
	} from '$lib/assets/icons/png';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import IconTop from '../items/IconTop.svelte';
	import TitleText from '../items/TitleText.svelte';
	import { langStore } from '../languageStore';
	import Fragment from '../Fragment.svelte';
	import IconBottom from '../items/IconBottom.svelte';

	import { data as topic } from './topic.data';
	import { data as smart } from './smart.data';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import PageVertical from '../PageVertical.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';

	let content = smart.english;
	let topicData = topic.english;
	$: {
		topicData = $langStore === 'EN' ? topic.english : topic.thai;
		content = $langStore === 'EN' ? smart.english : smart.thai;
	}

	const tw =
		' border-4 border-gray-500/50 rounded-full bg-black/50 mr-4 my-1 px-3 h-24 hover:border-yellow-300/50 hover:bg-red-600/20';
	const twg = 'text-gray-400 text-[2.0rem] pt-[0.8rem] ml-1';
	const twLc = 'bg-yellow-500/80';
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
				<TextClickFlash tw={'text-[4.5rem]'}>
					{content.topic}
				</TextClickFlash>
			</Fragment>
		</IconTop>
	</PageVertical>

	<PageVertical>
		<PngFadeIcons
			scale={0.7}
			images={[icons.pngAr, icons.pngIbt, icons.pngSf, icons.pngAi]}
		/>
		<TextClickFlash tw={'text-[3.7rem]'}>{content.topic}</TextClickFlash>

		<Fragment>
			<div class="mx-40">
				<div class="h-1 {twLc}" />
				<div class="flex flex-row justify-around">
					<div class="w-1 h-[62px] {twLc}" />
					<div class="w-128" />
					<div class="w-1 h-[62px] {twLc}" />
				</div>
			</div>
		</Fragment>

		<!-- Technologies | Human -->
		<Fragment>
			<div class="flex flex-row justify-around my-4 text-[3rem]">
				<div class="flex flex-row ml-10">
					<IconBottom icon={icons.pngWfb}>{content.keywords[0]}</IconBottom>
				</div>
				<div class="flex flex-row mr-20">
					<IconBottom icon={icons.pngVrh}>{content.keywords[1]}</IconBottom>
				</div>
			</div>
		</Fragment>

		<!--  Applying | Knowledge -->
		<Fragment>
			<div class="flex flex-row text-[2rem] justify-around my-2">
				<div class="ml-10">{content.desc[0]}</div>
				<div class="mr-16">{content.desc[1]}</div>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>
