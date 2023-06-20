<script>
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import IconTop from '../items/IconTop.svelte';
</script>

<PageAutoAnimate>
	<IconTop icon={icons.demoClick} scale={3} />
</PageAutoAnimate>
