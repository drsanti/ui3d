<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { pngIconsArray as iconsArr } from '$lib/assets/icons/png';

	export let images: string[] = [];
	export let scale = 1;
	export let width = 256 * scale;
	export let height = 256 * scale;
	export let period = 1000;

	const twWidth = `w-[${width}px]`;
	const twHeight = `h-[${height}px]`;

	const idA = `display-a-${Math.round(Math.random() * 100000)}`;
	const idB = `display-b-${Math.round(Math.random() * 100000)}`;

	export let imgElements: HTMLImageElement[] = [];
	let interval: number;
	let imageDisplayA: HTMLDivElement;
	let imageDisplayB: HTMLDivElement;
	let showA = false;
	let showB = false;
	let indexA = 0;
	let indexB = 0;

	let state = 0;

	const removeChildren = (node: HTMLElement) => {
		for (let i = 0; i < node.childNodes.length; i++) {
			let c = node.childNodes[i];
			node.removeChild(c);
		}
	};

	const addNewImage = (node: HTMLElement, index: number) => {
		node.appendChild(imgElements[index]);
	};

	const nextIndex = (currentIndex: number) => {
		const idx = (currentIndex + 1) % imgElements.length;

		return idx;
	};

	const fadeImage = () => {
		if (state === 0) {
			showA = false;
			removeChildren(imageDisplayB);
			addNewImage(imageDisplayB, indexB);
			indexB = nextIndex(indexB);
			showB = true;
			state++;
		} else if (state === 1) {
			showB = false;
			removeChildren(imageDisplayA);
			addNewImage(imageDisplayA, indexA);
			indexA = nextIndex(indexA);
			showA = true;
			state = 0;
		}
	};

	let timeout = 0;
	const start = () => {
		stop();

		interval = setInterval(() => {
			fadeImage();
		}, period);

		// timeout = setTimeout(() => {
		// 	clearInterval(interval);
		// }, 5000);
	};

	const stop = () => {
		clearInterval(interval);
		clearTimeout(timeout);
	};

	onMount(() => {
		const names = images.length > 0 ? images : iconsArr;

		if (names.length < 2) {
			console.log(`%cRequires 2 or more images.`, `color: #fc2`);
		}

		names.forEach((src) => {
			const img = document.createElement('img');
			img.src = src;
			imgElements.push(img);
			showA = true;
			showB = true;
		});

		imgElements.forEach((im) => {
			im.style.width = `${width}px`;
			im.style.height = `${height}px`;
		});

		imageDisplayA = document.getElementById(idA) as HTMLDivElement;
		imageDisplayB = document.getElementById(idB) as HTMLDivElement;

		removeChildren(imageDisplayA);
		removeChildren(imageDisplayB);

		imageDisplayA.style.width = imgElements[0].style.width;
		imageDisplayA.style.height = imgElements[0].style.height;

		imageDisplayA.style.zIndex = '100';

		indexB = nextIndex(indexB);
		fadeImage();
		start();
	});

	onDestroy(() => {
		removeChildren(imageDisplayA);
		removeChildren(imageDisplayB);
		state = 0;
		showA = showB = false;
		clearInterval(interval);
	});

	const action = () => {
		fadeImage();
		start();
	};
</script>

<div class="flex flex-col justify-end relative items-center p-0 m-0">
	<div class="pb-8 absolute {twWidth} {twHeight}">
		<div on:mousedown={action} id={idA} class="flex {showA ? `opacity-100` : `opacity-0`} transition-opacity duration-500 rotate-back-and-forth cursor-pointer object-contain" />
	</div>
	<div class="absolute {twWidth} {twHeight}">
		<div on:mousedown={action} id={idB} class="flex {showB ? `opacity-100` : `opacity-0`} transition-opacity duration-500 rotate-back-and-forth cursor-pointer object-contain" />
	</div>
</div>

<style>
	.opacity-0 {
		opacity: 0;
	}

	.opacity-100 {
		opacity: 1;
	}
</style>
