<script>
	import { Dot, ProjectCard } from '$lib/components';
</script>

<section class="flex flex-col gap-24 py-[100px]">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">Latest Projects</p>
		</div>

		<p class="text-primary-text text-[90px] leading-[99px] tracking-[-3.6px]">
			Some of my other projects
		</p>
	</div>

	<div class="flex w-full flex-col border">
		<div class="flex h-full items-center">
			<ProjectCard variant="light" />
			<ProjectCard variant="light" />
			<ProjectCard variant="light" />
		</div>
	</div>
</section>
