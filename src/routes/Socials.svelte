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

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (!section || !title || !description) return;

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
	class=" flex w-full flex-col gap-24 bg-[#f7f7f7] px-6 py-20 xl:px-20 xl:py-[160px]"
>
	<div
		class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col gap-4 2xl:max-w-screen-2xl"
	>
		<div bind:this={title} class="mb-6 flex items-center gap-3 xl:mb-0">
			<Dot size="md" />
			<p class="text-subtext-text text-sm font-medium xl:text-lg">{@html pageTitle}</p>
		</div>

		<p
			bind:this={description}
			class="text-primary-text w-full text-[36px] leading-[45px] tracking-[-0.7px] xl:w-[80%] xl:text-[88px] xl:leading-[92px]
			xl:tracking-[-3.7px]"
		>
			I’m all over the internet
		</p>

		<div class="mt-6 grid gap-8 md:grid-cols-2 xl:mt-[80px] xl:grid-cols-3">
			{#each SOCIALS as social}
				<SocialCard {...social} />
			{/each}

			<GetInTouchCard label="Get in touch" href="/" />
		</div>
	</div>
</section>
