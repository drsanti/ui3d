<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import { langStore } from '../languageStore';
	import Fragment from '../Fragment.svelte';

	import IconLeft from '../items/IconLeft.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import PageVertical from '../PageVertical.svelte';
	import Questions from './questions.svelte';
	import ArrowDownDouble from '../items/arrowRightDouble.svelte';

	const data = {
		english: {
			questions: [
				'What are the knowledge and skills<br>that our team needs?',
				'Why is it necessary to improve our<br>knowledge and skills?',
				'When do we provide Reskill/Upskill<br>training to our team?',
				'How long can we operate our business<br>with obsolete knowledge and skills?'
			],
			qa: ['How many questions are there?', 'What are the answers?']
		},
		thai: {
			questions: [
				'มีองค์ความรู้และทักษะอะไรบ้างที่ทีม<br>ของเราจำเป็นต้องมี',
				'ทำไมการพัฒนาองค์ความรู้และทักษะ<br>จึงมีความจำเป็นกับทีมของเรา',
				'เมื่อไรเราจะให้ทีมของเราได้พัฒนา<br>องค์ความรู้และทักษะเหล่านั้น',
				'ด้วยองค์ความรู้และทักษะเดิม ๆ ที่เรามี<br>เราจะทำงานอยู่ได้นานแค่ไหน'
			],
			qa: ['ณ ตอนนี้เรามีทั้งหมดกี่คำถาม', 'คำตอบของคำถามเหล่านั้นคืออะไร']
		}
	};

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}

	// let fragCount = 0;
	// const moveToNextFragment = () => {
	// 	if ($revealStore) {
	// 		$revealStore.nextFragment();
	// 		fragCount++;
	// 	}
	// };

	// const autoPlay = () => {
	// 	const interval = setInterval(() => {
	// 		moveToNextFragment();
	// 		if (fragCount >= 4) {
	// 			clearInterval(interval);
	// 		}
	// 	}, 500);
	// };

	// onMount(() => {
	// 	// Usage
	// 	console.log('onMount');

	// 	revealStore.subscribe((reveal) => {
	// 		reveal?.addEventListener('slidechanged', (event: any) => {
	// 			console.log(event);
	// 			if (event.indexh == 1 && event.indexv == 0) {
	// 				autoPlay();
	// 			}
	// 		});
	// 	});
	// });
</script>

<PageAutoAnimate>
	<PageVertical>
		<!-- Question Component -------------------------------------------------->
		<Questions title={'human'} fragment={true} />

		<!-- Horizontal line ----------------------------------------------------->
		<Fragment>
			<div class="bg-[#88f] h-1 mt-4 mx-28" />
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
		<Questions title={'human'} fragment={false} />

		<Fragment>
			<div class="bg-[#88f] h-1 mt-4 mx-28" />

			<div class="flex flex-row justify-evenly">
				<ArrowDownDouble color={'#88f'} scale={2} />
				<ArrowDownDouble color={'#88f'} scale={2} />
			</div>
		</Fragment>
		<div class="flex flex-col justify-center items-start pl-32 py-2">
			<Fragment>
				<IconLeft scale={0.7} icon={icons.pngQdt}>
					<TextClickFlash>{content.qa[0]}</TextClickFlash>
				</IconLeft>
			</Fragment>
			<Fragment>
				<IconLeft scale={0.7} icon={icons.pngQbg}>
					<TextClickFlash>{content.qa[1]}</TextClickFlash>
				</IconLeft>
			</Fragment>
		</div>
	</PageVertical>
</PageAutoAnimate>
