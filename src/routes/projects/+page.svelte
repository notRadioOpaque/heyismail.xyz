<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Dot from '$lib/components/Dot.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

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

	const learnMoreBtnClicked = (e: MouseEvent) => {
		e.preventDefault();

		console.log('learn more btn clicked');
	};
</script>

<section class="px-6 py-[70px] xl:px-[160px]">
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
		{#each projectCount as project}
			<a href={`/projects/${project}`} class="flex flex-col gap-8">
				<div
					class="h-[350px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 xl:h-[683px]"
				>
					<img src="" alt="" />
				</div>

				<div class="flex flex-col justify-between xl:flex-row xl:items-center">
					<div class="flex flex-col gap-4">
						<p class="text-subtext-text text-sm xl:text-[17px]">Mobile app</p>
						<p
							class="text-primary-text text-[24px] leading-[33px] tracking-[-1.2px] xl:text-[60px] xl:leading-[66px] xl:tracking-[-2.4px]"
						>
							EchoStream Entertainment
						</p>
						<p class="text-subtext-text text-sm xl:text-[22px]">
							Interface is streamlined for ease of navigation, with clean layouts
						</p>
					</div>

					<div class="mt-6 xl:mt-0">
						<Button label="Learn more" action={learnMoreBtnClicked} />
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
