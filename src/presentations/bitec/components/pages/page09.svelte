<script lang="ts">
	import { pngIconsList as icons, pngAim } from '$lib/assets/icons/png';
	import { langStore } from '../languageStore';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import IconBlock from '../items/IconBlock.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import ClickRunning from '../items/ClickRunning.svelte';
	import Fragment from '../Fragment.svelte';
	import PageVertical from '../PageVertical.svelte';
	import BlocksMove from '../items/BlocksMove.svelte';
	import DotScalers from '../items/DotScalers.svelte';
	import WindSpinners from '../items/WindSpinners.svelte';
	import IconTop from '../items/IconTop.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import ArrowDouble from '../items/arrowDouble.svelte';
	import ArrowDown from '../../../../routes/slides/icons/svg/arrowDown.svelte';
	import IconLeft from '../items/IconLeft.svelte';

	const data = {
		english: {
			titles: {
				ai: 'Artificial Intelligence (AI)',
				success: 'Success factors in manufacturing AI'
			},
			names: {
				cps: 'CPS',
				ai: 'AI',
				vr: 'VR',
				sensor: 'Sensing',
				info: 'Information'
			},
			text: {
				measurement: 'The proper Measurement',
				information: 'The accurate Information',
				ai: 'The superior AI'
			}
		},
		thai: {
			titles: {
				ai: 'ปัญญาประดิษฐ์',
				success: 'ตัวแปรสู่ความสำเร็จของเอไอในภาคอุตสาหกรรมฯ'
			},
			names: {
				cps: 'ซีพีเอส',
				ai: 'เอไอ',
				vr: 'วีอาร์',
				sensor: 'การวัดค่า',
				info: 'ข้อมูล'
			},
			text: {
				measurement: 'การตรวจวัดที่ดี',
				information: 'ข้อมูลที่แม่นยำ',
				ai: 'เอไปที่ยอดเยี่ยม'
			}
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
</script>

<PageAutoAnimate>
	<!-- CLock and `Which technology should we initiate>` ------------------------------------>
	<PageVertical>
		<!-- <Fragment> -->
		<div class="flex flex-col items-center">
			<PngFadeIcons images={[icons.pngAi, icons.pngAie, icons.pngAim]} />
			<TextClickFlash tw={'mt-8'}>
				<span class="text-[3.0rem]">{content.titles.ai}</span>
			</TextClickFlash>
		</div>
		<Fragment>
			<div class="flex flex-row justify-around items-center mt-12">
				<IconBlock icon={icons.pngSm4} />
				<ArrowDouble arrow={'right'} color={'#8f8'} />
				<IconBlock icon={icons.pngDab} />
				<ArrowDouble arrow={'right'} color={'#8f8'} />
				<IconBlock tw={'border-4 border-orange-500'} icon={icons.pngAie} />
			</div>
		</Fragment>
		<!-- </Fragment> -->

		<Fragment>
			<div class="grid grid-cols-3 pt-6 justify-around text-gray-400">
				<TextClickFlash tw={'pr-20'}>{content.names.sensor}</TextClickFlash>
				<TextClickFlash tw={'pl-10'}>{content.names.info}</TextClickFlash>
				<TextClickFlash tw={'ml-20'}>{content.names.ai}</TextClickFlash>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>

<!-- Success factors in manufacturing AI ------------------------------------>
<PageAutoAnimate>
	<div class="">
		<IconTop scale={1.5} icon={icons.pngKed}>{content.titles.success}</IconTop>
	</div>
	<Fragment>
		<div class="bg-red-500 h-1 mx-20 mt-4" />
		<div class="grid grid-cols-3">
			<div class="grid-cell flex justify-center pr-20">
				<ArrowDouble arrow={'down'} color={'yellow'} />
			</div>
			<div class="grid-cell flex justify-center">
				<ArrowDouble arrow={'down'} color={'orange'} />
			</div>
			<div class="grid-cell flex justify-center pl-20">
				<ArrowDouble arrow={'down'} color={'cyan'} />
			</div>
		</div>

		<div class="flex flex-row justify-around items-center mt-12">
			<IconBlock icon={icons.pngSm4} />
			<ArrowDouble arrow={'right'} color={'#8f8'} />
			<IconBlock icon={icons.pngDab} />
			<ArrowDouble arrow={'right'} color={'#8f8'} />
			<IconBlock tw={'border-4 border-orange-500'} icon={icons.pngAie} />
		</div>
		<div class="grid grid-cols-3 pt-6 justify-around text-gray-400">
			<TextClickFlash tw={'pr-20'}>{content.names.sensor}</TextClickFlash>
			<TextClickFlash tw={'pl-10'}>{content.names.info}</TextClickFlash>
			<TextClickFlash tw={'ml-20'}>{content.names.ai}</TextClickFlash>
		</div>
	</Fragment>
</PageAutoAnimate>

<!-- Success factors in manufacturing AI ------------------------------------>
<PageAutoAnimate>
	<div class="mb-20">
		<IconTop scale={1.5} icon={icons.pngKed}>
			<TextClickFlash>{content.titles.success}</TextClickFlash>
		</IconTop>
	</div>

	<Fragment>
		<div class="pl-28">
			<IconLeft scale={0.7} icon={icons.pngSm4}>
				<TextClickFlash>{content.text.measurement}</TextClickFlash>
			</IconLeft>
		</div>
	</Fragment>
	<Fragment>
		<div class="pl-28">
			<IconLeft scale={0.7} icon={icons.pngDab}>
				<TextClickFlash>{content.text.information}</TextClickFlash>
			</IconLeft>
		</div>
	</Fragment>
	<Fragment>
		<div class="pl-28">
			<IconLeft scale={0.7} icon={icons.pngAie}>
				<TextClickFlash>{content.text.ai}</TextClickFlash>
			</IconLeft>
		</div>
	</Fragment>
</PageAutoAnimate>
