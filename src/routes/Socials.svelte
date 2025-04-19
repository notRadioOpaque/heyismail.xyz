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

<section
	bind:this={section}
	class="flex flex-col gap-24 bg-[#f7f7f7] px-6 py-20 md:px-20 md:py-[160px]"
>
	<div class="flex flex-col gap-4">
		<div bind:this={title} class="mb-6 flex items-center gap-3 md:mb-0">
			<Dot size="md" />
			<p class="text-subtext-text text-sm font-medium md:text-lg">{@html pageTitle}</p>
		</div>

		<p
			bind:this={description}
			class="text-primary-text w-full text-[36px] leading-[45px] tracking-[-0.7px] md:w-[70%] md:text-[88px]
			md:leading-[92px] md:tracking-[-3.7px]"
		>
			I’m all over the internet
		</p>

		<div class="mt-6 grid gap-8 md:mt-[80px] md:grid-cols-3">
			{#each SOCIALS as social}
				<SocialCard {...social} />
			{/each}

			<GetInTouchCard label="Get in touch" href="/" />
		</div>
	</div>
</section>
