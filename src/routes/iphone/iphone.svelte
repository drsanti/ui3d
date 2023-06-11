<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		//
	});
</script>

<div class="flex justify-center items-center h-screen">
	<div
		id="parent"
		class="relative h-[712px] w-[350px] bg-black rounded-[50px] overflow-hidden border-[14px] border-gray-950"
	>
		<img src="./images/iphone-bg.jpg" alt="" class="absolute inset-0 h-full object-cover" />

		<div class="absolute h-6 w-40 top-0 inset-0 mx-auto bg-black rounded-b-2xl" />
		<div class="relative">
			<div class="mt-3 mr-5 flex justify-end gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4 text-gray-200"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4 text-gray-200"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4 text-gray-200"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
					/>
				</svg>
			</div>
			<div class="h-0.5 w-10 bg-gray-200 mt-0.5 mr-7 ml-auto rounded-full" />

			<div class="mt-2 flex flex-col items-center border-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					/>
				</svg>
				<p class="mt-3 text-white text-6xl font-thin">9:42</p>
				<p class="mt-1 text-white text-lg font-thin">Monday, June 2023</p>
			</div>
			<div class="mt-4 mx-2 relative">
				<div class="p-4 bg-white/20 rounded-3xl backdrop-blur-md">
					<div class="flex justify-between text-black">
						<div>
							<p class="text-xs font-bold">9:20 AM</p>
							<h2 class="text-lg font-bold">Your Morning Summary</h2>
						</div>
						<span class="flex justify-center items-center h-8 w-8 rounded-full bg-gray-300/50"
							>21</span
						>
					</div>
					<div class="mt-2 grid grid-cols-2 gap-2">
						<div class="h-32 bg-blue-400/70 items-center flex justify-center">information</div>
						<div class="h-32 bg-green-400/70 items-center flex justify-center">information</div>
					</div>
					<hr class="mt-4 border border-black/20" />
					<div class="mt-3 grid grid-cols-3 gap-1 items-end">
						<div class="col-span-2 bg-yellow-300">
							<h3>More Update</h3>
							<p>Hello world</p>
						</div>
						<div class="flex -space-x-3 flex-row-reverse space-x-reverse">
							<div
								class="flex justify-center items-center w-8 h-8 rounded-full bg-red-500 border-2 border-white/50 z-0"
							>
								1
							</div>
							<div
								class="flex justify-center items-center w-8 h-8 rounded-full bg-green-500 border-2 border-white/50 z-0"
							>
								2
							</div>
							<div
								class="flex justify-center items-center w-8 h-8 rounded-full bg-blue-500 border-2 border-white/50 z-0"
							>
								3
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- 
    New things to learn
     + inset-0 => ?
     + object-cover => ?
     + mx-auto => make left and right spaces the same.
     + flex-row-reverse & space-x-reverse
 -->
