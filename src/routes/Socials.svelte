<script lang="ts">
	import { Dot } from '$lib/components';
	import GetInTouchCard from '$lib/components/GetInTouchCard.svelte';
	import SocialCard from '$lib/components/SocialCard.svelte';
	import { SOCIALS } from '$lib/constants';

	const pageTitle = '{> Contact Me <}';
</script>

<section class="flex flex-col gap-24 bg-[#f7f7f7] px-20 py-[160px]">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<Dot size="md" />
			<p class="text-subtext-text text-lg font-medium">{@html pageTitle}</p>
		</div>

		<p class="text-primary-text w-[70%] text-[90px] leading-[99px] tracking-[-3.6px]">
			I’m all over the internet
		</p>

		<div class="mt-[80px] grid grid-cols-3 gap-8">
			{#each SOCIALS as social}
				<SocialCard {...social} />
			{/each}

			<GetInTouchCard label="Get in touch" href="/" />
		</div>
	</div>
</section>
