<script lang="ts">
	import { onMount } from 'svelte';

	let rects: DOMRect[] = [];
	let size: { w: number; h: number };
	const getRect = () => {
		const divs = document.querySelectorAll('div');
		const boxes = Array.from(divs).filter((d) => d.classList.contains('ui3d-container'));
		rects = [];
		boxes.map((b) => rects.push(b.getBoundingClientRect()));
		// console.log(rects);
		size = { w: window.innerWidth, h: window.innerHeight };
	};

	onMount(() => {
		console.clear();
		window.addEventListener('resize', getRect);
		getRect();
	});
	$: getW = (i: number) => {
		return rects.length > i ? rects[i].width : '?';
	};
</script>

<div class="flex justify-center font-mono text-xs thai">
	ขนาดต่าง ๆ ของหน้าจอ <br /> xs: {'<640'}, sm: {'>=640'}, md: {'>=768'} lg: {'>=1024'}, xl: {'>=1280'},
	2xl: {'>=1536'}
</div>
<div class="flex justify-center font-mono text-sm mt-4">width: {size?.w}, height: {size?.h}</div>

<div class="flex h-screen justify-center">
	<div class="wrapper sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1">
		<div class="ui3d-container bg-orange-500/50">
			<span class="border-2 p-1 border-blue-500/50">
				{getW(0)}
			</span>
		</div>
		<div class="ui3d-container bg-green-500/50">
			{getW(1)}
		</div>
		<div class="ui3d-container bg-yellow-500/50">
			{getW(2)}
		</div>
		<div class="ui3d-container bg-purple-500/50">
			{getW(3)}
		</div>
	</div>
</div>

<span class="thai">สวัสดี</span>

<style>
	.ui3d-container {
		@apply flex justify-center items-center rounded-md border m-2;
	}
	.wrapper {
		@apply grid w-full m-8 bg-black/20 rounded-xl border border-green-400/50;
	}
</style>
