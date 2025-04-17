<script lang="ts">
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let heroText: HTMLHeadingElement;
	let subText: HTMLDivElement;
	let block: HTMLDivElement;

	onMount(() => {
		const tl = gsap.timeline();

		tl.from([heroText, subText], {
			y: 100,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});
	});
</script>

<div class="flex h-[750px] w-full flex-col gap-28 px-20 py-[70px]">
	<div class="flex flex-col items-center justify-center gap-5">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">Brain Dump</p>
		</div>

		<p
			bind:this={heroText}
			class="text-primary-text text-center text-[90px] leading-[99px] tracking-[-3.6px]"
		>
			Blogs
		</p>
	</div>
	<h1 class="mx-auto text-[20px]">Coming soon! 🚀</h1>
</div>
