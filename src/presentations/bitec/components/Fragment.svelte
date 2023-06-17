<script lang="ts">
	import type { FragmentFadeType } from './FragmentFadeType';
	export let index: number | null = null; // Fragment index
	export let fadeType: FragmentFadeType = 'fade-up';
	export let tw = '';
</script>

<div class="fragment {fadeType} {tw}" data-fragment-index={index}>
	<slot />
</div>
