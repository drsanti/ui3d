<script lang="ts">
	import chroma from 'chroma-js';
	import Fragment from '../Fragment.svelte';
	import PageAutoAnimate from '../PageAutoAnimate.svelte';
	import PageVertical from '../PageVertical.svelte';
	import DotRotators from '../items/DotRotators.svelte';
	import TextClickFlash from '../items/TextClickFlash.svelte';
	import { langStore } from '../languageStore';
	import ArrowDouble from '../items/arrowDouble.svelte';
	import DotScalers from '../items/DotScalers.svelte';
	import BlockSpinners from '../items/BlockSpinners.svelte';
	import BlocksMove from '../items/BlocksMove.svelte';
	import WindSpinners from '../items/WindSpinners.svelte';
	import PluseSpinners from '../items/PluseSpinners.svelte';
	import PngFadeIcons from '../items/PngFadeIcons.svelte';
	import TextClickBorder from '../items/TextClickBorder.svelte';

	const data = {
		english: {
			id10: [
				'Mechanization',
				'Factory',
				'Textile',
				'Urbanization',
				'Transportation',
				'Infrastructure'
			],
			id20: [
				'Mechanization',
				'Mass Production',
				'Flexibility',
				'Efficiency',
				'Transportation',
				'Skilled Labor'
			],
			id30: ['Automation', 'Computerization', 'Electronics', 'Information'],
			id31: [
				'Sensor & Actuator',
				'Feedback Control',
				'Data Storage',
				'Communication'
			],
			id40: [
				'Internet of Things',
				'Big Data and Analytics',
				'Artificial Intelligence',
				'Cyber-Physical Systems',
				'Human-Machine co-op',
				'Additive Manufacturing'
			],
			id41: [
				'Virtual Reality',
				'Augmented Reality',
				'Machine Learning',
				'Real-time Data'
			],
			id50: [
				'Human-Centricity', //human creativity, problem-solving, and decision-making,
				'Augmented Workforce', // human-machine collaboration, where advanced technologies like augmented reality, virtual reality, and wearable devices
				'Sustainable & Green Manufacturing',
				'Customization and Personalization',
				'Networked Ecosystems', //collaborate and share information seamlessly.
				'Human Creativity'
			],
			id51: ['Unpredictable<br>but abundant possibilities await'],
			motto: ['Uncover Tomorrow', 'Enhance Today', 'Gain from Yesterday']
		},
		thai: {
			id10: [
				'เครื่องจักร',
				'โรงงาน',
				'สิ่งทอ',
				'สร้างเมือง',
				'การขนส่ง',
				'โครงสร้างพื้นฐาน'
			],
			id20: [
				'เครื่องจักร',
				'การผลิดขนาดใหญ่',
				'ความยืดหยุ่น',
				'ประสิทธิภาพ',
				'การขนส่ง',
				'แรงงานฝีมือ'
			],
			id30: ['ระบบอัตโนมัติ', 'คอมพิวเตอร์', 'อิเล็กทรอนิกส์', 'ข้อมูล'],
			id31: [
				'การตรวจวัด การขับเคลื่อน',
				'การควบคุมแบบป้อนกลับ',
				'การจัดเก็บข้อมูล',
				'การสื่อสารข้อมูล'
			],
			id40: [
				'อินเตอร์เน็ตของสรรพสิ่ง',
				'ข้อมูลขนาดใหญ่และการวิเคราะห์',
				'ปัญญาประดิษฐ์',
				'การประสานโลกไซเบอร์กับโลกจริง',
				'การทำงานร่วมกันของคนและเครื่องจักร',
				'การผลิตแบบสร้างสรรค์'
			],
			id41: [
				'ความเป็นจริงเสมือน',
				'ความเป็นจริงเสริม',
				'การเรียนรู้ของเครื่องจักร',
				'ข้อมูลตามเวลาจริง'
			],
			id50: [
				'คนเป็นศูนย์กลาง ตัดสินใจ สั่งการ', //human creativity, problem-solving, and decision-making,
				'ทำงานกับเครื่องจักรผ่านโลกเสมือน', // human-machine collaboration, where advanced technologies like augmented reality, virtual reality, and wearable devices
				'อุตสาหกรรมแบบยั่งยืนและสะอาด',
				'ลูกค้าเป็นผู้สร้างสินค้าเอง',
				'การทำงานร่วมกันแบบไร้รอยต่อ', //collaborate and share information seamlessly.
				'ความคิดสร้างสรรค์ ความสามารถพิเศษ'
			],
			id51: ['ไม่สามารถคาดการณ์ล่วงหน้าได้<br>แต่มีโอกาสมากมายรอคอยอยู่'],
			motto: ['แสวงหาอนาคต', 'ปรับปรุงที่เป็นอยู่', 'เรียนรู้จากอดีต']
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
	const cir =
		'border-4 border-gray-500 bg-black/50 w-64 h-64 text-[4rem] justify-center items-center rounded-full mb-12';
</script>

<PageAutoAnimate>
	<PageAutoAnimate>
		<!-- 4 -->
		<TextClickFlash>
			<p>4.0</p>
		</TextClickFlash>
	</PageAutoAnimate>
	<!-- 5 4 -->
	<PageAutoAnimate>
		<TextClickFlash>
			<p>5.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>4.0</p>
		</TextClickFlash>
	</PageAutoAnimate>
	<!-- 5 4 3 -->
	<PageAutoAnimate>
		<TextClickFlash>
			<p>5.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>4.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>3.0</p>
		</TextClickFlash>
	</PageAutoAnimate>

	<!-- 5 4 3 2 -->
	<PageAutoAnimate>
		<TextClickFlash>
			<p>5.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>4.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>3.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>2.0</p>
		</TextClickFlash>
	</PageAutoAnimate>
	<!-- 5 4 3 2 1-->
	<PageAutoAnimate>
		<TextClickFlash>
			<p>5.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>4.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>3.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>2.0</p>
		</TextClickFlash>
		<TextClickFlash>
			<p>1.0</p>
		</TextClickFlash>
	</PageAutoAnimate>
	<!-- 5 4 3 2 1 Colors-->
	<PageVertical>
		<div class="flex flex-row justify-center items-center">
			<PluseSpinners scale={2} color={'#88f'} tw={'pb-4'} />
			<TextClickFlash>
				<p class="text-blue-500">5.0</p>
			</TextClickFlash>
		</div>

		<div class="flex flex-row justify-center items-center">
			<PluseSpinners scale={2} color={'#8f8'} tw={'pb-4'} />
			<TextClickFlash>
				<p class="text-green-500">4.0</p>
			</TextClickFlash>
		</div>

		<div class="grid grid-cols-3 mt-20">
			<div class="flex flex-row justify-center items-center">
				<PluseSpinners scale={2} color={'#888'} tw={'pb-4'} />
				<TextClickFlash>
					<p class="text-gray-500">3.0</p>
				</TextClickFlash>
			</div>
			<div class="flex flex-row justify-center items-center">
				<PluseSpinners scale={2} color={'#888'} tw={'pb-4'} />
				<TextClickFlash>
					<p class="text-gray-500">2.0</p>
				</TextClickFlash>
			</div>
			<div class="flex flex-row justify-center items-center">
				<PluseSpinners scale={2} color={'#888'} tw={'pb-4'} />
				<TextClickFlash>
					<p class="text-gray-500">1.0</p>
				</TextClickFlash>
			</div>
		</div>
	</PageVertical>

	<PageVertical>
		<PngFadeIcons />
		<div class="flex flex-col my-8 justify-start">
			{#each content.motto as m}
				<Fragment>
					<div class="flex flex-col justify-start ml-[8rem]">
						<div class="my-8 flex flex-row items-center">
							<DotScalers
								tw={'pr-6'}
								scale={1.5}
								color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()}
							/>
							<TextClickBorder tw={'text-[4rem]'}>{m}</TextClickBorder>
						</div>
					</div>
				</Fragment>
			{/each}
		</div>
	</PageVertical>
</PageAutoAnimate>

<!-- 1.0 -->
<PageAutoAnimate>
	<!------------------------------------------------------- 1.0 -->
	<PageVertical>
		<div class="flex justify-center items-center">
			<div class={cir}>
				<TextClickFlash>
					<div>1.0</div>
				</TextClickFlash>
			</div>
		</div>
		<Fragment>
			<div class="grid grid-cols-2 ml-[7rem]">
				{#each content.id10 as text}
					<div class="flex flex-row">
						<DotRotators color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()} />
						<TextClickFlash tw={'text-left'}>
							<span>{text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
	</PageVertical>
	<!-------------------------------------------------------- 2.0 -->
	<PageVertical>
		<div class="flex justify-center items-center">
			<div class={cir}>
				<TextClickFlash>
					<div>2.0</div>
				</TextClickFlash>
			</div>
		</div>
		<Fragment>
			<div class="grid grid-cols-2 ml-[6rem]">
				{#each content.id20 as text}
					<div class="flex flex-row">
						<DotRotators color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()} />
						<TextClickFlash tw={'text-left'}>
							<span>{@html text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
	</PageVertical>

	<!-------------------------------------------------------- 3.0 -->
	<PageVertical>
		<div class="flex justify-center items-center">
			<div class={cir}>
				<TextClickFlash>
					<div>3.0</div>
				</TextClickFlash>
			</div>
		</div>
		<Fragment>
			<div class="grid grid-cols-2 ml-[4rem]">
				{#each content.id30 as text}
					<div class="flex flex-row">
						<DotRotators color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()} />
						<TextClickFlash tw={'text-left'}>
							<span>{text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
		<!-- 3.1 -->
		<Fragment tw={'ml-[4rem]'}>
			<div class="flex flex-row my-8 justify-around">
				<ArrowDouble arrow={'down'} color={'#f8f'} />
				<ArrowDouble arrow={'down'} color={'#ff8'} />
				<ArrowDouble arrow={'down'} color={'#8ff'} />
			</div>
			<div class="grid grid-cols-2 ml-[2rem]">
				{#each content.id31 as text}
					<div class="flex flex-row justify-start items-center">
						<BlocksMove
							scale={0.7}
							color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()}
						/>
						<TextClickFlash tw={'text-left text-[2rem]'}>
							<span>{text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
	</PageVertical>

	<!-------------------------------------------------------- 4.0 -->
	<PageVertical>
		<div class="flex justify-center items-center">
			<div class={cir}>
				<TextClickFlash>
					<div>4.0</div>
				</TextClickFlash>
			</div>
		</div>
		<Fragment>
			<div class="grid grid-cols-2 ml-[1rem] text-[2.1rem]">
				{#each content.id40 as text}
					<div class="flex flex-row">
						<DotRotators color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()} />
						<TextClickFlash tw={'text-left'}>
							<span>{text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
		<!-- 4.1 -->
		<Fragment>
			<div class="flex flex-row my-8 justify-around">
				<ArrowDouble arrow={'down'} color={'#f8f'} />
				<ArrowDouble arrow={'down'} color={'#ff8'} />
				<ArrowDouble arrow={'down'} color={'#8ff'} />
			</div>
			<div class="grid grid-cols-2 ml-[2rem]">
				{#each content.id41 as text}
					<div class="flex flex-row justify-start items-center">
						<BlocksMove
							scale={0.7}
							color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()}
						/>
						<TextClickFlash tw={'text-left text-[2rem]'}>
							<span>{text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
	</PageVertical>

	<!-------------------------------------------------------- 5.0 -->
	<PageVertical>
		<div class="flex justify-center items-center">
			<div class={cir}>
				<TextClickFlash>
					<div>5.0</div>
				</TextClickFlash>
			</div>
		</div>
		<Fragment>
			<div class="grid grid-cols-2 ml-[1rem] text-[2.1rem]">
				{#each content.id50 as text}
					<div class="flex flex-row">
						<DotRotators color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()} />
						<TextClickFlash tw={'text-left'}>
							<span>{text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
		<!-- 5.1 -->
		<Fragment>
			<div class="flex flex-row my-8 justify-around">
				<ArrowDouble arrow={'down'} color={'#f8f'} />
				<ArrowDouble arrow={'down'} color={'#ff8'} />
				<ArrowDouble arrow={'down'} color={'#8ff'} />
			</div>
			<div class="grid grid-cols-1 ml-[4rem]">
				{#each content.id51 as text}
					<div class="flex flex-col justify-center items-center">
						<WindSpinners
							scale={2.2}
							color={chroma.hsl(Math.random() * 360, 0.5, 0.5).hex()}
						/>
						<TextClickFlash tw={'text-center text-[3rem]'}>
							<span>{@html text}</span>
						</TextClickFlash>
					</div>
				{/each}
			</div>
		</Fragment>
	</PageVertical>
</PageAutoAnimate>

<style>
	p {
		@apply text-[6rem];
	}
</style>
