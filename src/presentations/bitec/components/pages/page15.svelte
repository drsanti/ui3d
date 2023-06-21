<script lang="ts">
	import { onMount } from 'svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PageVertical from '../PageVertical.svelte';

	let videoUrl: string = 'https://www.youtube.com/watch?v=Ya4Z-obAkWA'; // Replace VIDEO_ID with your YouTube video ID

	function getVideoId(url: string): string | null {
		const regex =
			/(?:[?&]v=|\/embed\/|\/\d\/|\/vi?\/|https?:\/\/(?:www\.)?youtube\.com\/(?:v\/|embed\/|watch\?v=|watch\?.+&v=|embed\?v=|youtu\.be\/|watch\?.+&v=))([\w-]{11})(?:$|&|\/|\?|#)/;
		const match = url.match(regex);

		if (match && match[1]) {
			return match[1];
		} else {
			return null;
		}
	}

	onMount(() => {
		// Additional code or logic you want to execute when the component mounts
	});
	let startTime: number = 10;
</script>

<PageAutoAnimate>
	<PageVertical>
		<dir class="flex justify-center items-center">
			<div class="video-container">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					src={`https://www.youtube.com/embed/${getVideoId(
						videoUrl
					)}?autoplay=1&controls=0&loop=1&showinfo=0&mute=1&start=${startTime}&modestbranding=1`}
					frameborder="0"
					allowfullscreen
				/>
			</div>
		</dir>
	</PageVertical>
</PageAutoAnimate>

<style>
	.video-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
