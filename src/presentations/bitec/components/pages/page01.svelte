<!-- Title Page -->
<script lang="ts">
	//

	import PngIcon from '../items/PngIcon.svelte';
	import Fragment from '../Fragment.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PageVertical from '../PageVertical.svelte';
	import TitleText from '../items/TitleText.svelte';
	import IconLeft from '../items/IconLeft.svelte';
	import IconTop from '../items/IconTop.svelte';
	import IconRight from '../items/IconRight.svelte';
	import IconBottom from '../items/IconBottom.svelte';
	import EngineComponent from '../../../../components/EngineComponent.svelte';

	import { data } from './topic.data';
	import { langStore } from '../languageStore';
	import DrSantiInfo from '../items/DrSantiInfo.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
</script>

<PageAutoAnimate>
	<PngFadeIcons />
	<div class="h-8" />
	<Fragment>
		<TitleText tw={'mt-32'}>{content.title}</TitleText>
	</Fragment>
	<Fragment>
		<p>{content.subtitle}</p>
	</Fragment>

	<Fragment tw={'text-[1.8rem]'}>
		<DrSantiInfo />
	</Fragment>
</PageAutoAnimate>
