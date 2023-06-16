<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';

	// import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/moon.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import Presentation from './Presentation.svelte';
	import Languages from './Languages.svelte';

	onMount(() => {
		const _reveal = new Reveal({
			controlsTutorial: true,
			maxScale: 1,
			progress: true,
			controlsLayout: 'edges',
			transition: 'convex', // none/fade/slide/convex/concave/zoom
			backgroundTransition: 'none', // none/fade/slide/convex/concave/zoom

			autoAnimateEasing: 'ease-out',
			autoAnimateDuration: 0.8,
			autoAnimateUnmatched: true,
			hash: true,
			controls: true,
			fragments: true,

			disableLayout: false,
			center: true,
			embedded: false,
			slideNumber: 'c/t'
		});
		_reveal.initialize({
			plugins: [Markdown, Highlight, Notes]
		});
	});
</script>

<!-- <EngineComponent> -->
<Languages>
	<div class="reveal">
		<div class="slides">
			<Presentation />
		</div>
	</div>
</Languages>

<!-- </EngineComponent> -->

<style>
	/* .reveal {
		@apply bg-blue-500/20;
	}
	h1 {
		@apply normal-case;
	} */
	/* .slides {
		@apply border-2 rounded-2xl border-gray-500/50;
	} */
</style>
