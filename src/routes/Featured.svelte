<script>
	import { Dot, ProjectCard } from '$lib/components';
	import SpecialBtn from '$lib/components/SpecialBtn.svelte';

	const pageTitle = '{> Featured Projects <}';
</script>

<section class="bg-secondary-bg flex flex-col gap-24 px-20 py-[160px]">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-3">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">{@html pageTitle}</p>
		</div>

		<p class="w-[70%] text-[90px] leading-[99px] tracking-[-3.6px] text-white">
			I blend creativity with technical expertise
		</p>

		<div class="mt-24">
			<SpecialBtn label="Become a client" action={() => {}} />
		</div>
	</div>

	<div class="flex w-full flex-col border">
		<div class="flex items-center">
			<ProjectCard variant="dark" />
			<ProjectCard variant="dark" />
		</div>

		<div class="flex h-full items-center">
			<ProjectCard variant="dark" />
			<ProjectCard variant="dark" />

			<div class="h-[500px] w-full px-4">
				<button
					class="group bg-tertiary-bg flex h-full w-full items-center justify-center rounded-[10px] border transition-all hover:rounded-none"
				>
					<p>View all projects</p>

					<div
						class="bg-secondary-bg -mr-3 ml-4 flex h-11 w-11 items-center justify-center rounded-full"
					>
						<!-- Arrow that rotates on hover -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
						>
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</div>
				</button>
			</div>
		</div>
	</div>
</section>
