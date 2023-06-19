<script lang="ts">
	import {
		pngIconsList as icons,
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
	import { data as sustainableData } from './sustainable.data';
	import ArrowUp from '../../../../routes/slides/icons/svg/arrowUp.svelte';
	import ArrowDown from '../../../../routes/slides/icons/svg/arrowDown.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import PageVertical from '../PageVertical.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';

	let content = sustainableData.english;
	let topicData = topic.english;
	$: {
		topicData = $langStore === 'EN' ? topic.english : topic.thai;
		content = $langStore === 'EN' ? sustainableData.english : sustainableData.thai;
	}

	const tw =
		' border-4 border-gray-500/50 rounded-full bg-black/50 mr-4 my-1 px-3 h-24 hover:border-yellow-300/50 hover:bg-red-600/20';
	const twg = 'text-gray-400 text-[2.0rem] pt-[0.8rem] ml-1';
</script>

<!-- Icon, Title and Subtitle -->
<PageAutoAnimate>
	<PageVertical>
		<IconTop icon={icons.pngFac} scale={2}>
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
			images={[icons.pngFac, icons.pngEnv, icons.pngEff, icons.pngSun]}
		/>
		<TextClickFlash tw={'text-[3.7rem]'}>{content.topic}</TextClickFlash>

		<Fragment>
			<div class="mx-40">
				<div class="h-1 bg-blue-500" />
				<div class="flex flex-row justify-around">
					<div class="w-1 h-[62px] bg-blue-500" />
					<div class="w-128" />
					<div class="w-1 h-[62px] bg-blue-500" />
				</div>
			</div>
		</Fragment>

		<!-- Highest Efficiency and Lowest Pollution with Icons -->
		<Fragment>
			<div class="flex flex-row justify-around my-4">
				<div class="flex flex-row">
					<ArrowUp stroke={'#5f8'} />
					<IconBottom icon={icons.pngEff}>{content.keywords[0]}</IconBottom>
				</div>
				<div class="flex flex-row">
					<ArrowDown stroke={'#f85'} />
					<IconBottom icon={icons.pngSun}>{content.keywords[1]}</IconBottom>
				</div>
			</div>
		</Fragment>

		<!--  Maximize the Output and Renewable Energy -->
		<Fragment>
			<div class="flex flex-row text-[2rem] justify-around my-2">
				<p>{content.he}</p>
				<p>{content.lp}</p>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>
