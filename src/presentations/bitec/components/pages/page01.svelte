<!-- Title Page -->
<script lang="ts">
	//

	import Fragment from '../Fragment.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import TitleText from '../items/TitleText.svelte';
	import { data } from './topic.data';
	import { langStore } from '../languageStore';
	import DrSantiInfo from '../items/DrSantiInfo.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import PageVertical from '../PageVertical.svelte';

	import santi from '$lib/assets/images/santi_nuratch.jpg';
	import PngIcon from '../items/PngIcon.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
</script>

<PageAutoAnimate>
	<PageVertical>
		<PngFadeIcons />
		<div class="h-1 bg-green-600/50 mx-32 my-12" />
		<TextClickFlash tw={'text-7xl'}>
			{content.title}
		</TextClickFlash>
		<Fragment>
			<TextClickFlash>
				<p>{content.subtitle}</p>
			</TextClickFlash>
		</Fragment>
	</PageVertical>

	<PageVertical tw={'text-[1.8rem]'}>
		<div class="flex justify-center">
			<div class="relative w-[256px] h-[256px]">
				<img
					class="border-8 border-gray-300/30 rounded-full absolute inset-0 object-cover object-top w-full h-full"
					src={santi}
					alt=""
				/>
			</div>
		</div>
		<div class="h-4" />
		<DrSantiInfo />
	</PageVertical>
</PageAutoAnimate>
