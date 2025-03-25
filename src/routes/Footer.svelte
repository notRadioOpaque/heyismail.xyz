<script>
	import { Dot, SpecialBtn } from '$lib/components';
</script>

<footer class="bg-secondary-bg">
	<div class="flex items-center justify-between px-10 py-8">
		<div class="flex items-center gap-2">
			<Dot size="sm" />
			<p class="text-sm text-white">Available for work</p>
		</div>

		<div class="flex items-center gap-3">
			<p class="text-subtext-text text-sm">Back to top</p>

			<div class="flex h-11 w-11 items-center justify-center rounded-full bg-white">
				<img class="mx-2" src="icons/arrow_up.svg" alt="svelte icon" width="24" height="24" />
			</div>
		</div>
	</div>

	<div class="border-border-stroke flex h-[795px] items-center justify-center border-y px-10">
		<div class="flex w-1/2 flex-col gap-10">
			<h2 class="text-[96px] leading-[96px] tracking-[-4.8px] text-white">
				Let's create something extraordinary together<span class="text-tertiary-text">.</span>
			</h2>
			<p class="text-subtext-text text-2xl">Let’s make an impact</p>
		</div>
		<div class="flex w-1/2 flex-col gap-10 pl-14">
			<div class="h-[92px] border border-white"></div>
			<div class="mb-4 flex flex-col gap-7">
				<div class="flex flex-col gap-4">
					<p class="text-subtext-text text-base">Contact me</p>
					<a
						href="/"
						class="text-[40px] leading-[40px] tracking-[-1.2px] text-white transition-transform hover:translate-x-4"
					>
						hello<span class="text-tertiary-text">@</span>notradioopaque.dev
					</a>
				</div>

				<p class="text-subtext-text w-[480px] text-[22px] leading-[30px] tracking-[-0.9]">
					Hit me up if you’re looking for a <span class="text-white"
						>fast, reliable web-designer</span
					> who can bring your vision to life
				</p>
			</div>

			<SpecialBtn label="Book a call" action={() => {}} />
		</div>
	</div>

	<div class="flex w-full items-center justify-between px-10 py-[60px]">
		<div class="text-2xl text-white">Logo</div>

		<p class="text-subtext-text text-sm">Copyright © Ismail Muyideen, 2025</p>

		<div class="text-subtext-text flex items-center text-sm">
			Built with <span class="mx-2">☕</span> and
			<img class="mx-2" src="icons/svelte_icon.svg" alt="svelte icon" width="12" height="12" />
		</div>
	</div>
</footer>
