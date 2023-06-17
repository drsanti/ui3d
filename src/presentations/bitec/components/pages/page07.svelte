<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import { onMount } from 'svelte';
	import Fragment from '../Fragment.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import IconBottom from '../items/IconBottom.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import ArrowDouble from '../items/arrowDouble.svelte';
	import { langStore } from '../languageStore';
	import PageVertical from '../PageVertical.svelte';
	import DotSpinners from '../items/DotSpinners.svelte';
	import BlockSpinners from '../items/BlockSpinners.svelte';

	const data = {
		english: {
			general: {
				ai: 'AI',
				input: 'Input',
				factory: 'Factory',
				machine: 'Machine',
				product: 'Product'
			},
			special: {
				cps: 'CPS',
				vr: 'VR/AR',
				energy: 'Energy',
				worker: 'Workers'
			}
		},
		thai: {
			general: {
				ai: 'เอไอ',
				input: 'อินพุต',
				factory: 'โรงงาน',
				machine: 'เครื่องจักร',
				product: 'สินค้า'
			},
			special: {
				cps: 'ซีพีเอส',
				vr: 'วี/เออาร์',
				energy: 'พลังงาน',
				worker: 'พนักงาน'
			}
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}

	const twB =
		'bg-black/20 rounded-3xl px-8 border-2 border-lime-200/70 pt-4 w-[220px] text-[2rem]';

	//
</script>

<!-- 

		 [AI]
	
Input	Factory 	Product	

		Machine
 -->

<PageAutoAnimate>
	<div class="grid grid-cols-3 grid-rows-3 gap-2 border-red-400">
		<!-- Energy - Index: 8 ------------------------------------------------------------>
		<Fragment index={8}>
			<div class="flex flex-row justify-around items-center">
				<!-- Energy Block -->
				<div class="border-orange-500 {twB}">
					<IconBottom icon={icons.pngBtg}>
						<TextClickFlash>{content.special.energy}</TextClickFlash>
					</IconBottom>
				</div>
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
				<div class={twB}>
					<IconBottom>
						<TextClickFlash>{content.general.ai}</TextClickFlash>
					</IconBottom>
				</div>
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
				<!-- Energy Block -->
				<div class="border-orange-500 {twB}">
					<IconBottom icon={icons.pngTbs}>
						<TextClickFlash>{content.special.worker}</TextClickFlash>
					</IconBottom>
				</div>
			</div>
		</Fragment>
		<!-- Empty -->
		<!-- Input - Index: 2 ------------------------------------------------------------>
		<Fragment index={2}>
			<div class="flex flex-row justify-around items-center mt-8">
				<!-- Input Block -->
				<div class={twB}>
					<IconBottom icon={icons.pngMat}>
						<TextClickFlash>{content.general.input}</TextClickFlash>
					</IconBottom>
				</div>
				<!-- Arrow Right -->
				<ArrowDouble arrow={'right'} color={'lime'} />
			</div>
		</Fragment>
		<!-- Factory - Index: 1 ---------------------------------------------------------->
		<Fragment index={1}>
			<div class="flex flex-col justify-around items-center mt-8">
				<!-- Factory Box -->
				<div class={twB}>
					<IconBottom icon={icons.pngFac}>
						<TextClickFlash>{content.general.factory}</TextClickFlash></IconBottom
					>
				</div>
			</div>
		</Fragment>
		<!-- Product - Index: 3 ------------------------------------------------------------>
		<Fragment index={3}>
			<div class="flex flex-row justify-around items-center mt-8">
				<!-- Arrow Right -->
				<ArrowDouble arrow={'right'} color={'yellow'} />
				<!-- Product Block -->
				<div class={twB}>
					<IconBottom icon={icons.pngPpk}>
						<TextClickFlash>{content.general.product}</TextClickFlash>
					</IconBottom>
				</div>
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
					<div class="border-orange-500 {twB}">
						<IconBottom icon={icons.pngCps}>
							<TextClickFlash>{content.special.cps}</TextClickFlash>
						</IconBottom>
					</div>
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
				<div class={twB}>
					<IconBottom icon={icons.pngBcv}>
						<TextClickFlash>{content.general.machine}</TextClickFlash>
					</IconBottom>
				</div>
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
					<!-- CPS Block -->
					<div class="border-orange-500 hover:bg-blue-800/50 {twB}">
						<IconBottom icon={icons.pngVrh}>
							<TextClickFlash>{content.special.vr}</TextClickFlash>
						</IconBottom>
					</div>
				</div>
			</div>
		</Fragment>
		<div />
	</div>
	<!-- End of Grid -->
</PageAutoAnimate>
