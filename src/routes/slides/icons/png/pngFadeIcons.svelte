<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { pngIconsList as icons } from '$lib/assets/icons/png';

	export let width = '15rem';
	export let height = '15rem';
	export let period = 1000;

	let imagesStore: HTMLDivElement;
	let images: HTMLImageElement[] = [];
	let interval: number;
	let imageDisplayA: HTMLDivElement;
	let imageDisplayB: HTMLDivElement;
	let showA = false;
	let showB = false;
	let indexA = 0;
	let indexB = 1;
	onMount(() => {
		imagesStore = document.getElementById('image-container') as HTMLDivElement;
		images = Array.from(imagesStore.querySelectorAll('img'));
		console.log(images);

		images.forEach((im) => {
			im.style.width = width;
			im.style.height = height;
		});

		imageDisplayA = document.getElementById('image-display-a') as HTMLDivElement;
		imageDisplayB = document.getElementById('image-display-b') as HTMLDivElement;

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

		removeChildren(imagesStore);
		// document.body.removeChild(imagesStore);

		removeChildren(imageDisplayA);
		removeChildren(imageDisplayB);

		imageDisplayA.style.width = images[0].style.width;
		imageDisplayA.style.height = images[0].style.height;

		let state = 0;

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
		interval = setInterval(() => {
			fadeImage();
		}, period);

		fadeImage();
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="flex flex-row justify-center items-center m-4">
	<div
		id="image-display-a"
		class="flex {showA
			? `opacity-100`
			: `opacity-0`} transition-opacity duration-500 rotate-back-and-forth"
	/>
	<div
		id="image-display-b"
		class="flex {showB
			? `opacity-100`
			: `opacity-0`} transition-opacity duration-500 rotate-back-and-forth absolute"
	/>
</div>

<div id="image-container" class="hidden">
	<div>
		<img src={icons.pngAi} alt="ai" />
		<img src={icons.pngAr} alt="" />
		<img src={icons.pngBot} alt="" />
		<img src={icons.pngCps} alt="" />
		<img src={icons.pngDt} alt="" />
		<img src={icons.pngEff} alt="" />
		<img src={icons.pngEnv} alt="" />
		<img src={icons.pngSun} alt="" />
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
