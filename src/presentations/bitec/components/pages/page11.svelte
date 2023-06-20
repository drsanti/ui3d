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
	import TitleText from '../items/TitleText.svelte';
	import ClickRunning from '../items/ClickRunning.svelte';
	import DotRotators from '../items/DotRotators.svelte';
	import chroma from 'chroma-js';
	import PngIcon from '../items/PngIcon.svelte';
	import BlocksMove from '../items/BlocksMove.svelte';
	import CubeSpinners from '../items/CubeSpinners.svelte';
	import WindSpinners from '../items/WindSpinners.svelte';
	import TextClickBorder from '../items/TextClickBorder.svelte';

	const data = {
		english: {
			title: {
				mainTopic: 'How to obtain the<br>accurate & precise data?'
			},
			questions: {
				source: 'Where does data come from?',
				reading: 'How do you acquire the data?',
				transfer: 'How do you transfer data?',
				manage: 'How do you manage data?',
				analyze: 'How do you analyze data?'
			},
			answers: {
				source: 'Factory | Machine | Equipment | Sensor',
				reading: 'Meter | Robot | Server | Cloud',
				transfer: 'Modbus | IoT',
				manage: 'File | DBS | Cloud',
				analyze: 'Human | Software | AI'
			},
			endQuestions: {
				title: 'Simple Questions',
				power: 'What is the power consumption<br>of machine #101?',
				isItAcc: 'Is the data accurate and <br>properly utilized in the system?'
			},
			ending: [
				'If our answer includes:',
				`"I don't know"`,
				`"I am not sure"`,
				'The data-driven technologies are useless'
			]
		},
		thai: {
			title: {
				mainTopic: 'จะทำอย่างไรให้ได้ข้อมูลที่<br>ถูกต้อง และ แม่นยำ'
			},
			questions: {
				source: 'ข้อมูลมาจากไหน',
				reading: 'อ่านข้อมูลอย่างไร',
				transfer: 'มอดบัส | ไอโอที',
				manage: 'จัดการข้อมูลอย่างไร',
				analyze: 'วิเคราะห์ข้อมูลด้วยวิธีไหน'
			},
			answers: {
				source: 'โรงงาน | เครื่องจักร | เครื่องมือ | เซ็นเซอร์',
				reading: 'มิเตอร์ | หุ่นยนต์ | เซิร์ฟเวอร์ | คลาวด์',
				transfer: 'How do you transfer data?',
				manage: 'ไฟล์ | ฐานข้อมูล | คลาวด์',
				analyze: 'คน | โปรแกรม | เอไอ'
			},
			endQuestions: {
				title: 'คำถามอย่างง่าย',
				power: 'เครื่องจักรหมายเลข #101 ให้พลังงานเท่าไร',
				isItAcc:
					'ข้อมูลที่มีถูกต้องหรือไม่ และ<br>ใช้งานอยู่ในระบบได้อย่างถูกวิธีหรือยัง'
			},
			ending: [
				'หากคำตอบยังคงเป็น:',
				`"ไม่ทราบ"`,
				`"ไม่แน่ใจ"`,
				'เทคโนโลยีที่ใช้ข้อมูลเป็นตัวขับยังไม่มีประโยชน์'
			]
		}
	};
	let content = data.english;
	$: {
		content = $langStore === 'EN' ? data.english : data.thai;
	}
	const _icons = [icons.pngDab, icons.pngIbt, icons.pngQtm];

	const split = (text: string) => {
		text = text.replace(' ', '').trim();
		return text.split('|');
	};
</script>

<PageAutoAnimate>
	<PageVertical>
		<div>
			<PngFadeIcons images={_icons} />
			<div class="pt-12">
				<TitleText>{@html content.title.mainTopic}</TitleText>
			</div>
		</div>
	</PageVertical>

	<!-- Where does data come from ------------------------------------------------------------>
	<PageVertical>
		<div class="flex flex-col">
			<div class="mb-[4rem]">
				<TextClickFlash tw={'text-[4rem]'}>
					{@html content.questions.source}
				</TextClickFlash>
			</div>

			<Fragment>
				<div class="flex flex-row justify-between">
					<PngIcon tw={'pl-4'} icon={icons.pngFac} />
					<PngIcon icon={icons.pngBot} />
					<PngIcon icon={icons.pngPmw} />
					<PngIcon tw={'pr-4'} icon={icons.pngSm4} />
				</div>
				<div class="flex flex-row justify-between">
					{#each split(content.answers.source) as text}
						<div class="flex flex-col justify-center items-center">
							<DotRotators color={chroma.hsl(Math.random() * 360, 0.8, 0.7).hex()} />
							<TextClickFlash tw={'mt-4'}>
								{@html text}
							</TextClickFlash>
						</div>
					{/each}
				</div>
			</Fragment>
		</div>
	</PageVertical>

	<!-- How do you acquire the data? ------------------------------------------------------>
	<PageVertical>
		<div class="flex flex-col">
			<div class="mb-[4rem]">
				<TextClickFlash tw={'text-[4rem]'}>
					{@html content.questions.reading}
				</TextClickFlash>
			</div>

			<Fragment>
				<div class="flex flex-row justify-between">
					<PngIcon tw={'pl-5'} icon={icons.pngSmg} />
					<PngIcon tw={'pr-12'} icon={icons.pngIbt} />
					<PngIcon tw={'pr-12 mt-4'} icon={icons.pngSrb} scale={0.9} />
					<PngIcon tw={'pr-5 mt-4'} icon={icons.pngIoc} scale={0.9} />
				</div>
				<div class="flex flex-row justify-between">
					{#each split(content.answers.reading) as text}
						<div class="flex flex-col justify-center items-center">
							<BlocksMove color={chroma.hsl(Math.random() * 360, 0.8, 0.7).hex()} />
							<TextClickFlash tw={'mt-4'}>
								{@html text}
							</TextClickFlash>
						</div>
					{/each}
				</div>
			</Fragment>
		</div>
	</PageVertical>

	<!-- How do you transfer the data? ------------------------------------------------------>
	<PageVertical>
		<div class="flex flex-col">
			<TextClickFlash tw={'text-[4rem]'}>
				{@html content.questions.transfer}
			</TextClickFlash>

			<Fragment>
				<div class="flex flex-row justify-around">
					<PngIcon tw={'pl-10'} icon={icons.pngNlc} />
					<PngIcon tw={'pl-10'} icon={icons.pngNio} />
				</div>
				<div />
				<div class="flex flex-row justify-around">
					{#each split(content.answers.transfer) as text}
						<div class="flex flex-col justify-center items-center">
							<CubeSpinners
								color={chroma.hsl(Math.random() * 360, 0.8, 0.7).hex()}
							/>
							<TextClickFlash tw={'mt-4'}>
								{@html text}
							</TextClickFlash>
						</div>
					{/each}
				</div>
			</Fragment>
		</div>
	</PageVertical>

	<!-- How do you manage the data? ------------------------------------------------------>
	<PageVertical>
		<div class="flex flex-col">
			<div class="mb-[4rem]">
				<TextClickFlash tw={'text-[4rem]'}>
					{@html content.questions.manage}
				</TextClickFlash>
			</div>

			<Fragment>
				<div class="flex flex-row justify-around">
					<PngIcon tw={'pl-0 pt-2'} scale={0.85} icon={icons.pngDxc} />
					<PngIcon tw={'pr-8'} icon={icons.pngDbs} />
					<PngIcon tw={'pr-2'} icon={icons.pngDcd} />
				</div>
				<div class="flex flex-row justify-around">
					{#each split(content.answers.manage) as text}
						<div class="flex flex-col justify-center items-center">
							<BlockSpinners
								color={chroma.hsl(Math.random() * 360, 0.8, 0.7).hex()}
							/>
							<TextClickFlash tw={'mt-4'}>
								{@html text}
							</TextClickFlash>
						</div>
					{/each}
				</div>
			</Fragment>
		</div>
	</PageVertical>

	<!-- How do you analyze the data? ------------------------------------------------------>
	<PageVertical>
		<div class="flex flex-col">
			<div class="mb-[4rem]">
				<TextClickFlash tw={'text-[4rem]'}>
					{@html content.questions.analyze}
				</TextClickFlash>
			</div>

			<Fragment>
				<div class="flex flex-row justify-between mx-[6rem]">
					<PngIcon tw={'pl-[0rem]'} scale={0.85} icon={icons.humanNote} />
					<PngIcon tw={'pl-[0rem]'} icon={icons.pngDsb} />
					<PngIcon tw={'pl-[0rem]'} icon={icons.pngAie} />
				</div>
				<div class="flex flex-row justify-between mx-[0rem]">
					{#each split(content.answers.analyze) as text}
						<div class="flex flex-col justify-center items-center w-1/3">
							<WindSpinners
								color={chroma.hsl(Math.random() * 360, 0.8, 0.7).hex()}
							/>
							<TextClickFlash tw={'mt-4'}>
								{@html text}
							</TextClickFlash>
						</div>
					{/each}
				</div>
			</Fragment>
		</div>
	</PageVertical>

	<!-- How do you analyze the data? ------------------------------------------------------>
	<PageVertical>
		<div class="flex flex-col">
			<PngFadeIcons images={[icons.pngQbg, icons.pngQdt, icons.pngQyr]} />
			<div class="mt-[4rem]">
				<TextClickFlash tw={'text-[4rem]'}>
					{@html content.endQuestions.title}
				</TextClickFlash>
			</div>

			<Fragment>
				<TextClickFlash>
					<div class="flex text-left justify-start flex-row items-center pl-8">
						<PngIcon icon={icons.pngQtn} />
						<span class="pl-10">
							{@html content.endQuestions.power}
						</span>
					</div>
				</TextClickFlash>
			</Fragment>
			<Fragment>
				<TextClickFlash>
					<div class="flex text-left justify-start flex-row items-center pl-8">
						<PngIcon icon={icons.pngQtn} />
						<span class="pl-10">
							{@html content.endQuestions.isItAcc}
						</span>
					</div>
				</TextClickFlash>
			</Fragment>
		</div>
	</PageVertical>

	<PageVertical>
		<div class="flex flex-col">
			<PngIcon scale={1.5} icon={icons.pngQyr} />
			<TextClickFlash>
				<span class="text-[5rem]">{@html content.ending[0]}</span>
			</TextClickFlash>

			<Fragment>
				<div class="my-10">
					<TextClickBorder tw={'pt-8'}>
						<span class="text-[4rem] text-red-400">{@html content.ending[1]}</span>
					</TextClickBorder>
				</div>
			</Fragment>

			<Fragment>
				<TextClickBorder tw={'pt-8'}>
					<span class="text-[4rem] text-orange-400">{@html content.ending[2]}</span>
				</TextClickBorder>
			</Fragment>

			<Fragment>
				<div class="flex flex-row justify-center my-12">
					<ArrowDouble arrow={'down'} color={'#ff5'} />
					<ArrowDouble arrow={'down'} color={'#f82'} />
					<ArrowDouble arrow={'down'} color={'#ff5'} />
				</div>
				<TextClickBorder tw={'pt-4'}>
					<span class="text-indigo-300 text-[3rem]">
						{@html content.ending[3]}
					</span>
				</TextClickBorder>
			</Fragment>
		</div>
	</PageVertical>
</PageAutoAnimate>
