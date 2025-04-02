<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Dot from '$lib/components/Dot.svelte';

	let projectCount = [1, 2, 3];

	const learnMoreBtnClicked = (e: MouseEvent) => {
		e.preventDefault();

		console.log('learn more btn clicked');
	};
</script>

<section class="p-[160px]">
	<div class="flex flex-col items-center justify-center gap-5">
		<div class="flex items-center gap-2">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">My recent projects</p>
		</div>

		<p class="text-primary-text text-center text-[90px] leading-[99px] tracking-[-3.6px]">
			Selected work
		</p>
	</div>

	<div class="mt-20 flex flex-col gap-[120px]">
		{#each projectCount as project}
			<a href="/" class="flex flex-col gap-8">
				<div class="h-[683px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
					<img src="" alt="" />
				</div>

				<div class="flex items-center justify-between">
					<div class="flex flex-col gap-4">
						<p class="text-subtext-text text-[17px]">Mobile app</p>
						<p class="text-primary-text text-[60px] leading-[66px] tracking-[-2.4px]">
							EchoStream Entertainment
						</p>
						<p class="text-subtext-text text-[22px]">
							Interface is streamlined for ease of navigation, with clean layouts
						</p>
					</div>

					<div>
						<Button label="Learn more" action={learnMoreBtnClicked} />
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
