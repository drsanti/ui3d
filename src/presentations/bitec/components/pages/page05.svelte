<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import TitleText from '../items/TitleText.svelte';
	import { langStore } from '../languageStore';
	import Fragment from '../Fragment.svelte';

	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import IconLeft from '../items/IconLeft.svelte';
	import TextClickBorder from '../items/TextClickBorder.svelte';
	import TextClickHighlight from '../items/TextClickFlash.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';

	const data = {
		english: {
			title: 'Technologies',
			wwwh: {
				what: 'What?',
				when: 'When?',
				why: 'Why?',
				how: 'How?'
			},
			questions: [
				'What technologies are currently<br>utilized in our operations?',
				'Why are we need new technologies even<br>if everything is functioning perfectly?',
				'When will we implement new technologies<br>in our organization?',
				'How do technologies enhance our<br>operational efficiency and productivity?'
			]
		},
		thai: {
			title: 'เทคฌนโลยี',
			wwwh: {
				what: 'อะไร',
				when: 'เมื่อไร',
				why: 'ทำไม',
				how: 'อย่างไร'
			},
			questions: [
				'มีเทคโนโลยีอะไรบ้างที่เรากำลังใช้<br>ประโยชน์อยู่ตอนนี้?',
				'ทำไมเราถึงต้องการเทคโนโลยีใหม่<br>ในเมื่อทุกอย่างยังทำงานได้ดี',
				'เมื่อไรเราจะใช้เทคโนโลยีใหม่<br>ในหน่วยงาน/โรงงานของเรา',
				'เทคโนโลยีจะมาเพิ่มประสิทธิภาพและ<br>ความสามารถการผลิตได้อย่างไร'
			]
		}
	};

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
	const twWH = `flex flex-col space-y-10 pt-6`;
</script>

<!-- Icon, Title and Subtitle -->
<PageAutoAnimate>
	<Fragment>
		<div class="grid grid-cols-3 items-center justify-between h-48">
			<div class={twWH}>
				<Fragment tw={'text-red-400'}>
					<TextClickBorder>{content.wwwh.what}</TextClickBorder>
				</Fragment>
				<Fragment tw={'text-green-400'}>
					<TextClickBorder>{content.wwwh.when}</TextClickBorder>
				</Fragment>
			</div>
			<div class="flex flex-col justify-center items-center">
				<div class="mb-12">
					<PngFadeIcons images={[icons.pngQtc, icons.pngQtm, icons.pngQtn]} />
				</div>
				<TitleText tw={'text-[4rem]'}>Technologies</TitleText>
			</div>
			<div class={twWH}>
				<Fragment tw={'text-blue-400'}>
					<TextClickBorder>{content.wwwh.why}</TextClickBorder>
				</Fragment>
				<Fragment tw={'text-yellow-400'}>
					<TextClickBorder>{content.wwwh.how}</TextClickBorder>
				</Fragment>
			</div>
		</div>
	</Fragment>
	<Fragment>
		<div class="bg-green-200/60 h-1 mt-4 mx-28" />
	</Fragment>

	<div class="text-[2rem] grid grid-rows-4 gap-y-0 mt-4 ml-28">
		{#each content.questions as q}
			<Fragment>
				<IconLeft icon={icons.pngQtn} scale={0.7}>
					<TextClickFlash>{@html q}</TextClickFlash>
				</IconLeft>
			</Fragment>
		{/each}
	</div></PageAutoAnimate
>

<style>
	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	.sc {
		animation: scale 2s infinite;
	}
</style>
