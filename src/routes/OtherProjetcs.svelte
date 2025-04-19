<script>
	import { Dot, ProjectCard } from '$lib/components';
</script>

<section class="flex flex-col gap-24 py-[100px]">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-subtext-text text-sm font-medium xl:text-lg">Latest Projects</p>
		</div>

		<p
			class="mx-auto text-[36px] leading-[45px] tracking-[-0.7px] lg:w-[70%] lg:text-[88px]
			lg:leading-[92px] lg:tracking-[-3.7px]"
		>
			Some of my other projects
		</p>
	</div>

	<div class="flex w-full flex-col xl:flex-row">
		<div class="border-border-stroke-light w-full border xl:border-r-0">
			<ProjectCard variant="light" imgHeight={'350'} />
		</div>

		<div class="border-border-stroke-light w-full border border-t-0 xl:border-t xl:border-r-0">
			<ProjectCard variant="light" imgHeight={'350'} />
		</div>

		<div class="border-border-stroke-light w-full border border-t-0 xl:border-t">
			<ProjectCard variant="light" imgHeight={'350'} />
		</div>
	</div>
</section>
