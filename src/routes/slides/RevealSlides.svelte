<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';

	// import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/night.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	import Presentation from './Presentation.svelte';
	import Languages from './Languages.svelte';

	onMount(() => {
		const _reveal = new Reveal({
			autoAnimateEasing: 'ease-out',
			autoAnimateDuration: 0.25,
			hash: true,
			controls: true,
			progress: true,
			fragments: true,

			disableLayout: false,
			center: true,
			embedded: false,
			slideNumber: 'c/t'
		});
		_reveal.initialize({
			progress: true,
			plugins: [Markdown, Highlight, Notes]
		});
	});
</script>

<Languages>
	<div class="reveal">
		<div class="slides">
			<Presentation />
		</div>
	</div>
</Languages>

<style>
</style>
