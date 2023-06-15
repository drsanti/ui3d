<script lang="ts">
	import type { FragmentFadeType } from './FragmentFadeType';
	export let fadeType: FragmentFadeType = 'fade-up';
	export let tw = '';
</script>

<div class="fragment {fadeType} {tw}">
	<slot />
</div>
