<script lang="ts">
	import { Dot } from '$lib/components';
	import { SOCIALS } from '$lib/constants';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import SpecialBtn from '$lib/components/SpecialBtn.svelte';
	import { gsap } from 'gsap';
	import SplitType from 'split-type';

	let { image } = $props();

	let imageDiv: HTMLDivElement;
	let rightContent: HTMLDivElement;
	let heroText1: HTMLHeadingElement;
	let heroText2: HTMLHeadingElement;
	let heroText3: HTMLHeadingElement;
	let heroText: HTMLHeadingElement;
	let subText: HTMLDivElement;
	let gimmick: HTMLDivElement;

	onMount(() => {
		if (
			!heroText1 ||
			!heroText2 ||
			!heroText3 ||
			!heroText ||
			!imageDiv ||
			!rightContent ||
			!gimmick ||
			!subText
		)
			return;

		const splitText = new SplitType([heroText1, heroText2, heroText3, heroText], {
			types: 'chars,words,lines'
		});

		const tl = gsap.timeline();

		tl.from(imageDiv, {
			y: 100,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});

		tl.from(splitText.lines, {
			y: 40,
			opacity: 0,
			stagger: 0.2,
			duration: 0.8,
			ease: 'power4.out'
		});

		tl.from(
			rightContent,
			{
				x: -100,
				opacity: 0,
				duration: 0.6,
				ease: 'power4.out'
			},
			'-=0.1'
		);

		tl.from(gimmick, {
			x: 50,
			opacity: 0,
			duration: 0.4,
			ease: 'power4.out'
		});

		tl.from(
			[subText],
			{
				y: 100,
				opacity: 0,
				duration: 0.6,
				ease: 'power4.out'
			},
			'-=0.2'
		);
	});

	const navigateToAbout = () => {
		goto('/about');
	};
</script>

<section
	class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col gap-4 overflow-x-hidden px-6 py-10 lg:px-20 xl:flex-row xl:px-0 xl:py-[120px] 2xl:max-w-screen-2xl"
>
	<div class="relative h-max w-full xl:w-1/3">
		<div class="flex h-full w-full items-center gap-4 xl:mt-16">
			<div
				bind:this={imageDiv}
				class="relative z-20 h-[170px] w-[150px] overflow-hidden rounded-xl shadow-md xl:w-[160px]"
			>
				<img class="block h-full w-full object-cover" src="/images/ismail_small.webp" alt="" />
			</div>

			<div bind:this={rightContent} class="relative z-10 flex flex-col">
				<p class="-">Ismail Muyideen</p>
				<p class="text-subtext-text text-[15px] leading-[19.5px] font-medium tracking-[-0.6px]">
					Software Engineer
				</p>

				<div class="mt-4 flex gap-4">
					{#each SOCIALS as { icon, label, href }}
						<a {href} class="transition-transform ease-in-out hover:scale-110">
							<img src={icon} class="h-full w-full" alt={label + ' ' + 'icon'} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="mt-12 flex w-full flex-col gap-[40px] lg:w-2/3 xl:mt-0 xl:gap-[70px]">
		<div class="flex flex-col gap-8">
			<div bind:this={gimmick} class="flex items-center gap-2">
				<Dot size="sm" />
				<p class="text-primary-text text-sm">Available for work</p>
			</div>

			<div>
				<h1
					bind:this={heroText1}
					class="text-[32px] leading-[45px] tracking-[-0.7px] xl:text-[70px] xl:leading-[92px] xl:tracking-[-3.7px]"
				>
					I'm <span class="text-[#6b6b6b]">Ismail Muyideen</span>,
				</h1>
				<h1
					bind:this={heroText2}
					class="text-[32px] leading-[45px] tracking-[-0.7px] xl:text-[70px] xl:leading-[92px] xl:tracking-[-3.7px]"
				>
					a <span class="text-[#3d8c2e]">Software Engineer</span>
				</h1>
				<h1
					bind:this={heroText3}
					class="text-[32px] leading-[45px] tracking-[-0.7px] xl:text-[70px] xl:leading-[92px] xl:tracking-[-3.7px]"
				>
					building impactful products
				</h1>
				<h1
					bind:this={heroText}
					class="text-[32px] leading-[45px] tracking-[-0.7px] xl:text-[70px] xl:leading-[92px] xl:tracking-[-3.7px]"
				>
					and open to full-time roles.
				</h1>
			</div>
		</div>

		<div bind:this={subText} class="flex flex-col gap-24 lg:gap-14 xl:gap-24">
			<p
				class="mb-0 text-lg font-normal text-[#6b6b6b] lg:mb-10 xl:text-2xl xl:leading-[36px] xl:tracking-[-0.8px]"
			>
				Driven by performance, design, and collaboration—I deliver impactful software solutions
				swiftly and efficiently.
			</p>

			<SpecialBtn label="Hey, I’m Ismail 👋" action={navigateToAbout} />
		</div>
	</div>
</section>
