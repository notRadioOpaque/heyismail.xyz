<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { EXPERIENCES, CONTRIBUTION_HIGHLIGHTS } from '$lib/constants';
	import ReactCalendar from '$lib/components/ReactCalendar.svelte';
	import GraphButton from '$lib/components/GraphButton.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	$inspect(data);

	const thisYear = new Date().getFullYear();
	const years = Array.from({ length: thisYear - 2022 + 1 }, (_, i) => thisYear - i);

	let calendarYear = $state(thisYear);

	const updateYear = (y: number) => {
		calendarYear = y;
	};

	const hightlight = $derived(
		CONTRIBUTION_HIGHLIGHTS[calendarYear as keyof typeof CONTRIBUTION_HIGHLIGHTS]
	);

	let heroText: HTMLHeadingElement;
	let subText: HTMLDivElement;
	let graph: HTMLDivElement;

	onMount(() => {
		const tl = gsap.timeline();

		tl.from([heroText, subText], {
			y: 100,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});

		tl.from(
			graph,
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

<section
	class="3xl:max-w-screen-3xl mx-auto flex max-w-screen-xl flex-col gap-14 px-6 py-[70px] lg:gap-24 lg:px-20 xl:gap-28 2xl:max-w-screen-2xl"
>
	<div class="flex flex-col items-center justify-center gap-2">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium">Hands-On Highlights</p>
		</div>

		<p
			bind:this={heroText}
			class="mx-auto text-center text-[36px] leading-[45px] tracking-[-0.7px] xl:w-[70%] xl:text-[88px]
			xl:leading-[92px] xl:tracking-[-3.7px]"
		>
			My Experience
		</p>
	</div>

	<div bind:this={graph} class="flex flex-col gap-4 xl:gap-10">
		<div class="flex flex-col gap-4">
			<p
				class="text-primary-text text-[24px] leading-[23px] tracking-[-0.9px] xl:text-[40px] xl:leading-[46px] xl:tracking-[-1.8px]"
			>
				Contribution Graph
			</p>
			<p class="text-subtext-text text-sm font-normal xl:font-medium">
				{hightlight}
			</p>
		</div>

		<div class="flex flex-col gap-4 xl:flex-row">
			<div
				class="bg-primary-bg border-border-stroke-light max-h-fit max-w-fit rounded-lg border p-8"
			>
				<ReactCalendar year={calendarYear} />
			</div>

			<div class="flex flex-row flex-wrap justify-start gap-2 xl:flex-col">
				{#each years as year}
					<GraphButton
						{year}
						currentYear={calendarYear ?? thisYear}
						action={() => updateYear(year)}
					/>
				{/each}
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-10 lg:gap-16 xl:gap-20">
		<p
			class="text-primary-text text-[24px] leading-[23px] tracking-[-0.9px] xl:text-[40px] xl:leading-[46px] xl:tracking-[-1.8px]"
		>
			Work Experience
		</p>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
			{#each EXPERIENCES as experience}
				<ExperienceCard {...experience} />
			{/each}
		</div>
	</div>
</section>
