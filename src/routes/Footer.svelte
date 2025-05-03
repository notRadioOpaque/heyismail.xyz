<script lang="ts">
	import { Dot, SpecialBtn } from '$lib/components';
	import { SOCIALS } from '$lib/constants';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import SplitType from 'split-type';
	import Logo from './Logo.svelte';

	let footer: any;
	let heroText: HTMLHeadingElement;
	let currentYear: number;

	onMount(() => {
		const splitText = new SplitType(heroText, { types: 'chars,words,lines' });

		const tl = gsap.timeline();

		tl.from(splitText.lines, {
			y: 40,
			opacity: 0,
			stagger: 0.2,
			duration: 0.8,
			ease: 'power4.out'
		});

		currentYear = new Date().getFullYear();
	});

	const scheduleACall = () => {
		window.open('https://cal.com/notradioopaque/15min', '_blank');
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer bind:this={footer} class="bg-secondary-bg">
	<!-- <div class=""> -->
	<div
		class="3xl:max-w-screen-3xl mx-auto flex max-w-screen-xl items-center justify-between px-6 py-8 lg:px-20 xl:px-0 2xl:max-w-screen-2xl"
	>
		<div class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-sm text-white">Available for work</p>
		</div>

		<button
			onclick={scrollToTop}
			class="group flex cursor-pointer items-center gap-3 transition-all"
		>
			<p class="text-subtext-text text-sm transition-all group-hover:underline">Back to top</p>

			<div
				class="flex h-11 w-11 items-center justify-center rounded-full bg-white transition-all group-hover:rotate-45"
			>
				<img class="mx-2" src="/icons/arrow_up.svg" alt="svelte icon" width="24" height="24" />
			</div>
		</button>
	</div>
	<!-- </div> -->

	<div class="border-border-stroke border-y">
		<div
			class=" 3xl:max-w-screen-3xl mx-auto flex h-max w-full max-w-screen-xl flex-col items-center justify-center px-6 lg:px-20 xl:h-[795px] xl:flex-row xl:px-0 2xl:max-w-screen-2xl"
		>
			<div class="order-2 my-6 flex w-full flex-col gap-10 lg:px-0 xl:order-1 xl:my-0 xl:w-1/2">
				<h2
					bind:this={heroText}
					class="w-full text-[30px] leading-[45px] tracking-[-0.7px] text-white xl:text-[88px]
				xl:leading-[92px] xl:tracking-[-3.7px]"
				>
					Excited to join a cool team and build great software<span class="text-tertiary-text"
						>.</span
					>
				</h2>
				<p class="text-subtext-text text-base xl:text-2xl">Let’s make an impact</p>
			</div>
			<div class="order-1 flex w-full flex-col gap-10 lg:px-0 xl:order-2 xl:w-1/2 xl:pl-14">
				<div class="h-max">
					<div class="flex h-[150px] w-full items-center gap-4">
						<div class="h-[120px] w-[120px] overflow-hidden rounded-xl">
							<img
								class="block h-full w-full object-cover"
								src="/images/ismail_small.webp"
								alt=""
							/>
						</div>

						<div class="flex flex-col">
							<p class="text-[22px] leading-[30.8px] font-medium tracking-[-0.9px] text-white">
								Ismail Muyideen
							</p>
							<p
								class="text-subtext-text text-[15px] leading-[19.5px] font-medium tracking-[-0.6px]"
							>
								Frontend Engineer
							</p>

							<div class="mt-4 flex gap-3">
								{#each SOCIALS as { icon, label, href }}
									<a
										{href}
										target="_blank"
										rel="noopener noreferrer"
										class="hover:bg-tertiary-bg rounded-md border bg-[#3d8c2e] p-1 transition-all ease-in-out"
									>
										<img src={icon} class="h-full w-full" alt={label + ' ' + 'icon'} />
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
				<div class="mb-4 flex flex-col gap-7">
					<div class="flex flex-col gap-4">
						<p class="text-subtext-text text-base">Contact me</p>
						<button
							onclick={() => {
								window.location.href = 'mailto:ismailmuyideen.c05@gmail.com';
							}}
							class="text-left text-[20px] leading-[40px] tracking-[-1.2px] text-white transition-transform hover:translate-x-4 xl:text-[32px]"
						>
							ismailmuyideen.c05<span class="text-tertiary-text">@</span>gmail.com
						</button>
					</div>

					<p
						class="text-subtext-text w-full text-base leading-[32px] tracking-[-0.7] xl:w-[480px] xl:text-[22px]"
					>
						Wanna have a one on one with me, use this button 👇
					</p>
				</div>

				<SpecialBtn label="Schedule a call" action={scheduleACall} />
			</div>
		</div>
	</div>

	<div class="">
		<div
			class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-6 px-6 py-8 lg:flex-row lg:px-20 xl:gap-0 xl:px-0 xl:py-[30px] 2xl:max-w-screen-2xl"
		>
			<!-- <div class="text-2xl text-white">Logo</div> -->
			<Logo variant={'light'} />

			<p class="text-subtext-text text-sm">Copyright © Ismail Muyideen, {currentYear}</p>

			<div class="text-subtext-text flex items-center text-sm">
				Built with <span class="mx-2">☕</span> and
				<img class="mx-2" src="/icons/svelte_icon.svg" alt="svelte icon" width="12" height="12" />
			</div>
		</div>
	</div>
</footer>
