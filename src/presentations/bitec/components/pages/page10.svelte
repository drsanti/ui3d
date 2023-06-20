<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import { langStore } from '../languageStore';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import IconBlock from '../items/IconBlock.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import Fragment from '../Fragment.svelte';
	import PageVertical from '../PageVertical.svelte';
	import IconTop from '../items/IconTop.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import ArrowDouble from '../items/arrowDouble.svelte';
	import BlockSpinners from '../items/BlockSpinners.svelte';

	const data = {
		english: {
			titles: {
				winner: 'The winner possesses both<br>accurate and sufficient data',
				ai: 'Artificial Intelligence (AI)',
				success: 'Success factors in manufacturing AI'
			},
			names: {
				cps: 'CPS',
				ai: 'AI',
				vr: 'VR/AR',
				sensor: 'Sensing',
				info: 'Information',
				data: 'Data',
				dt: 'Digital Twin',
				robot: 'Robot',
				manage: 'Management'
			},
			text: {
				measurement: 'The proper Measurement',
				information: 'The accurate Information',
				ai: 'The superior AI'
			},
			questions: {
				why: 'Why we need the accurate and sufficient data/information?'
			},
			answers: {
				because: 'Because ee need to<br>utilize the data-driven technologies'
			},
			techName: 'Data-driven technologies'
		},
		thai: {
			titles: {
				winner: 'ผู้ชนะคือผู้ที่ครอบครอง<br>ข้อมูลที่แม่นยำและมากพอ',
				ai: 'ปัญญาประดิษฐ์',
				success: 'ตัวแปรสู่ความสำเร็จของเอไอในภาคอุตสาหกรรมฯ'
			},
			names: {
				cps: 'ซีพีเอส',
				ai: 'เอไอ',
				vr: 'วีอาร์/เออาร์',
				sensor: 'การวัดค่า',
				info: 'ข้อมูล',
				data: 'ข้อมูล',
				dt: 'ฝาแฝดดิจิทัล',
				robot: 'หุ่นยนต์',
				manage: 'การจัดการ'
			},
			text: {
				measurement: 'การตรวจวัดที่ดี',
				information: 'ข้อมูลที่แม่นยำ',
				ai: 'เอไอที่ยอดเยี่ยม'
			},
			questions: {
				why: 'ทำไมเราจึงต้องการข้อมูลที่แม่นยำและมากพอ'
			},
			answers: {
				because: 'เพราะว่าเราต้องการใช้ประโยชน์จาก<br>เทคโนโลยีที่ถูกขับโดยข้อมูล'
			},
			techName: 'เทคโนโลยีที่ถูกขับโดยข้อมูล'
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
</script>

<PageAutoAnimate>
	<!-- The winner possesses both accurate and sufficient data.------------------------------------>
	<PageVertical>
		<!-- Fading Icons and Title -->
		<div class="flex flex-col items-center">
			<PngFadeIcons images={[icons.pngWnb, icons.pngWnm, icons.pngWnt]} />
			<TextClickFlash tw={'mt-12'}>
				<span class="text-[3.0rem]">{@html content.titles.winner}</span>
			</TextClickFlash>
			<ArrowDouble arrow={'up'} color="#8f0" tw={'mt-12 mb-8'} />
			<IconTop icon={icons.pngDab}>
				<TextClickFlash>
					{content.names.data}
					{#if $langStore === 'EN'}
						/Information
					{/if}
				</TextClickFlash>
				<BlockSpinners color={'#8cf'} tw={'mt-8'} scale={1.2} />
			</IconTop>
		</div>
	</PageVertical>
</PageAutoAnimate>

<PageAutoAnimate>
	<PageVertical>
		<PngFadeIcons
			images={[
				icons.pngQbg,
				icons.pngQdt,
				icons.pngQtc,
				icons.pngQtn,
				icons.pngQtm,
				icons.pngQyr
			]}
		/>
		<div class="pt-20">
			<TextClickFlash>{@html content.questions.why}</TextClickFlash>
		</div>

		<!-- Because ----------------------------------------------------------------->

		<div class="pt-12">
			<Fragment>
				<div class="flex flex-row justify-center pb-12">
					<ArrowDouble arrow={'down'} color={'#f8f'} />
					<ArrowDouble arrow={'down'} color={'#f8f'} />
					<ArrowDouble arrow={'down'} color={'#f8f'} />
				</div>

				<TextClickFlash tw={'text-green-300'}>
					{@html content.answers.because}
				</TextClickFlash>
			</Fragment>
		</div>
	</PageVertical>
	<PageVertical>
		<!--  -->
		<div class="pb-20">
			<TextClickFlash>
				<span class="text-[5rem]">
					{@html content.techName}
				</span>
			</TextClickFlash>
		</div>
		<!-- CPS -->
		<div class="grid grid-cols-3 grid-rows-2 gap-y-8">
			<Fragment index={2}>
				<IconBlock icon={icons.pngAie} tw={'w-[18rem] border-4 border-orange-500'}>
					{content.names.ai}
				</IconBlock>
			</Fragment>

			<Fragment index={5}>
				<IconBlock icon={icons.pngCps} tw={'w-[18rem] border-4 border-orange-500'}>
					{content.names.cps}
				</IconBlock>
			</Fragment>

			<Fragment index={3}>
				<IconBlock icon={icons.pngDt} tw={'w-[18rem] border-4 border-orange-500'}>
					{content.names.dt}
				</IconBlock>
			</Fragment>

			<Fragment index={4}>
				<IconBlock icon={icons.pngVrh} tw={'w-[18rem] border-4 border-orange-500'}>
					{content.names.vr}
				</IconBlock>
			</Fragment>
			<Fragment index={6}>
				<IconBlock icon={icons.pngBcv} tw={'w-[18rem] border-4 border-orange-500'}>
					{content.names.robot}
				</IconBlock>
			</Fragment>
			<Fragment index={1}>
				<IconBlock
					icon={icons.stockManage}
					tw={'w-[18rem] border-4 border-orange-500'}
				>
					{content.names.manage}
				</IconBlock>
			</Fragment>
		</div>
	</PageVertical>
</PageAutoAnimate>
