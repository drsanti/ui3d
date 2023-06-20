<script>
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import IconTop from '../items/IconTop.svelte';
	import { langStore } from '../languageStore';
	import TextClickFlash from '../items/TextClickFlash.svelte';

	const data = {
		english: 'Thank You',
		thai: `ขอบคุณครับ`
	};

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
</script>

<PageAutoAnimate>
	<IconTop icon={icons.robotThanks} scale={3}>
		<TextClickFlash tw={'text-[4rem] mt-8'}>{content}</TextClickFlash>
	</IconTop>
</PageAutoAnimate>
