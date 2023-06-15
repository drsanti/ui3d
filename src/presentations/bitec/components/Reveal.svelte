<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';

	// import 'reveal.js/dist/reset.css';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/night.css';
	import Presentation from './Presentation.svelte';
	import Languages from './Languages.svelte';
	import EngineComponent from '../../../components/EngineComponent.svelte';
	// import 'reveal.js/plugin/highlight/monokai.css';

	onMount(() => {
		const _reveal = new Reveal({
			autoAnimateEasing: 'ease-out',
			autoAnimateDuration: 0.8,
			autoAnimateUnmatched: true,
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
	.reveal {
		@apply bg-blue-500/20;
	}
	.slides {
		@apply border-2 rounded-2xl border-gray-500/50;
	}
</style>
