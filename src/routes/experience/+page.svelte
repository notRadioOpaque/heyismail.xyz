<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { EXPERIENCES, CONTRIBUTION_HIGHLIGHTS } from '$lib/constants';
	import ReactCalendar from '$lib/components/ReactCalendar.svelte';
	import GraphButton from '$lib/components/GraphButton.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

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

<section class="flex flex-col gap-14 px-6 py-[70px] lg:gap-28 lg:px-20">
	<div class="flex flex-col items-center justify-center gap-2">
		<div bind:this={subText} class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium">Hands-On Highlights</p>
		</div>

		<p
			bind:this={heroText}
			class="mx-auto text-center text-[36px] leading-[45px] tracking-[-0.7px] lg:w-[70%] lg:text-[88px]
			lg:leading-[92px] lg:tracking-[-3.7px]"
		>
			My Experience
		</p>
	</div>

	<div bind:this={graph} class="flex flex-col gap-4 lg:gap-10">
		<div class="flex flex-col gap-4">
			<p
				class="text-primary-text text-[24px] leading-[23px] tracking-[-0.9px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.8px]"
			>
				Contribution Graph
			</p>
			<p class="text-subtext-text text-sm font-normal lg:font-medium">
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

	<div class="flex flex-col gap-10 lg:gap-20">
		<p
			class="text-primary-text text-[24px] leading-[23px] tracking-[-0.9px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1.8px]"
		>
			Work Experience
		</p>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
			{#each EXPERIENCES as experience}
				<ExperienceCard {...experience} />
			{/each}
		</div>
	</div>
</section>
