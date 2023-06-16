<script lang="ts">
	import chroma from 'chroma-js';
	import { Engine } from '../../../../ui3d/Engine/Engine';
	export let duration = 0.5;
	export let tw = '';
	const toggle = () => {
		start();
	};

	let spId = `span-text-highlight-${Math.random().toFixed(4)}`;
	let color: string;
	const _d = (alpha: number, f: number) => {
		return (Math.sin(alpha * f * Math.PI * 2) + 1) * 120; // 0-240
	};
	const start = () => {
		const sp = document.getElementById(spId) as HTMLSpanElement;
		color = sp.style.color;
		Engine.getInstance().createTween({
			firstValue: 0,
			lastValue: 1,
			yoyo: true,
			ease: '"power2.inOut"',
			repeat: 1,
			duration: duration,
			onUpdate: (v) => {
				if (v < 0) return;
				sp.style.color = chroma.hsl((1 - v) * 70, 1, 0.6).hex();
			},
			onComplete: () => {
				sp.style.color = color;
			}
		});
	};
</script>

<span id={spId} class="{tw} px-4 rounded-2xl select-none cursor-pointer" on:mousedown={toggle}>
	<slot />
</span>
