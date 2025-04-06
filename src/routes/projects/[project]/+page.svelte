<script>
	import SpecialBtn from '$lib/components/SpecialBtn.svelte';
	import OtherProjetcs from '../../OtherProjetcs.svelte';
</script>

<div class="px-20 py-[80px]">
	<p class="text-[86px] leading-[90px] tracking-[-3.4px]">EchoStream Entertainment</p>

	<div class="mt-20 flex justify-between">
		<aside class="w-[40%]">
			<div class="flex flex-col">
				<div class="border-border-stroke-light flex flex-col gap-2 border-b py-6">
					<p class="text-subtext-text text-[17px]">Project Type</p>
					<p class="text-[20px]">Mobile App</p>
				</div>
				<div class="border-border-stroke-light flex flex-col gap-2 border-b py-6">
					<p class="text-subtext-text text-[17px]">Tech Stack</p>
					<p class="text-[20px]">Mobile App</p>
				</div>
				<div class="flex flex-col gap-2 py-6">
					<p class="text-subtext-text text-[17px]">Role</p>
					<p class="text-[20px]">Mobile App</p>
				</div>
			</div>

			<div class="mt-8">
				<SpecialBtn label="Visit website" action={() => {}} />
			</div>
		</aside>

		<section class="flex w-full flex-col gap-8 pt-6 pl-24">
			<p class="text-[26px] leading-[36px] font-medium tracking-[-1px]">
				The goal was to create a modern, elegant, and user-friendly website that would not only
				attract potential clients but also provide a seamless online experience, showcasing the
				studio and allowing customers to book appointments and explore services.
			</p>

			<p class="text-subtext-text text-[17px]">
				I’m passionate about empowering creators with no-code web design tools. My mission is to
				bring your digital visions to life quickly and effectively.
			</p>

			<div class="h-[583px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
				<img src="" alt="" />
			</div>
		</section>
	</div>

	<div class="mt-20">
		<OtherProjetcs />
	</div>
</div>
