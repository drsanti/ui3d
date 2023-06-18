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
				vr: 'VR',
				sensor: 'Sensing',
				info: 'Information',
				data: 'Data'
			},
			text: {
				measurement: 'The proper Measurement',
				information: 'The accurate Information',
				ai: 'The superior AI'
			},
			questions: {
				why: 'Why we need the accurate and sufficient data/information?'
			}
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
				vr: 'วีอาร์',
				sensor: 'การวัดค่า',
				info: 'ข้อมูล',
				data: 'ข้อมูล'
			},
			text: {
				measurement: 'การตรวจวัดที่ดี',
				information: 'ข้อมูลที่แม่นยำ',
				ai: 'เอไปที่ยอดเยี่ยม'
			},
			questions: {
				why: 'ทำไมเราจึงต้องการข้อมูลที่แม่นยำและมากพอ'
			}
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
			<TextClickFlash>{content.questions.why}</TextClickFlash>
		</div>
	</PageVertical>
	<PageVertical>
		<!-- CPS -->
		<Fragment index={1}>
			<div class="flex flex-col mt-2 items-center text-gray-400">
				<TextClickFlash>{content.names.cps}</TextClickFlash>
				<IconBlock icon={icons.pngCps} tw={'border-4 border-orange-500'} />
				<ArrowDouble arrow={'up'} color={'cyan'} tw={'mt-2'} />
			</div>
		</Fragment>

		<!-- Sensing >> Information >> AI -->
		<!-- <Fragment index={1}> -->
		<div class="flex flex-row justify-around items-center mt-2">
			<IconBlock icon={icons.pngSm4} />
			<ArrowDouble arrow={'right'} color={'#8f8'} />
			<IconBlock icon={icons.pngDab} />
			<ArrowDouble arrow={'right'} color={'cyan'} />
			<IconBlock tw={'border-4 border-orange-500'} icon={icons.pngAie} />
		</div>
		<div>
			<div class="grid grid-cols-3 pt-1 justify-around text-gray-400">
				<TextClickFlash tw={'pr-20'}>{content.names.sensor}</TextClickFlash>
				<TextClickFlash tw={'pl-4'}>{content.names.info}</TextClickFlash>
				<TextClickFlash tw={'ml-20'}>{content.names.ai}</TextClickFlash>
			</div>
		</div>
		<!-- </Fragment> -->
		<!-- VR -->
		<Fragment index={3}>
			<div class="flex flex-col mt- items-center text-gray-400">
				<ArrowDouble arrow={'down'} color={'cyan'} tw={'mb-2'} />
				<IconBlock icon={icons.pngVrh} tw={'border-4 border-orange-500'} />
				<TextClickFlash>
					{content.names.vr}
				</TextClickFlash>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>
