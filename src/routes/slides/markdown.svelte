<script lang="ts">
	export let name = 'example.md';
	export let external = false;
</script>

{#if external}
	<section data-markdown={name} />
	<span class="h-screen text-red-500">Hello</span>
{:else}
	<section data-markdown>
		<div data-template>
			<slot />
		</div>
	</section>
{/if}
