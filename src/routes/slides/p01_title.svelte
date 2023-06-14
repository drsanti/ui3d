<script lang="ts">
	import { onMount } from 'svelte';
	import './slides.css';
	import { subclip } from 'three/src/animation/AnimationUtils';
	const data = {
		thai: {
			topic: {
				title: 'โรงงานอุตสาหกรรมแห่งอนาคต',
				subtitle: 'การพัฒนาอุตสาหกรรมการผลิตแบบยั่งยืนและดีกว่า'
			},

			speaker: {
				name: 'ผศ.ดร.สันติ นุราช',
				email: 'santi.inc.kmutt@gmail.com',
				dept: 'ภาควิชาวิศวกรรมระบบควบคุมและเครื่องมือวัด',
				faculty: 'คณะวิศวกรรมศาสตร์',
				university: 'มหาวิทยาลัยเทคโนโลยพระจอมเกล้่่าธนบุรี (มจธ)'
			}
		},
		english: {
			topic: {
				title: 'Factory of the Future',
				subtitle: 'Sustainable and Smart Manufacturing'
			},

			speaker: {
				name: 'Asst.Prof.Dr.Santi Nuratch',
				email: 'santi.inc.kmutt@gmail.com',
				dept: 'Department of Control System and Instrumentation Engineering',
				faculty: 'Faculty of Engineering',
				university: "King Mongkut's University of Technology Thonburi (KMUTT)"
			}
		}
	};

	let topic = data.english.topic;
	let speaker = data.english.speaker;

	let topicLang: 'EN' | 'TH' = 'EN';
	let spkLang: 'EN' | 'TH' = 'EN';

	onMount(() => {
		topicLang = 'EN';
	});

	const toggleTopicLang = () => {
		topicLang = topicLang === 'EN' ? 'TH' : 'EN';
		topic = topicLang === 'EN' ? data.english.topic : data.thai.topic;
		console.log(topicLang);
	};

	const toggleLang = () => {
		spkLang = spkLang === 'EN' ? 'TH' : 'EN';
		speaker = spkLang === 'EN' ? data.english.speaker : data.thai.speaker;
	};

	let showBox = false;
	const toggleBox = () => {
		showBox = !showBox;
		console.log(showBox);
	};
</script>

<section data-auto-animate>
	<div>
		<!-- Topic -->
		<div on:mousedown={toggleTopicLang} data-auto-animate-id="toppic" class="text-title">
			<p>{topic.title}</p>
		</div>
	</div>
</section>

<section data-auto-animate>
	<div>
		<!-- Topic -->
		<div on:mousedown={toggleTopicLang} data-auto-animate-id="toppic" class="text-title">
			<p>{topic.title}</p>
		</div>
		<!-- Subtopic -->
		<div on:mousedown={toggleBox} class="subtopic-container">
			<div
				data-auto-animate-id="subtoppic"
				class="text-subtitle py-1 px-8 {showBox ? `show-box` : `hide-box`}"
			>
				<p>{topic.subtitle}</p>
			</div>
		</div>
	</div>
</section>

<section data-auto-animate>
	<div>
		<!-- Topic -->
		<div on:mousedown={toggleTopicLang} data-auto-animate-id="toppic" class="text-title">
			<p>{topic.title}</p>
		</div>
		<!-- Subtopic -->
		<div on:mousedown={toggleBox} class="subtopic-container">
			<div
				data-auto-animate-id="subtoppic"
				class="text-subtitle py-1 px-8 {showBox ? `show-box` : `hide-box`}"
			>
				<p>{topic.subtitle}</p>
			</div>
		</div>
		<!-- Speaker container -->
		<div class="bg-black/50 py-4 mt-4 mx-8 border-2 border-gray-500 rounded-xl relative">
			<!-- Name and email -->
			<div class="grid grid-cols-1">
				<p class="text-[2.5rem]">{speaker.name}</p>
				<p class="text-[2.0rem]">{speaker.email}</p>
			</div>
			<!-- Additional information -->
			<div class="grid grid-cols-1 mt-4 text-[1.5rem]">
				<p>{speaker.dept}</p>
				<p>{speaker.faculty}</p>
				<p>{speaker.university}</p>
			</div>
			<!-- EN/TH -->
			<div
				on:mousedown={toggleLang}
				class="absolute flex justify-center items-center w-10 h-10 bg-black/50 border border-gray-500 inset-1 rounded-md text-[1rem] hover:text-blue-500 cursor-pointer"
			>
				{spkLang}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		@apply select-none;
	}
	.debug {
		@apply border border-green-700;
	}
	.text-title {
		@apply text-6xl cursor-pointer;
	}
	.text-subtitle {
		@apply text-4xl cursor-pointer;
	}

	.speaker-container {
		@apply relative text-sm w-[500px] mt-4 bg-black/30 mx-2 py-4 rounded-xl border-2 border-gray-500/50;
	}
	.show-box {
		@apply border-2 box-border border-green-500 rounded-full bg-black/60;
	}
	.hide-box {
		@apply border-2 box-border border-green-500/0 rounded-full bg-black/0;
	}
	.lang-button {
		@apply absolute cursor-pointer border w-8 h-6 text-sm inset-1 flex justify-center items-center rounded-md border-gray-600;
	}
	.subtopic-container {
		@apply flex cursor-pointer select-none justify-center items-center;
	}
</style>
