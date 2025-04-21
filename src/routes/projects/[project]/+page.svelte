<script lang="ts">
	import SpecialBtn from '$lib/components/SpecialBtn.svelte';
	import OtherProjetcs from '../../OtherProjetcs.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let heroText: HTMLParagraphElement;

	onMount(() => {
		const tl = gsap.timeline();

		tl.from([heroText], {
			y: 100,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});
	});
</script>

<div class="px-6 py-10 lg:px-20 xl:py-[80px]">
	<p
		bind:this={heroText}
		class="text-[36px] leading-[45px] tracking-[-0.7px] xl:w-[90%]
		xl:text-[88px] xl:leading-[92px] xl:tracking-[-3.7px]"
	>
		EchoStream Entertainment
	</p>

	<div class="mt-8 flex w-full flex-col justify-between lg:w-2/3 xl:mt-20 xl:w-full xl:flex-row">
		<aside class="w-full lg:w-1/2 xl:w-[40%]">
			<div class="flex flex-col">
				<div class="border-border-stroke-light flex flex-col gap-2 border-b py-6">
					<p class="text-subtext-text text-sm xl:text-[17px]">Project Type</p>
					<p class="text-sm xl:text-[20px]">Mobile App</p>
				</div>
				<div class="border-border-stroke-light flex flex-col gap-2 border-b py-6">
					<p class="text-subtext-text text-sm xl:text-[17px]">Tech Stack</p>
					<p class="text-sm xl:text-[20px]">Mobile App</p>
				</div>
				<div class="flex flex-col gap-2 py-6">
					<p class="text-subtext-text text-sm xl:text-[17px]">Role</p>
					<p class="text-sm xl:text-[20px]">Mobile App</p>
				</div>
			</div>

			<div class="mt-8">
				<SpecialBtn label="Visit website" action={() => {}} />
			</div>
		</aside>

		<section class="flex w-full flex-col gap-8 pt-10 pl-0 xl:pt-6 xl:pl-24">
			<p
				class="text-[20px] leading-[28px] tracking-[-0.2px] xl:text-[24px] xl:leading-[33px] xl:tracking-[-0.5px]"
			>
				The goal was to create a modern, elegant, and user-friendly website that would not only
				attract potential clients but also provide a seamless online experience, showcasing the
				studio and allowing customers to book appointments and explore services.
			</p>

			<p class="text-subtext-text text-base xl:text-[17px]">
				I’m passionate about empowering creators with no-code web design tools. My mission is to
				bring your digital visions to life quickly and effectively.
			</p>

			<div
				class="h-[400px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 xl:h-[583px]"
			>
				<img src="" alt="" />
			</div>
		</section>
	</div>

	<div class="mt-20">
		<OtherProjetcs />
	</div>
</div>
