<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';

	// import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/dracula.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	import Presentation from './Presentation.svelte';

	onMount(() => {
		const _reveal = new Reveal({
			autoAnimateEasing: 'ease-out',
			autoAnimateDuration: 0.25,
			hash: true,
			controls: true,
			progress: true,
			fragments: true,
			center: false,

			embedded: true,
			disableLayout: true,
			slideNumber: 'c/t'
		});
		_reveal.initialize({
			progress: true,
			plugins: [Markdown, Highlight, Notes]
		});
	});
</script>

<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
</div>

<style>
</style>
