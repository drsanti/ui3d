<script lang="ts">
	import { pngIconsList as icons } from '$lib/assets/icons/png';
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

	const data = {
		english: {
			titles: {
				whichOne: 'Which technology should we initiate?',
				hardSoft: 'Hardware or Software?',
				sensorDash: 'Sensing or Dashboard?',
				dataAi: 'Data or AI?'
			},
			names: {
				cps: 'CPS',
				ai: 'AI',
				vr: 'VR',
				sensor: 'Sensing',
				dashboard: 'Dashboard',
				hardware: 'Hardware',
				software: 'Software',
				data: 'Data'
			}
		},
		thai: {
			titles: {
				whichOne: 'เราควรจะเริ่มต้นจากเทคโนโลยีอะไร',
				hardSoft: 'ฮาร์แวร์ หรือ ซอฟต์แวร์',
				sensorDash: 'การวัดค่า หรือ การแสดงผล',
				dataAi: 'ข้อมูล หรือ เอไอ'
			},
			names: {
				cps: 'ซีพิเอส',
				ai: 'เอไอ',
				vr: 'วีอาร์',
				sensor: 'การวัดค่า',
				dashboard: 'การแสดงผล',
				hardware: 'ฮาร์ดแวร์',
				software: 'ซอฟต์แวร์',
				data: 'ข้อมูล'
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
		<div class="flex flex-col items-center">
			<ClickRunning color={'yellow'} scale={2.5} />
			<TextClickFlash tw={'mt-8'}>
				<span class="text-[3.0rem]">{content.titles.whichOne}</span>
			</TextClickFlash>
		</div>
		<Fragment>
			<div class="flex flex-row justify-around items-center mt-12">
				<IconBlock icon={icons.pngCps} />
				<IconBlock icon={icons.pngAie} />
				<IconBlock icon={icons.pngVrh} />
			</div>
		</Fragment>

		<Fragment>
			<div class="flex flex-row justify-around items-center mt-4 text-gray-400">
				<TextClickFlash>{content.names.cps}</TextClickFlash>
				<TextClickFlash>{content.names.ai}</TextClickFlash>
				<TextClickFlash>{content.names.vr}</TextClickFlash>
			</div>
		</Fragment>
	</PageVertical>

	<!-- Hardware vs. Software` ----------------------------------------------------------->
	<PageVertical>
		<div class="flex flex-col items-center">
			<BlocksMove color={'#58f'} scale={2.5} />
			<TextClickFlash tw={'mt-8'}>
				<span class="text-[3.0rem]">{content.titles.hardSoft}</span>
			</TextClickFlash>
		</div>
		<Fragment>
			<div class="flex flex-row justify-around items-center mt-12">
				<IconBlock icon={icons.pngMwf} />
				<IconBlock icon={icons.pngSfw} />
			</div>
		</Fragment>

		<Fragment>
			<div class="flex flex-row justify-around items-center mt-4 text-gray-400">
				<TextClickFlash>{content.names.hardware}</TextClickFlash>
				<TextClickFlash>{content.names.software}</TextClickFlash>
			</div>
		</Fragment>
	</PageVertical>

	<!-- Sensing vs. Dashboard` ---------------------------------------------------------------->
	<PageVertical>
		<div class="flex flex-col items-center">
			<DotScalers color={'#f85'} scale={2.5} />
			<TextClickFlash tw={'mt-8'}>
				<span class="text-[3.0rem]">{content.titles.sensorDash}</span>
			</TextClickFlash>
		</div>
		<Fragment>
			<div class="flex flex-row justify-around items-center mt-12">
				<IconBlock icon={icons.pngSm4} />
				<IconBlock icon={icons.pngDsb} />
			</div>
		</Fragment>

		<Fragment>
			<div class="flex flex-row justify-around items-center mt-4 text-gray-400">
				<TextClickFlash tw={'pl-12'}>{content.names.sensor}</TextClickFlash>
				<TextClickFlash tw={'pl-10'}>{content.names.dashboard}</TextClickFlash>
			</div>
		</Fragment>
	</PageVertical>

	<!-- Data vs. AI` ---------------------------------------------------------------->
	<PageVertical>
		<div class="flex flex-col items-center">
			<WindSpinners color={'#f5f'} scale={2.5} />
			<TextClickFlash tw={'mt-8'}>
				<span class="text-[3.0rem]">{content.titles.dataAi}</span>
			</TextClickFlash>
		</div>
		<Fragment>
			<div class="flex flex-row justify-around items-center mt-12">
				<IconBlock icon={icons.pngDab} />
				<IconBlock icon={icons.pngAie} />
			</div>
		</Fragment>

		<Fragment>
			<div class="flex flex-row justify-around items-center mt-4 text-gray-400">
				<TextClickFlash tw={'pl-0'}>{content.names.data}</TextClickFlash>
				<TextClickFlash tw={'pl-0'}>{content.names.ai}</TextClickFlash>
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>
