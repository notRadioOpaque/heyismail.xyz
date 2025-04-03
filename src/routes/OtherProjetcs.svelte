<script>
	import { Dot, ProjectCard } from '$lib/components';
</script>

<section class="bg-secondary-bg flex flex-col gap-24 px-10 py-[160px]">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">Latest Projects</p>
		</div>

		<p class="w-[70%] text-[90px] leading-[99px] tracking-[-3.6px] text-white">
			Some of my other projects
		</p>
	</div>

	<div class="flex w-full flex-col border">
		<div class="flex h-full items-center">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</section>
