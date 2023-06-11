<script lang="ts">
	import Slide from './slide.svelte';
	import Code from './code.svelte';
	import Markdown from './markdown.svelte';
	import Notes from './notes.svelte';
</script>

<!-- <Slide animate={true} id={'1'} restart={false}>
	<div>Auto-Animate</div>
</Slide>

<Slide animate={true} id={'1'} restart={false}>
	<div class="text-red-500 mt-16">Auto-Animate</div>
</Slide> -->

<!-- Using Vertical Slides -->
<!-- <Slide>Horizontal Slide</Slide>

<Slide>
	<Slide>Vertical Slide 1</Slide>
	<Slide>Vertical Slide 1</Slide>
</Slide> -->

<!-- Using Code -->
<!-- <Slide animate>
	<Code id="code" lines>
		{`
            function love() { }
        `}
	</Code>
</Slide>

<Slide animate>
	<Code id="code" lines>
		{`
            function love() {
                console.log('hello world');   
            }
        `}
	</Code>
</Slide> -->

<!-- Using Transitions -->

<!-- <Slide animate>
	<p class="uppercase">Transitions</p>
	<div id="wrapper" class="flex place-content-center gap-2">
		<div data-id="box-1" class="w-[100px] h-[100px] bg-gray-400" />
		<div data-id="box-2" class="w-[100px] h-[100px] bg-gray-400" />
		<div data-id="box-3" class="w-[100px] h-[100px] bg-gray-400" />
	</div>
</Slide>

<Slide animate>
	<p class="uppercase">Transitions</p>
	<div id="wrapper" class="flex place-content-center gap-8">
		<div data-id="box-1" class="w-[200px] h-[200px] bg-red-400" />
		<div data-id="box-2" class="w-[200px] h-[200px] bg-green-400" />
		<div data-id="box-3" class="w-[200px] h-[200px] bg-blue-400" />
	</div>
</Slide> -->

<!-- Using in-line code animation -->
<!-- <Markdown>
	{`
        ## Markdown
        Hello
        \`\`\`js [1-2|3|4]
        let a = 10;
        let b = 20;
        let c = a + b
        console.log(c);
        \`\`\`
    `}
</Markdown> -->

<Markdown name="example.md" external />

<Slide>
	<h1>Slide</h1>
	<Notes>Notes</Notes>
</Slide>
