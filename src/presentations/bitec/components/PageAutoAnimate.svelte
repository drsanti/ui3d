<script lang="ts">
	export let id: string | null = null;
	export let animate = true;
	export let restart = false;
</script>

<section
	data-auto-animate={animate || null}
	data-auto-animate-id={id}
	data-auto-animate-restart={restart || null}
>
	<slot />
</section>
