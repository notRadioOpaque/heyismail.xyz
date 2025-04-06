<script lang="ts">
	type VariantType = 'light' | 'dark';
	let { variant = 'light' }: { variant: VariantType } = $props();
</script>

<div class="border-border-stroke w-full border px-[22px] pt-[70px] pb-[22px]">
	<div class="mb-[50px] ml-[50px] flex flex-col gap-3">
		<div class="flex items-center gap-3">
			<p
				class={`text-[17px] leading-[17px] tracking-[-0.7px] ${variant === 'light' ? 'text-primary-text' : 'text-white'}`}
			>
				<span class="text-tertiary-text">/</span> Pottery artist portfolio
				<span class="text-tertiary-text">/</span>
			</p>
			<p class="text-subtext-text text-[17px] leading-[17px] tracking-[-0.7px]">5/12/24</p>
		</div>

		<p
			class={`text-[30px] leading-[36px] tracking-[-1.2px] ${variant === 'light' ? 'text-primary-text' : 'text-white'}`}
		>
			SilverLynx Technologies
		</p>

		<p class="text-subtext-text text-base leading-[19.5px] tracking-[-0.6px]">
			Web Design and Web Development
		</p>
	</div>

	<div class="h-[420px] w-full overflow-hidden rounded-[10px] border bg-white">
		<img class="block w-full" src="" alt="a cat" />
	</div>
</div>
