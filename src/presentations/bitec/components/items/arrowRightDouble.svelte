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
	><g transform="translate(24 0) scale(-1 1)"
		><g
			fill="none"
			stroke={color}
			stroke-dasharray="8"
			stroke-dashoffset="8"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			><path d="M12 12L17 7M12 12L17 17"
				><animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					dur="0.3s"
					values="8;0"
				/></path
			><path d="M6 12L11 7M6 12L11 17"
				><animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.3s"
					dur="0.3s"
					values="8;0"
				/></path
			></g
		></g
	></svg
>
