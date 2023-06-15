<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { pngIconsArray as iconsArr } from '$lib/assets/icons/png';

	export let width = '15rem';
	export let height = '15rem';
	export let period = 1000;

	let images: HTMLImageElement[] = [];
	let interval: number;
	let imageDisplayA: HTMLDivElement;
	let imageDisplayB: HTMLDivElement;
	let showA = false;
	let showB = false;
	let indexA = 0;
	let indexB = 1;

	let state = 0;

	const removeChildren = (node: HTMLElement) => {
		for (let i = 0; i < node.childNodes.length; i++) {
			let c = node.childNodes[i];
			node.removeChild(c);
		}
	};

	const addNewImage = (node: HTMLElement, index: number) => {
		node.appendChild(images[index]);
	};

	const nextIndex = (currentIndex: number) => {
		return (currentIndex + 1) % images.length;
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

		timeout = setTimeout(() => {
			clearInterval(interval);
		}, 5000);
	};

	const stop = () => {
		clearInterval(interval);
		clearTimeout(timeout);
	};

	onMount(() => {
		iconsArr.forEach((src) => {
			const img = document.createElement('img');
			img.src = src;
			images.push(img);
			showA = true;
			showB = true;
		});

		images.forEach((im) => {
			im.style.width = width;
			im.style.height = height;
		});

		imageDisplayA = document.getElementById('image-display-a') as HTMLDivElement;
		imageDisplayB = document.getElementById('image-display-b') as HTMLDivElement;

		removeChildren(imageDisplayA);
		removeChildren(imageDisplayB);

		imageDisplayA.style.width = images[0].style.width;
		imageDisplayA.style.height = images[0].style.height;

		imageDisplayA.style.zIndex = '100';

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

<div class="flex flex-row justify-center items-center">
	<div
		on:mousedown={action}
		id="image-display-a"
		class="flex {showA
			? `opacity-100`
			: `opacity-0`} transition-opacity duration-500 rotate-back-and-forth cursor-pointer"
	/>
	<div
		on:mousedown={action}
		id="image-display-b"
		class="flex {showB
			? `opacity-100`
			: `opacity-0`} transition-opacity duration-500 rotate-back-and-forth absolute cursor-pointer"
	/>
</div>

<style>
	.opacity-0 {
		opacity: 0;
	}

	.opacity-100 {
		opacity: 1;
	}
</style>
