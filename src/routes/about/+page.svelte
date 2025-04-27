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
						href={resumeLink}
						class="bg-btn-bg hover:text-primary-text hover:bg-btn-hover-bg flex w-full cursor-pointer items-center justify-center gap-2 rounded-md p-4 text-sm font-medium text-white transition-colors"
						>View Resume <img class="w-5" src="./icons/link_icon.svg" alt="" /></a
					>
					<button
						class="bg-btn-bg hover:text-primary-text hover:bg-btn-hover-bg flex w-max cursor-pointer items-center justify-center rounded-md p-4 text-sm font-medium transition-colors"
						><img src="./icons/download_icon.svg" alt="" /></button
					>
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
					Hi, I’m Andrew, a passionate web designer with a love for creating visually stunning
					experiences. With a strong background in design and front-end development, I specialize in
					crafting responsive websites that not only look great but also provide interactions across
					all devices.
				</p>

				<div
					class="text-secondary-text my-6 flex flex-col gap-4 text-base xl:text-[18px] xl:leading-[28px] xl:tracking-[-0.2px]"
				>
					<p>
						Over the years, I’ve had the opportunity to work with a diverse range of clients, from
						startups to established brands, helping them bring their visions to life online.
					</p>

					<p>
						I strongly believe in continuous learning and improving myself, so I try my best to
						learn in any situation possible, unfavorable or not.
					</p>

					<p>
						Beyond learning, I enjoy writing technical articles and creating projects that both
						inspire and benefit fellow developers. You can find my recent posts on freeCodeCamp and
						my personal blog hosted on this site.
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
									I take pleasure in creating designs and UIs with careful precision, emphasizing
									quality over quantity.
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
									I founded a community on GitHub called Communitypro that helps newbie developers
									learn how to contribute to open-source projects and collaborate in building
									together. Currently we are over 400 people strong with room for growth.
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
									I understand people are busy and would love to get things done timely, so I do my
									best in delivering assignments and projects with little supervision, sparing you
									the need to closely manage/oversee my work.
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
								<a href={url} class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<p
										class="text-tertiary-text text-sm break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</p>
								</a>
							{/each}
						</div>

						<h3
							class="text-primary-text mt-3 text-[18px] leading-[28px] font-semibold tracking-[-0.4px] lg:mt-6"
						>
							Framework
						</h3>

						<ul class="flex flex-col gap-3">
							{#each frameworks as { name, url, icon }}
								<a href={url} class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<p
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</p>
								</a>
							{/each}
						</ul>

						<h3
							class="text-primary-text mt-3 text-[18px] leading-[28px] font-semibold tracking-[-0.4px] lg:mt-6"
						>
							platforms
						</h3>

						<ul class="flex flex-col gap-3">
							{#each backend as { name, url, icon }}
								<a href={url} class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<p
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</p>
								</a>
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
								<a href={url} class="flex items-center gap-3">
									<div class="h-5 w-5">
										<img src={icon} class="h-full w-full" alt="" />
									</div>
									<p
										class="text-tertiary-text text-base break-words whitespace-normal underline xl:text-base xl:leading-[28px] xl:tracking-[-0.2px]"
									>
										{name}
									</p>
								</a>
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
