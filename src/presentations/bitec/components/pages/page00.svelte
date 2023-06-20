<!-- Title Page -->
<script lang="ts">
	//

	import Fragment from '../Fragment.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import { data } from './topic.data';
	import { langStore } from '../languageStore';
	import DrSantiInfo from '../items/DrSantiInfo.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import PageVertical from '../PageVertical.svelte';

	import santi from '$lib/assets/images/santi_nuratch.jpg';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import BlockSpinners from '../items/BlockSpinners.svelte';
	import ArrowDouble from '../items/arrowDouble.svelte';

	import qrDo from '$lib/assets/images/qrcode-link-do.png';
	import qrGh from '$lib/assets/images/qrcode-link-gh.png';
	import IconTop from '../items/IconTop.svelte';
	import TextClickBorder from '../items/TextClickBorder.svelte';

	const textHelp = {
		english: {
			how: 'How to use this presentation?',
			presentation: 'Presentation'
		},
		thai: {
			how: 'การใช้งานแอพพลิเคชัน',
			presentation: 'เข้าสู่เว็บนำเสนอ'
		}
	};

	let text = textHelp.english;

	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
		text = $langStore === 'EN' ? textHelp.english : textHelp.thai;
	}
</script>

<!-- QRCode DigitalOcean -->
<PageAutoAnimate>
	<IconTop icon={qrDo} scale={4}>
		<TextClickBorder tw={'text-[4rem] mt-8 text-blue-400'}
			>{text.presentation}</TextClickBorder
		>
		<TextClickBorder tw={'text-[3rem] mt-0 text-blue-500'}
			>https://shorturl.at/dijCP</TextClickBorder
		>
		<span class="text-gray-500">(main)</span>
	</IconTop>
</PageAutoAnimate>

<!-- QRCode  -->
<PageAutoAnimate>
	<IconTop icon={qrGh} scale={4}>
		<TextClickBorder tw={'text-[4rem] mt-8 text-green-400'}
			>{text.presentation}</TextClickBorder
		>
		<TextClickBorder tw={'text-[3rem] mt-0 text-green-500'}
			>https://shorturl.at/bhyFQ</TextClickBorder
		>
		<span class="text-gray-500">(mirror)</span>
	</IconTop>
</PageAutoAnimate>

<PageAutoAnimate>
	<PageVertical>How to use this presentation</PageVertical>

	<PageVertical>
		<PngFadeIcons />
		<div class="h-1 bg-green-600/50 mx-32 my-12" />
		<TextClickFlash tw={'text-7xl'}>
			{content.title}
		</TextClickFlash>
		<Fragment>
			<TextClickFlash>
				<p>{content.subtitle}</p>
			</TextClickFlash>
		</Fragment>
	</PageVertical>

	<PageVertical tw={'text-[1.8rem]'}>
		<div class="flex justify-center">
			<div class="relative w-[256px] h-[256px]">
				<img
					class="border-8 border-gray-300/30 rounded-full absolute inset-0 object-cover object-top w-full h-full"
					src={santi}
					alt=""
				/>
			</div>
		</div>
		<div class="h-4" />
		<DrSantiInfo />
	</PageVertical>

	<PageVertical>
		<div
			class="text-center mb-10 text-gray-500 bg-blue-900/50 border-2 border-gray-500 rounded-[1rem] px-4 py-2"
		>
			<TextClickFlash>
				This presentation includes both English and Thai languages. Click the EN/TH
				button to switch to your preferred language. Enable the Sync button to
				synchronize your slides with the speaker.
			</TextClickFlash>
		</div>
		<div
			class="text-center mb-10 text-gray-500 bg-green-900/50 border-2 border-gray-500 rounded-[1rem] px-4 py-2"
		>
			<TextClickFlash>
				This presentation features both horizontal and vertical slides. To navigate,
				you can either slide left or right, or click on the controls (arrows) to move
				to the next or previous slide.
			</TextClickFlash>
		</div>
		<div>
			<div class="grid grid-cols-4 grid-rows-4">
				<!-- 1 1 -->
				<div class="flex flex-row items-center">
					<BlockSpinners scale={2} color={'#ff8'} />
					<ArrowDouble arrow={'right'} color={'#8f5'} />
				</div>
				<!-- 1 2 -->
				<div class="flex flex-row items-center">
					<BlockSpinners scale={2} color={'#f88'} />
					<div class="flex flex-col">
						<ArrowDouble arrow={'right'} color={'#8f5'} />
						<ArrowDouble arrow={'left'} color={'#8f5'} />
					</div>
				</div>
				<!-- 1 3 -->
				<div class="flex flex-row items-center">
					<BlockSpinners scale={2} color={'#f8f'} />
					<div class="flex flex-col">
						<ArrowDouble arrow={'right'} color={'#8f5'} />
						<ArrowDouble arrow={'left'} color={'#8f5'} />
					</div>
				</div>
				<!-- 1 4 -->
				<div class="flex flex-row items-center">
					<BlockSpinners scale={2} color={'#8ff'} />
					<div class="flex flex-col">
						<ArrowDouble arrow={'right'} color={'#8f5'} />
						<ArrowDouble arrow={'left'} color={'#8f5'} />
					</div>
				</div>
				<!-- 2 1 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 2 2 -->
				<div class="flex flex-row">
					<BlockSpinners scale={2} color={'#f88'} />
					<div>
						<ArrowDouble arrow={'down'} color={'#ff5'} />
						<ArrowDouble arrow={'up'} color={'#ff5'} />
					</div>
				</div>
				<!-- 2 3 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 2 4 -->
				<div class="flex flex-row">
					<BlockSpinners scale={2} color={'#8ff'} />
					<div>
						<ArrowDouble arrow={'down'} color={'#ff5'} />
						<ArrowDouble arrow={'up'} color={'#ff5'} />
					</div>
				</div>
				<!-- 3 1 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 3 2 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 3 3 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 3 4 -->
				<div>
					<div class="flex flex-row">
						<BlockSpinners scale={2} color={'#8ff'} />
						<div>
							<ArrowDouble arrow={'down'} color={'#ff5'} />
							<ArrowDouble arrow={'up'} color={'#ff5'} />
						</div>
					</div>
				</div>
				<!-- 41 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 4 2 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<!-- 4 3 -->
				<div>
					<!-- <BlockSpinners scale={2} /> -->
				</div>
				<div>
					<!-- <BlockSpinners scale={2} color={'#8ff'} /> -->
				</div>
			</div>
		</div>
	</PageVertical>
</PageAutoAnimate>
