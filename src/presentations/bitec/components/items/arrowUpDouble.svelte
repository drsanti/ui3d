<script lang="ts">
	export let width = 52;
	export let height = 52;
	export let scale = 1;
	export let color = 'currentColor';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={width * scale}
	height={height * scale}
	viewBox="0 0 24 24"
	><path
		fill={color}
		d="M6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425q.2 0 .375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L12 7.825L8.1 11.7q-.275.275-.688.288T6.7 11.7Zm0 6q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212t.375-.063q.2 0 .375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L12 13.825L8.1 17.7q-.275.275-.688.288T6.7 17.7Z"
	/></svg
>
