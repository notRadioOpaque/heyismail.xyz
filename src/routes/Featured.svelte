<script lang="ts">
	import { Dot, ProjectCard } from '$lib/components';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const pageTitle = '{> Featured Works <}';

	let section: any;
	let title: HTMLDivElement;
	let description: HTMLDivElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (!section || !title || !description) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: '-20% top',
				end: 'bottom center'
			}
		});

		tl.from([title, description], {
			y: 50,
			opacity: 0,
			duration: 0.5,
			ease: 'power4.out'
		});
	});

	function navigate(route: string) {
		goto(route);
	}
</script>

<section
	bind:this={section}
	class="bg-secondary-bg section flex flex-col gap-24 px-6 py-20 lg:px-20 xl:py-[160px]"
>
	<div
		class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col gap-4 2xl:max-w-screen-2xl"
	>
		<div bind:this={title} class="mb-10 flex items-center gap-3 xl:mb-0">
			<Dot size="md" />
			<p class="text-subtext-text text-sm font-medium xl:text-lg">{@html pageTitle}</p>
		</div>

		<p
			bind:this={description}
			class="w-full text-[36px] leading-[45px] tracking-[-0.7px] text-white xl:w-[90%] xl:text-[70px]
			xl:leading-[92px] xl:tracking-[-3.7px]"
		>
			I blend creativity with technical expertise
		</p>
	</div>

	<div
		class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col gap-4 2xl:max-w-screen-2xl"
	>
		<div class="flex flex-col items-center border-white lg:flex-row">
			<div class="border-border-stroke w-full border lg:border-r-0">
				<ProjectCard imgHeight={'460'} />
			</div>
			<div class="border-border-stroke w-full border">
				<ProjectCard imgHeight={'460'} />
			</div>
		</div>

		<div class="flex h-full flex-col items-center lg:flex-row">
			<div
				class="border-border-stroke w-full border border-t-0 lg:border-t lg:border-r-0 xl:border-t-0"
			>
				<ProjectCard imgHeight={'350'} />
			</div>
			<div class="border-border-stroke w-full border border-t-0 lg:border-t xl:border-t-0">
				<ProjectCard imgHeight={'350'} />
			</div>

			<div class="hidden h-[500px] w-[100%] px-[35px] xl:block">
				<button
					class="group hover:bg-tertiary-bg flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#3d8c2e] transition-all hover:scale-[110%]"
					onclick={() => navigate('/projects')}
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
