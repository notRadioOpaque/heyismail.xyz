<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { EXPERIENCES } from '$lib/constants';
	import ReactCalendar from '$lib/components/ReactCalendar.svelte';
	import GraphButton from '$lib/components/GraphButton.svelte';

	const thisYear = new Date().getFullYear();
	const years = Array.from({ length: thisYear - 2022 + 1 }, (_, i) => thisYear - i);

	let calendarYear = $state(thisYear);

	const updateYear = (y: number) => {
		calendarYear = y;
	};
</script>

<section class="flex flex-col gap-40 px-20 py-[120px]">
	<div class="flex h-[400px] flex-col gap-14">
		<p class="text-primary-text text-[40px] leading-[46px] tracking-[-1.8px]">Contribution Graph</p>

		<div class="flex flex-col gap-4 xl:flex-row">
			<div
				class="dark:bg-primary-bg bg-secondary-bg max-h-fit max-w-fit rounded-lg border border-zinc-200 p-8 dark:border-zinc-800"
			>
				<ReactCalendar year={calendarYear} />
			</div>

			<div class="flex flex-row flex-wrap justify-start gap-2 xl:flex-col">
				{#each years as year}
					<GraphButton {year} currentYear={year ?? thisYear} action={() => updateYear(year)} />
				{/each}
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-20">
		<p class="text-primary-text text-[40px] leading-[46px] tracking-[-1.8px]">Work Experience</p>

		<div class="grid grid-cols-1 gap-24 md:grid-cols-2">
			{#each EXPERIENCES as experience}
				<ExperienceCard {...experience} />
			{/each}
		</div>
	</div>
</section>
