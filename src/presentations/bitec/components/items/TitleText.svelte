<script lang="ts">
	import TextClickFlash from './TextClickFlash.svelte';

	export let tw = 'normal-case';
</script>

<span class="text-7xl normal-case">
	<div class="my-4">
		<TextClickFlash {tw}>
			<slot />
		</TextClickFlash>
	</div>
</span>
