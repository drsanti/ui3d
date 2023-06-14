<script lang="ts">
	export let name = 'environment';
	export let width = 128;
	export let height = 128;
	export let scale = 1.0;
</script>

<img src="icons/{name}.png" width={width * scale} height={height * scale} alt="png icon" />
