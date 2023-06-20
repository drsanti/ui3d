<script>
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PngIcon from '../items/PngIcon.svelte';
	import { pngIconsList as icons } from '$lib/assets/icons/png';
	import PageVertical from '../PageVertical.svelte';
	import IconTop from '../items/IconTop.svelte';
	import TextClickBorder from '../items/TextClickBorder.svelte';
	import ClockRunning from '../items/ClockRunning.svelte';
	import BlockSpinners from '../items/BlockSpinners.svelte';
	import DotRotators from '../items/DotRotators.svelte';
	import PluseSpinners from '../items/PluseSpinners.svelte';
	import { langStore } from '../languageStore';

	const data = {
		english: {
			rtd: 'Real-time Data',
			hmf: 'Human-Machine Fusion',
			cst: 'Cyber-Security'
		},
		thai: {
			rtd: 'ข้อมูลตามเวลาจริง',
			hmf: 'การหลอมรวมของคนและเครื่องจักร',
			cst: 'ความปลอดภัยทางไซเบอร์'
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
</script>

<PageAutoAnimate>
	<PageVertical>
		<IconTop scale={2} icon={icons.realtimeDatabase}>
			<TextClickBorder tw={'text-[7rem]'}>{content.rtd}</TextClickBorder>
		</IconTop>
		<div class="mt-[2rem] flex justify-evenly items-center mx-20">
			<ClockRunning scale={2} color={'#5f8'} />
			<ClockRunning scale={2} color={'#f58'} />
			<ClockRunning scale={2} color={'#85f'} />
		</div>
	</PageVertical>

	<PageVertical>
		<IconTop scale={2} icon={icons.humanVrInteraction}>
			<TextClickBorder tw={'text-[5rem]'}>{content.hmf}</TextClickBorder>
		</IconTop>
		<div class="mt-[2rem] flex justify-evenly items-center mx-20">
			<BlockSpinners scale={2} color={'#5f8'} />
			<BlockSpinners scale={2} color={'#f58'} />
			<BlockSpinners scale={2} color={'#85f'} />
		</div>
	</PageVertical>

	<PageVertical>
		<IconTop scale={2} icon={icons.pngCbs}>
			<TextClickBorder tw={'text-[5rem]'}>{content.cst}</TextClickBorder>
		</IconTop>
		<div class="mt-[2rem] flex justify-evenly items-center mx-20">
			<PluseSpinners scale={2} color={'#5f8'} />
			<PluseSpinners scale={2} color={'#f58'} />
			<PluseSpinners scale={2} color={'#85f'} />
		</div>
	</PageVertical>
</PageAutoAnimate>
