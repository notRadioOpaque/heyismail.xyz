<script lang="ts">
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

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

<svelte:head>
	<title>Blog - Ismail Muyideen</title>
	<meta
		name="description"
		content="Explore the written works, thoughts and opinion, on things i've feel strongly about, things that interest me and things that might benefit others."
	/>
	<meta property="og:title" content="Blog - Ismail Muyideen" />
	<meta
		property="og:description"
		content="Check out my thought on certain topics, interest and more."
	/>
	<meta property="og:url" content="https://heyismail.xyz/blog" />
</svelte:head>

<div
	class="3xl:max-w-screen-3xl mx-auto flex h-[750px] w-full max-w-screen-xl flex-col gap-28 px-20 py-[70px] 2xl:max-w-screen-2xl"
>
	<div class="flex flex-col items-center justify-center gap-2">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium">Brain Dump</p>
		</div>

		<p
			bind:this={heroText}
			class="mx-auto text-center text-[36px] leading-[45px] tracking-[-0.7px] xl:w-[70%] xl:text-[88px]
			xl:leading-[92px] xl:tracking-[-3.7px]"
		>
			Blog
		</p>
	</div>
	<h1 class="mx-auto text-[20px]">Still cooking! 👨‍🍳</h1>
</div>
