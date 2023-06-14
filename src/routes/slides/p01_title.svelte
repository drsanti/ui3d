<script lang="ts">
	import { onMount } from 'svelte';
	import './slides.css';
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
	};
</script>

<section data-auto-animate>
	<!-- Main container -->
	<div class="relative flex h-screen justify-center items-center debug">
		<!-- Content container -->
		<div class="grid grid-cols-1">
			<div class="text-title debug">
				<p>{topic.title}</p>
			</div>
			<div class="text-subtitle debug">
				<p>{topic.subtitle}</p>
			</div>
		</div>
	</div>
</section>

<!-- 
<section data-auto-animate class="flex h-2/3 border">
	<div data-id="div" class="flex justify-center items-center h-full relative">
		<div class="flex justify-center items-center flex-col cursor-pointer">
			<h1 data-id="h1" on:mousedown={toggleTopicLang}>
				{topic.title}
			</h1>
		</div>
	</div>
</section>

<section data-auto-animate class="flex h-2/3">
	<div data-id="div" class="flex justify-center items-center h-full relative">
		<div class="flex justify-center items-center flex-col cursor-pointer">
			<h1 data-id="h1" on:mousedown={toggleTopicLang}>
				{topic.title}
			</h1>

			<div class={showBox ? 'show-box' : 'hide-box'}>
				<p on:mousedown={toggleBox} class="text-2xl">{topic.subtitle}</p>
			</div>
		</div>
	</div>
</section>

<section data-auto-animate class="flex h-2/3">
	<div data-id="div" class="flex flex-col justify-center items-center h-full relative">
		<div class="flex w-full justify-center items-center flex-col cursor-pointer">
			<h1 data-id="h1" on:mousedown={toggleTopicLang}>
				{topic.title}
			</h1>

			<div class={showBox ? 'show-box' : 'hide-box'}>
				<p on:mousedown={toggleBox} class="text-2xl">{topic.subtitle}</p>
			</div>
		</div>

		<div class="flex flex-col w-2/3 py-8 px-8 rounded-2xl bg-black/50 relative">
			<div on:mousedown={toggleLang} class="lang-box cursor-pointer">
				{spkLang}
			</div>
			<p class="text-3xl">{speaker.name}</p>
			<p class="text-xl">{speaker.email}</p>
			<p class="text-xl">{speaker.dept}</p>
			<p class="text-xl">{speaker.faculty}</p>
			<p class="text-xl">{speaker.university}</p>
		</div>
	</div>
</section>

<style>
	.show-box {
		@apply flex border-2 border-green-600 bg-green-950 px-8 h-14 justify-center items-center rounded-full;
	}
	.hide-box {
		@apply flex w-fit border-4 border-green-600/0 bg-green-950/0 px-8 h-14 justify-center items-center rounded-full;
	}

	.lang-box {
		@apply flex absolute w-8 h-8 border-2 border-gray-600/80 rounded-lg inset-2 text-lg text-gray-400 px-5 items-center justify-center;
	}

	section {
		text-transform: none !important;
		font-family: 'IBM Plex Sans Thai' !important;
	}
</section> -->

<style>
	.debug {
		@apply border border-green-700;
	}
	.text-title {
		@apply text-4xl;
	}
	.text-subtitle {
		@apply text-xl;
	}
</style>
