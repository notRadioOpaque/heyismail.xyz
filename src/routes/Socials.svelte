<script lang="ts">
	import { Dot } from '$lib/components';
	import GetInTouchCard from '$lib/components/GetInTouchCard.svelte';
	import SocialCard from '$lib/components/SocialCard.svelte';
	import { SOCIALS } from '$lib/constants';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	const pageTitle = '{> Contact Me <}';

	let section: any;
	let title: HTMLDivElement;
	let description: HTMLDivElement;

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: '-50% top',
				end: 'bottom center'
			}
		});

		tl.from([title, description], {
			y: 50,
			opacity: 0,
			duration: 0.5,
			ease: 'power4.out'
		});
	});
</script>

<section bind:this={section} class="flex flex-col gap-24 bg-[#f7f7f7] px-20 py-[160px]">
	<div class="flex flex-col gap-4">
		<div bind:this={title} class="flex items-center gap-2">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">{@html pageTitle}</p>
		</div>

		<p
			bind:this={description}
			class="text-primary-text w-[70%] text-[90px] leading-[99px] tracking-[-3.6px]"
		>
			I’m all over the internet
		</p>

		<div class="mt-[80px] grid grid-cols-3 gap-8">
			{#each SOCIALS as social}
				<SocialCard {...social} />
			{/each}

			<GetInTouchCard label="Get in touch" href="/" />
		</div>
	</div>
</section>
