<script lang="ts">
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import { usePlaceholderImage } from '$lib/usePlaceholderImage';
	import LazyImage from '$lib/components/LazyImage.svelte';

	let { data }: PageProps = $props();
	let { email, techStack, image, resumeLink } = data.about[0];

	const languages = techStack.filter((tech: any) => tech.category === 'language');
	const backend = techStack.filter((tech: any) => tech.category === 'backend');
	const frameworks = techStack.filter((tech: any) => tech.category === 'framework');
	const tools = techStack.filter((tech: any) => tech.category === 'tool');

	const { src, placeholder } = usePlaceholderImage(image);

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

		tl.from(
			block,
			{
				y: 100,
				opacity: 0,
				duration: 0.6,
				ease: 'power4.out'
			},
			'-=0.2'
		);
	});
</script>

<svelte:head>
	<title>About - Ismail Muyideen</title>
	<meta
		name="description"
		content="Learn about Ismail Muyideen, a frontend developer creating impactful user experiences."
	/>
	<meta property="og:title" content="About - Ismail Muyideen" />
	<meta
		property="og:description"
		content="Discover my journey, background, and expertise in frontend development."
	/>
	<meta property="og:url" content="https://heyismail.xyz/about" />
</svelte:head>

<div
	class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col gap-8 py-[70px] xl:gap-0 2xl:max-w-screen-2xl"
>
	<div class="flex flex-col items-center justify-center gap-2">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium">Bits of Me</p>
		</div>

		<p
			bind:this={heroText}
			class="mx-auto text-center text-[36px] leading-[45px] tracking-[-0.7px] xl:w-[70%] xl:text-[88px]
			xl:leading-[92px] xl:tracking-[-3.7px]"
		>
			About Me
		</p>
	</div>

	<div bind:this={block} class="flex flex-col gap-10 lg:flex-row lg:gap-0">
		<div class="p-6 pt-0 lg:w-1/3 lg:p-20">
			<div class="mt-1.5 flex w-full flex-col items-center gap-4">
				<div class="h-[400px] w-full overflow-hidden rounded-xl shadow-2xl lg:h-[300px]">
					<LazyImage {src} {placeholder} alt="Cool project" />
				</div>

				<div class="flex w-full justify-between gap-4">
					<a
						href="/pdf/Ismail_Muyideen.pdf"
						download
						class="bg-btn-bg group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md p-4 text-sm font-medium text-white"
					>
						<p class="group-hover:text-tertiary-text transition-color ease-in-out">Get Rèsumè</p>
					</a>
				</div>

				<div class="flex flex-col gap-4">
					<a
						href="/"
						class="text-primary-text hover:border-secondary-bg border-b border-transparent text-[20px] leading-[20px] tracking-[-0.6px] transition-all hover:border-b"
					>
						{email}
					</a>
				</div>
			</div>
		</div>

		<div class="p-6 pt-0 lg:w-2/3 lg:p-20 lg:pl-0">
			<div class="w-full lg:w-4/5">
				<p
					class="text-primary-text text-[20px] leading-[28px] tracking-[-0.2px] xl:text-[24px] xl:leading-[33px] xl:tracking-[-0.5px]"
				>
					Hi, I’m Ismail, a Software Engineer with a passion for crafting pixel-perfect, immersive,
					and accessible digital experiences that captivate and engage users, blending creativity
					with precision to bring ideas to life.
				</p>

				<div
					class="text-secondary-text my-6 flex flex-col gap-4 text-base xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
				>
					<p>
						These days, my primary focus is on building accessible user interfaces. I thrive in the
						space where design meets engineering, creating experiences that not only look great but
						are also well-constructed behind the scenes. The process of blending aesthetics with
						functionality is incredibly rewarding for me.
					</p>

					<p>
						When I’m not coding, you’ll find me enjoying podcasts, reading, spending time with my
						little brother, or shooting hoops on the basketball court. These activities keep me
						balanced and inspired, fueling my creativity both on and off the screen.
					</p>
				</div>

				<div class="mt-10 mb-12 flex flex-col gap-4 xl:mt-20">
					<h3 class="text-[24px] leading-[33px] font-semibold tracking-[-1px]">Soft Skills</h3>
					<p
						class="text-secondary-text text-base xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
					>
						Certain skills I've picked along the way that deserves mentioning:
					</p>
					<ul class="flex flex-col gap-4">
						<li class="flex gap-3">
							<div class="bg-secondary-bg mt-3 aspect-square h-[6px] w-[6px]"></div>
							<div class="">
								<span
									class="text-primary-text text-base font-semibold xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
									>Attention to detail</span
								><span class="mr-1">:</span>
								<span
									class="text-secondary-text text-base break-words whitespace-normal xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
								>
									I enjoy crafting designs and user interfaces with meticulous attention to detail,
									always prioritizing quality over quantity.
								</span>
							</div>
						</li>

						<li class="flex gap-3">
							<div class="bg-secondary-bg mt-3 aspect-square h-[6px] w-[6px]"></div>
							<div class="">
								<span
									class="text-primary-text text-base font-semibold xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
									>Open-source/Collaboration</span
								><span class="mr-1">:</span>
								<span
									class="text-secondary-text text-base break-words whitespace-normal xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
								>
									I'm passionate about open-source because it’s where real collaboration happens —
									people from all over the world building, learning, and solving problems together.
									Contributing to open-source has taught me how to communicate better, work across
									different codebases, and be part of something bigger than myself.
								</span>
							</div>
						</li>

						<li class="flex gap-3">
							<div class="bg-secondary-bg mt-3 aspect-square h-[6px] w-[6px]"></div>
							<div class="">
								<span
									class="text-primary-text text-base font-semibold xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
									>Ability to work with little supervision</span
								><span class="mr-1">:</span>
								<span
									class="text-secondary-text text-base break-words whitespace-normal xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
								>
									I recognize that everyone’s time is valuable, so I take pride in delivering
									assignments and projects efficiently with minimal supervision. This allows you to
									focus on bigger priorities without the need for close oversight.
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="my-6 flex flex-col gap-4">
					<h3 class="text-[24px] leading-[33px] font-semibold tracking-[-1px]">
						My Creative Arsenal
					</h3>
					<p
						class="text-secondary-text text-base xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
					>
						Technologies, platforms, and gadgets I use regularly as a frontend developer — from
						React to Obsidian, from Figma to my trusty MacBook.
					</p>
				</div>

				<div class="mt-6 flex w-full flex-row gap-8">
					<div class="flex w-full flex-col gap-4">
						<h3
							class="text-primary-text mt-3 text-[18px] leading-[28px] font-semibold tracking-[-0.4px] lg:mt-6"
						>
							Languages
						</h3>

						<div class="flex flex-col gap-3">
							{#each languages as { name, url, icon }}
								<li class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<a
										href={url}
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</a>
								</li>
							{/each}
						</div>

						<h3
							class="text-primary-text mt-3 text-[18px] leading-[28px] font-semibold tracking-[-0.4px] lg:mt-6"
						>
							Framework
						</h3>

						<ul class="flex flex-col gap-3">
							{#each frameworks as { name, url, icon }}
								<li class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<a
										href={url}
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</a>
								</li>
							{/each}
						</ul>

						<h3
							class="text-primary-text mt-3 text-[18px] leading-[28px] font-semibold tracking-[-0.4px] lg:mt-6"
						>
							platforms
						</h3>

						<ul class="flex flex-col gap-3">
							{#each backend as { name, url, icon }}
								<li class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<a
										href={url}
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</a>
								</li>
							{/each}
						</ul>
					</div>

					<div class="flex w-full flex-col gap-4">
						<h3
							class="text-primary-text mt-3 text-[18px] leading-[28px] font-semibold tracking-[-0.4px] lg:mt-6"
						>
							Tools
						</h3>

						<ul class="flex flex-col gap-3">
							{#each tools as { name, url, icon }}
								<li class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<a
										href={url}
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- <div class="my-12 flex flex-col gap-4">
				<h3 class="text-[24px] leading-[33px] font-semibold tracking-[-1px]">The Inspo List</h3>
				<p
					class="text-secondary-text w-full text-base xl:w-[90%] xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
				>
					No cape, just code. These folks don’t just write software—they craft legacies. Each of
					them has shaped how I think, build, and grow as a dev. No particular order, just massive
					respect.
				</p>

				<div class="mt-8 flex flex-col gap-4 xl:flex-row">
					<div
						class={`order-2 grid gap-3 transition-all duration-300 lg:grid-cols-2 ${
							selected ? 'w-full xl:w-[600px]' : 'w-full xl:grid-cols-3'
						}`}
					>
						{#each DEVELOPERS as dev}
							<button
								class={`border-border-stroke-light hover:text-primary-text cursor-pointer rounded-lg border px-4 py-2 text-center text-sm duration-100 hover:border-zinc-200 hover:bg-white hover:font-bold ${
									dev.id === selected?.id
										? 'text-primary-text bg-white font-bold'
										: 'bg-primary-bg text-secondary-text font-medium'
								}`}
								onclick={() => {
									document.startViewTransition(() => {
										selected = dev;
									});
								}}
							>
								{dev.name}
							</button>
						{/each}
					</div>

					{#if selected}
						<div
							class="flex w-full items-start justify-start rounded-lg p-4 px-0 transition-all duration-300 xl:px-4"
							data-view-transition-name="dev-panel"
						>
							<div class="space-y-2">
								<h4 class="text-xl font-semibold">{selected.name}</h4>
								<p class="text-sm text-gray-500">{selected.title}</p>
								<p class="mt-2 text-base">{selected.reason}</p>
								<p class="text-muted text-sm">{selected.handle}</p>

								<div class="mt-2 flex flex-wrap gap-1">
									{#each selected.tags as tag}
										<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
											>{tag}</span
										>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div> -->
		</div>
	</div>
</div>
