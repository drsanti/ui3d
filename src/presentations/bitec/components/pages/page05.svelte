<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import { langStore } from '../languageStore';
	import Fragment from '../Fragment.svelte';

	import IconLeft from '../items/IconLeft.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import PageVertical from '../PageVertical.svelte';
	import Questions from './questions.svelte';
	import PngIcon from '../items/PngIcon.svelte';
	import ArrowDownDouble from '../items/arrowDownDouble.svelte';

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
			],
			qa: ['How many questions are there?', 'What are the answers?']
		},
		thai: {
			title: 'เทคโนโลยี',
			wwwh: {
				what: 'อะไร',
				when: 'เมื่อไร',
				why: 'ทำไม',
				how: 'อย่างไร'
			},
			questions: [
				'มีเทคโนโลยีอะไรบ้างที่เรากำลังใช้<br>ประโยชน์อยู่ตอนนี้',
				'ทำไมเราถึงต้องการเทคโนโลยีใหม่<br>ในเมื่อทุกอย่างยังทำงานได้ดี',
				'เมื่อไรเราจะใช้เทคโนโลยีใหม่<br>ในหน่วยงาน/โรงงานของเรา',
				'เทคโนโลยีจะมาเพิ่มประสิทธิภาพและ<br>ความสามารถการผลิตได้อย่างไร'
			],
			qa: ['ณ ตอนนี้เรามีทั้งหมดกี่คำถาม', 'คำตอบของคำถามเหล่านั้นคืออะไร']
		}
	};

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
	const twWH = `flex flex-col space-y-10 pt-6`;
</script>

<PageAutoAnimate>
	<PageVertical>
		<!-- Question Component -------------------------------------------------->
		<Questions title={'tech'} fragment={true} />

		<!-- Horizontal line ----------------------------------------------------->
		<Fragment>
			<div class="bg-[#f85] h-1 mt-4 mx-28" />
		</Fragment>

		<!-- 4 Questions --------------------------------------------------------->
		<div class="text-[2rem] grid grid-rows-4 gap-y-0 mt-4 ml-28">
			{#each content.questions as q}
				<Fragment>
					<IconLeft icon={icons.pngQdt} scale={0.7}>
						<TextClickFlash>{@html q}</TextClickFlash>
					</IconLeft>
				</Fragment>
			{/each}
		</div>
	</PageVertical>
	<PageVertical>
		<Questions title={'tech'} fragment={false} />
		<Fragment>
			<div class="bg-[#f85] h-1 mt-4 mx-28" />
			<div class="flex flex-row justify-evenly">
				<ArrowDownDouble color={'#f85'} scale={2} />
				<ArrowDownDouble color={'#f85'} scale={2} />
			</div>
		</Fragment>
		<div class="flex flex-col justify-center items-start pl-32 py-2">
			<Fragment>
				<IconLeft scale={0.7} icon={icons.pngQtm}>
					<TextClickFlash>{content.qa[0]}</TextClickFlash>
				</IconLeft>
			</Fragment>
			<Fragment>
				<IconLeft scale={0.7} icon={icons.pngQyr}>
					<TextClickFlash>{content.qa[1]}</TextClickFlash>
				</IconLeft>
			</Fragment>
		</div>
	</PageVertical>
</PageAutoAnimate>
