<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { EXPERIENCES } from '$lib/constants';
</script>

<section class="flex flex-col gap-40 px-20 py-[120px]">
	<div class="flex h-[400px] flex-col gap-14 border">
		<p class="text-primary-text text-[40px] leading-[46px] tracking-[-1.8px]">Contribution Graph</p>

		<div>contribution graph goes here...</div>
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
