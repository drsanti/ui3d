<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import Fragment from '../Fragment.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import TextClickBorder from '../items/TextClickBorder.svelte';
	import TitleText from '../items/TitleText.svelte';
	import { langStore } from '../languageStore';
	export let tw = '';
	export let title: 'tech' | 'human' = 'tech';
	export let fragment = true;

	const data = {
		english: {
			title: {
				tech: 'Technologies',
				human: 'Human'
			},
			wwwh: {
				what: 'What?',
				when: 'When?',
				why: 'Why?',
				how: 'How?'
			}
		},
		thai: {
			title: {
				tech: 'เทคโนโลยี',
				human: 'คน/พนักงาน'
			},
			wwwh: {
				what: 'อะไร',
				when: 'เมื่อไร',
				why: 'ทำไม',
				how: 'อย่างไร'
			}
		}
	};
	let content = data.english;
	let _title = content.title.tech;
	let _icons = [icons.pngQtc, icons.pngQtm, icons.pngQtn];
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
		_title = getTitle();
		_icons =
			title === 'tech'
				? [icons.pngQtc, icons.pngAi, icons.pngQtm, icons.pngAr, icons.pngQtn, icons.pngIbt]
				: [icons.pngQtc, icons.pngEnw, icons.pngQtm, icons.pngEnm, icons.pngQtn, icons.pngEnp];
	}

	const getTitle = () => (title === 'tech' ? content.title.tech : content.title.human);

	const twWH = `flex flex-col space-y-10 pt-6`;
</script>

<!-- 3 Columns: What When | Icon Topic | Why How ------------------------->
<div class="grid grid-cols-4 items-center justify-between h-48">
	<!-- C1: What, When -------------------------------------------------->
	<div class="{twWH} pl-20">
		{#if fragment}
			<Fragment>
				<TextClickBorder tw={'text-red-400'}>{content.wwwh.what}</TextClickBorder>
			</Fragment>
			<Fragment>
				<TextClickBorder tw={'text-green-400'}>{content.wwwh.when}</TextClickBorder>
			</Fragment>
		{:else}
			<TextClickBorder tw={'text-red-400'}>{content.wwwh.what}</TextClickBorder>
			<TextClickBorder tw={'text-green-400'}>{content.wwwh.when}</TextClickBorder>
		{/if}
	</div>
	<!-- C2: FadingIcon and "Technologies" ------------------------------->
	<div class="col-span-2 flex flex-col justify-center items-center">
		<div class="mb-12">
			<PngFadeIcons images={_icons} />
		</div>
		<TitleText {tw}>{_title}</TitleText>
	</div>
	<!-- C3: Why, How ---------------------------------------------------->
	<div class="{twWH} text-left">
		{#if fragment}
			<Fragment>
				<TextClickBorder tw={'text-blue-400'}>{content.wwwh.why}</TextClickBorder>
			</Fragment>
			<Fragment>
				<TextClickBorder tw={'text-yellow-400'}>{content.wwwh.how}</TextClickBorder>
			</Fragment>
		{:else}
			<TextClickBorder tw={'text-blue-400'}>{content.wwwh.why}</TextClickBorder>
			<TextClickBorder tw={'text-yellow-400'}>{content.wwwh.how}</TextClickBorder>
		{/if}
	</div>
</div>
