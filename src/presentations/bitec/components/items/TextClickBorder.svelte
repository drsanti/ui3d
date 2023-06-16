<script lang="ts">
	import { Engine } from '../../../../ui3d/Engine/Engine';

	export let tw = '';
	const toggle = () => {
		start();
	};

	let spId = `span-${Math.random().toFixed(4)}`;
	let dir = 1;
	const start = () => {
		const sp = document.getElementById(spId) as HTMLSpanElement;
		Engine.getInstance().createTween({
			firstValue: 0,
			lastValue: 1,
			yoyo: true,
			ease: '"power2.inOut"',
			repeat: 1,
			duration: 0.25,
			onUpdate: (v) => {
				if (v < 0) return;
				sp.style.background = `rgba(0, 0, 0, ${v})`;
				sp.style.border = `2px solid rgba(${v * 200}, ${50 + v * 200}, 0, ${v})`;
			},
			onComplete: () => {
				sp.style.border = '0px';
				sp.style.background = `rgba(0, 0, 0, ${0})`;
			}
		});
	};
</script>

<span id={spId} class="{tw} px-4 rounded-2xl select-none cursor-pointer" on:mousedown={toggle}>
	<slot />
</span>
