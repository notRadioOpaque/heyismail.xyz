<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';

	let { data }: PageProps = $props();
	let projects = data.projects;

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

	let projectCount = [1, 2, 3];

	const learnMoreBtnClicked = (e: MouseEvent, url: string) => {
		e.preventDefault();

		goto(`/projects/${url}`);
	};
</script>

<svelte:head>
	<title>Projects - Ismail Muyideen</title>
	<meta
		name="description"
		content="Explore the projects I've worked on as a frontend developer, from UI designs to interactive web applications."
	/>
	<meta property="og:title" content="Projects - Ismail Muyideen" />
	<meta
		property="og:description"
		content="Check out the web development projects I've built, including my work with Svelte, React, and more."
	/>
	<meta property="og:url" content="https://heyismail.xyz/projects" />
</svelte:head>

<section
	class="3xl:max-w-screen-3xl mx-auto max-w-screen-xl px-6 py-[70px] lg:mb-10 lg:px-[160px] 2xl:max-w-screen-2xl"
>
	<div class="flex flex-col items-center justify-center gap-2">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium">Featured Deliverables</p>
		</div>

		<p
			bind:this={heroText}
			class="mx-auto text-center text-[36px] leading-[45px] tracking-[-0.7px] xl:w-[70%] xl:text-[88px]
			xl:leading-[92px] xl:tracking-[-3.7px]"
		>
			Selected work
		</p>
	</div>

	<div bind:this={block} class="mt-10 flex flex-col gap-14 xl:mt-20 xl:gap-[120px]">
		{#each projects as { projectTitle, _id, shortDescription, description, coverImage, domain }}
			<a href={`/projects/${projectTitle}`} class="flex flex-col gap-8">
				<div class="h-max overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 xl:h-max">
					<img src={coverImage} alt="" />
				</div>

				<div class="flex flex-col justify-between xl:flex-row xl:items-center">
					<div class="flex flex-col gap-4">
						<p class="text-subtext-text text-sm xl:text-[17px]">{domain}</p>
						<p
							class="text-primary-text text-[24px] leading-[33px] tracking-[-1.2px] xl:text-[40px] xl:leading-[40px] xl:tracking-[-2.4px]"
						>
							{projectTitle}
						</p>
						<p class="text-subtext-text text-sm xl:text-[22px]">
							{shortDescription}
						</p>
					</div>

					<div class="mt-6 xl:mt-0">
						<Button label="Learn more" action={(e: any) => learnMoreBtnClicked(e, projectTitle)} />
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
