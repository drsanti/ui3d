<script lang="ts">
	import {
		pngIconsList as icons,
		pngQtc,
		pngQtn,
		pngQyr
	} from '$lib/assets/icons/png';
	import Fragment from '../Fragment.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import ArrowDouble from '../items/arrowDouble.svelte';
	import { langStore } from '../languageStore';
	import DotSpinners from '../items/DotSpinners.svelte';
	import BlockSpinners from '../items/BlockSpinners.svelte';
	import IconBlock from '../items/IconBlock.svelte';
	import PageVertical from '../PageVertical.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import CubeSpinners from '../items/CubeSpinners.svelte';
	import DotRotators from '../items/DotRotators.svelte';
	import CheckAll from '../items/CheckAll.svelte';
	import PngIcon from '../items/PngIcon.svelte';
	import IconTop from '../items/IconTop.svelte';
	import IconBottom from '../items/IconBottom.svelte';
	import BarScalers from '../items/BarScalers.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';

	const data = {
		english: {
			general: {
				ai: 'AI',
				input: 'Input',
				factory: 'Factory',
				machine: 'Machine',
				robot: 'Robot',
				product: 'Product'
			},
			special: {
				cps: 'CPS',
				vr: 'VR/AR',
				cloud: 'Cloud',
				secure: 'Secure'
			},
			title: {
				top: 'We need better factory/solutions',
				tech: 'Existing technologies',
				business: 'Our factory & business',
				improve: 'Modern manufacturing requires new tech.'
			},
			questions: {
				manufacturing: 'What are the definitions of our manufacturing?',
				status: 'What is our current status?'
			}
		},
		thai: {
			general: {
				ai: 'เอไอ',
				input: 'อินพุต',
				factory: 'โรงงาน',
				machine: 'เครื่องจักร',
				robot: 'หุ่นยนต์',
				product: 'สินค้า'
			},
			special: {
				cps: 'ซีพีเอส',
				vr: 'วี/เออาร์',
				cloud: 'คลาวด์',
				secure: 'ปลอดภัย'
			},
			title: {
				top: 'เราต้องการโรงงานที่ดีขึ้น วิธีการที่ดีกว่า',
				tech: 'เทคโนโลยีพร้อมใช้งาน',
				business: 'โรงงานและธุรกิจของเรา',
				improve: 'ผลิตสมัยใหม่จำเป็นต้องมีเทคโนโบยีใหม่'
			},
			questions: {
				manufacturing: 'อะไรคือนิยามของอุตสาหกรรมการผลิต',
				status: 'สถานะที่แท้จริงของเราอยู่ตรงไหน'
			}
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}

	const g2 = 'border-orange-500/80';
	const g1 = 'border-blue-500/80';

	const topIcons = [
		icons.pngQbg,
		icons.pngQdt,
		icons.pngQtc,
		icons.pngQtm,
		icons.pngQtn,
		icons.pngQyr
	];

	//
</script>

<PageAutoAnimate>
	<!--  What are the definitions of our manufacturing? -------------------------------------->
	<PageVertical>
		<div class="flex flex-col">
			<div class="py-20">
				<PngFadeIcons images={topIcons} />
			</div>
			<TextClickFlash>
				{content.questions.manufacturing}
			</TextClickFlash>
		</div>
	</PageVertical>

	<PageVertical>
		<div class="grid grid-cols-3 grid-rows-3 gap-2">
			<!-- Energy - Index: 8 ------------------------------------------------------------>
			<Fragment index={8}>
				<div class="flex flex-row justify-around items-center">
					<!-- Energy Block -->
					<IconBlock tw={g2} icon={icons.pngCsv}>{content.special.cloud}</IconBlock>

					<!-- Spinner -->
					<div class="flex justify-center items-center">
						<DotSpinners color={'#8f2'} scale={1.5} tw={'pl-1'} />
					</div>
				</div>
			</Fragment>
			<!-- AI - Index: 5 ---------------------------------------------------------------->
			<Fragment index={5}>
				<div class="flex flex-col justify-around items-center">
					<!-- AI Block -->
					<IconBlock tw={g1} icon={icons.pngAi}>{content.general.ai}</IconBlock>
					<!-- ABottom Arrows-->
					<div class="flex flex-row mt-2">
						<ArrowDouble id="ai-down" arrow={'down'} color={'lime'} />
						<ArrowDouble id="ai-up" arrow={'up'} color={'yellow'} />
					</div>
				</div>
			</Fragment>

			<!-- Worker - Index: 9 ------------------------------------------------------------>
			<Fragment index={9}>
				<div class="flex flex-row justify-around items-center">
					<!-- Spinner -->
					<div class="flex justify-center items-center">
						<BlockSpinners color={'#2af'} scale={1.3} tw={'pl-1'} />
					</div>
					<!-- Worker Block -->
					<IconBlock tw={g2} icon={icons.pngCbs}>{content.special.secure}</IconBlock>
				</div>
			</Fragment>
			<!-- Input - Index: 2 ------------------------------------------------------------>
			<Fragment index={2}>
				<div class="flex flex-row justify-around items-center mt-8">
					<!-- Input Block -->
					<IconBlock icon={icons.pngMat}>{content.general.input}</IconBlock>

					<!-- Arrow Right -->
					<ArrowDouble arrow={'right'} color={'lime'} />
				</div>
			</Fragment>
			<!-- Factory - Index: 1 ---------------------------------------------------------->
			<!-- <Fragment index={1}> -->
			<div class="flex flex-col justify-around items-center mt-0">
				<!-- Factory Box -->
				<IconBlock icon={icons.pngFac}>{content.general.factory}</IconBlock>
			</div>
			<!-- </Fragment> -->
			<!-- Product - Index: 3 ------------------------------------------------------------>
			<Fragment index={3}>
				<div class="flex flex-row justify-around items-center mt-8">
					<!-- Arrow Right -->
					<ArrowDouble arrow={'right'} color={'yellow'} />
					<!-- Product Block -->
					<IconBlock icon={icons.pngPpk}>{content.general.product}</IconBlock>
				</div>
			</Fragment>
			<!-- Machine - Index: 4 ------------------------------------------------------------>

			<!-- CPS - Index: 6 ---------------------------------------------------------------->
			<Fragment index={6}>
				<div class=" flex flex-row justify-around items-center">
					<!-- Upper arrows and CPS block -->
					<div class="flex flex-col justify-center items-center">
						<!-- Upper arrows -->
						<div class="flex flex-row pb-4">
							<ArrowDouble arrow={'down'} color={'lime'} />
							<ArrowDouble arrow={'up'} color={'yellow'} />
						</div>
						<!-- CPS Block -->
						<IconBlock tw={g2} icon={icons.pngCps}>{content.special.cps}</IconBlock>
					</div>
					<!-- Arrows Right -->
					<div class="flex flex-col justify-center items-center pt-20">
						<ArrowDouble arrow={'right'} color={'yellow'} />
						<ArrowDouble arrow={'left'} color={'lime'} />
					</div>
				</div>
			</Fragment>
			<Fragment index={4}>
				<div class="flex flex-col justify-around items-center">
					<!-- Top Arrow -->
					<div class="flex flex-row mb-4">
						<ArrowDouble arrow={'down'} color={'yellow'} />
						<ArrowDouble arrow={'up'} color={'lime'} />
					</div>
					<!-- Machine Block -->
					<IconBlock icon={icons.pngBcv}>{content.general.machine}</IconBlock>
				</div>
			</Fragment>
			<!-- VR/AR - Index: 7 ---------------------------------------------------------------->
			<Fragment index={7}>
				<div class="flex flex-row justify-around items-center">
					<!-- Arrows Left -->
					<div class="flex flex-col justify-center items-center pt-20">
						<ArrowDouble arrow={'right'} color={'lime'} />
						<ArrowDouble arrow={'left'} color={'yellow'} />
					</div>

					<!-- Upper arrows and VR block -->
					<div class="flex flex-col justify-center items-center">
						<!-- Upper arrows -->
						<div class="flex flex-row pb-4">
							<ArrowDouble arrow={'down'} color={'lime'} />
							<ArrowDouble arrow={'up'} color={'yellow'} />
						</div>
						<!-- VR/AR Block -->
						<IconBlock tw={g2} icon={icons.pngVrh}>{content.special.vr}</IconBlock>
					</div>
				</div>
			</Fragment>
			<div />
		</div>
	</PageVertical>
	<!-- End of Grid -->

	<!--  What are the definitions of our manufacturing? -------------------------------------->
	<PageVertical>
		<div class="flex flex-col">
			<div class="py-20">
				<PngFadeIcons images={topIcons} />
			</div>
			<TextClickFlash>
				{content.questions.status}
			</TextClickFlash>
		</div>
	</PageVertical>

	<!-- Existing Technologies ----------------------------------------------------------->
	<PageVertical>
		<div class="bg-black/40 py-8 rounded-3xl items-center">
			<div class="flex flex-row justify-start items-center pl-20">
				<CubeSpinners color={'#8e2'} />
				<TextClickFlash>{content.title.tech}</TextClickFlash>
			</div>
			<div class="flex flex-row justify-evenly mt-8">
				<IconBlock icon={icons.pngCsv}>{content.special.cloud}</IconBlock>
				<IconBlock icon={icons.pngAi}>{content.general.ai}</IconBlock>
				<IconBlock icon={icons.pngCbs}>{content.special.secure}</IconBlock>
			</div>
		</div>
		<Fragment>
			<div class="">
				<div class="flex justify-center">
					<ArrowDouble arrow={'up'} scale={2} color={'lime'} />
				</div>
				<PngIcon icon={icons.pngApv} scale={1.4} />
			</div>
		</Fragment>
	</PageVertical>

	<!-- Our Factory abd Business ----------------------------------------------------->
	<PageVertical>
		<div class="bg-black/40 py-8 rounded-3xl items-center">
			<div class="flex flex-row justify-start items-center pl-20">
				<DotRotators color={'#4cf'} scale={1.2} />
				<TextClickFlash>{content.title.business}</TextClickFlash>
			</div>
			<div class="flex flex-row justify-evenly mt-8">
				<IconBlock icon={icons.pngMat}>{content.general.input}</IconBlock>
				<IconBlock icon={icons.pngFac}>{content.general.factory}</IconBlock>
				<IconBlock icon={icons.pngPpk}>{content.general.product}</IconBlock>
			</div>
		</div>
		<Fragment>
			<div class="">
				<div class="flex justify-center">
					<ArrowDouble arrow={'up'} scale={2} color={'yellow'} />
				</div>
				<PngIcon icon={icons.pngYnc} scale={1.4} />
			</div>
		</Fragment>
	</PageVertical>

	<!-- We need better factory/solutions -->
	<PageVertical>
		<div class="flex flex-col items-center">
			<IconBottom scale={1.5} icon={icons.pngFmn}>
				<span class="text-[3.5rem]">{content.title.top}</span>
			</IconBottom>
		</div>
		<Fragment>
			<div class="flex flex-col items-center">
				<ArrowDouble arrow={'down'} scale={1.5} color={'orange'} tw={'mb-6'} />
				<div class="bg-black/40 py-8 rounded-3xl items-center w-[940px]">
					<div class="flex flex-row justify-start items-center pl-20">
						<BarScalers color={'#4cf'} scale={1.2} />
						<TextClickFlash>{content.title.improve}</TextClickFlash>
					</div>
					<div class="flex flex-row justify-evenly mt-8">
						<IconBlock icon={icons.pngCps}>{content.special.cps}</IconBlock>
						<IconBlock icon={icons.pngBcv}>{content.general.robot}</IconBlock>
						<IconBlock icon={icons.pngVrh}>{content.special.vr}</IconBlock>
					</div>
				</div>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>
