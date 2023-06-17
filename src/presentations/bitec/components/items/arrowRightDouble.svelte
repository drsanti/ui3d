<script lang="ts">
	export let width = 52;
	export let height = 52;
	export let scale = 1;
	export let tw = '';
	export let color = 'currentColor';
</script>

<svg
	class={tw}
	xmlns="http://www.w3.org/2000/svg"
	width={width * scale}
	height={height * scale}
	viewBox="0 0 24 24"
	><path
		fill={color}
		d="M12 12.575q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Zm0 6q-.2 0-.375-.062T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"
	/></svg
>
