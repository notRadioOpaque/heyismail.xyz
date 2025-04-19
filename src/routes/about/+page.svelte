<script lang="ts">
	import { TECH_STACK, TOOLS, DEVELOPERS } from '$lib/constants';
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

	let selected: any = $state(null);
</script>

<div class="flex w-full flex-col gap-8 py-[70px] md:gap-0">
	<div class="flex flex-col items-center justify-center gap-2">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium">Bits of Me</p>
		</div>

		<p
			bind:this={heroText}
			class="mx-auto text-center text-[36px] leading-[45px] tracking-[-0.7px] md:w-[70%] md:text-[88px]
			md:leading-[92px] md:tracking-[-3.7px]"
		>
			About Me
		</p>
	</div>

	<div bind:this={block} class="flex flex-col gap-10 md:flex-row md:gap-0">
		<div class="p-6 pt-0 md:h-screen md:w-1/3 md:p-20">
			<div class="flex w-full flex-col items-center gap-4">
				<div class="w-full overflow-hidden rounded-xl">
					<img class="block h-full w-full object-cover" src="images/ismail.png" alt="" />
				</div>

				<div class="flex w-full justify-between gap-4">
					<button
						class="bg-btn-bg hover:text-primary-text hover:bg-btn-hover-bg flex w-full cursor-pointer items-center justify-center gap-2 rounded-md p-4 text-sm font-medium text-white transition-colors"
						>View Resume <img class="w-5" src="./icons/link_icon.svg" alt="" /></button
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
						hello<span class="text-tertiary-text">@</span>notradioopaque.dev
					</a>
				</div>
			</div>
		</div>

		<div class="p-6 pt-0 md:w-2/3 md:p-20 md:pl-5">
			<div class="w-full md:w-4/5">
				<p
					class="text-primary-text text-[20px] leading-[28px] tracking-[-0.2px] md:text-[24px] md:leading-[33px] md:tracking-[-0.5px]"
				>
					Hi, I’m Andrew, a passionate web designer with a love for creating visually stunning
					experiences. With a strong background in design and front-end development, I specialize in
					crafting responsive websites that not only look great but also provide interactions across
					all devices.
				</p>

				<div
					class="text-secondary-text my-6 flex flex-col gap-4 text-base md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
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

				<div class="mt-10 mb-12 flex flex-col gap-4 md:mt-20">
					<h3 class="text-[24px] leading-[33px] font-semibold tracking-[-1px]">Soft Skills</h3>
					<p
						class="text-secondary-text text-base md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
					>
						Certain skills I've picked along the way that deserves mentioning:
					</p>
					<ul class="flex flex-col gap-4">
						<li class="flex gap-3">
							<div class="bg-secondary-bg mt-3 aspect-square h-[6px] w-[6px]"></div>
							<div class="">
								<span
									class="text-primary-text text-base font-semibold md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
									>Attention to detail</span
								><span class="mr-1">:</span>
								<span
									class="text-secondary-text text-base break-words whitespace-normal md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
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
									class="text-primary-text text-base font-semibold md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
									>Open-source/Collaboration</span
								><span class="mr-1">:</span>
								<span
									class="text-secondary-text text-base break-words whitespace-normal md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
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
									class="text-primary-text text-base font-semibold md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
									>Ability to work with little supervision</span
								><span class="mr-1">:</span>
								<span
									class="text-secondary-text text-base break-words whitespace-normal md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
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
						class="text-secondary-text text-base md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
					>
						Technologies, platforms, and gadgets I use regularly as a frontend developer — from
						React to Twitch, from Figma to my trusty MacBook.
					</p>
				</div>

				<div class="mt-6 flex w-full flex-col gap-8 md:flex-row">
					<div class="flex w-full flex-col gap-4">
						<h3
							class="text-primary-text text-[18px] leading-[28px] font-semibold tracking-[-0.4px]"
						>
							Tech Stack
						</h3>

						<ul class="flex flex-col gap-3">
							{#each TECH_STACK as { name, url, description }}
								<li class="flex items-center gap-3">
									<div class="bg-tertiary-bg h-5 w-5"></div>
									<a
										href={url}
										class="text-tertiary-text text-base break-words whitespace-normal underline md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
										>{name}</a
									>
									<!-- <p
										class="text-secondary-text text-base break-words whitespace-normal md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
									>
										- {description}
									</p> -->
								</li>
							{/each}
						</ul>
					</div>

					<div class="flex w-full flex-col gap-4">
						<h3
							class="text-primary-text text-[18px] leading-[28px] font-semibold tracking-[-0.4px]"
						>
							Tech Stack
						</h3>

						<ul class="flex flex-col gap-3">
							{#each TOOLS as { name, url, description }}
								<li class="flex items-center gap-3">
									<div class="bg-tertiary-bg h-5 w-5"></div>
									<a
										href={url}
										class="text-tertiary-text text-base break-words whitespace-normal underline md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
										>{name}</a
									>
									<!-- <p
										class="text-secondary-text text-base break-words whitespace-normal md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
									>
										- {description}
									</p> -->
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<div class="my-12 flex flex-col gap-4">
				<h3 class="text-[24px] leading-[33px] font-semibold tracking-[-1px]">The Inspo List</h3>
				<p
					class="text-secondary-text w-full text-base md:w-[90%] md:text-[18px] md:leading-[28px] md:tracking-[-0.2px]"
				>
					No cape, just code. These folks don’t just write software—they craft legacies. Each of
					them has shaped how I think, build, and grow as a dev. No particular order, just massive
					respect.
				</p>

				<div class="mt-8 flex flex-col gap-4 md:flex-row">
					<div
						class={`order-2 grid gap-3 transition-all duration-300 md:grid-cols-2 ${
							selected ? 'w-full md:w-[600px]' : 'w-full md:grid-cols-3'
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
							class="flex w-full items-start justify-start rounded-lg p-4 px-0 transition-all duration-300 md:px-4"
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
			</div>
		</div>
	</div>
</div>
