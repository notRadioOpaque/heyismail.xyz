<script lang="ts">
	import { goto } from '$app/navigation';
	interface PropType {
		variant?: 'light' | 'dark';
		// imgHeight: string;
		domain: string;
		projectTitle: string;
		description: string;
		img: string;
	}

	let { variant = 'dark', domain, projectTitle, description, img }: PropType = $props();

	function navigate(route: string) {
		goto(route);
	}
</script>

<button
	class={`w-full cursor-pointer px-[22px] pt-[70px] pb-[22px] transition-all ${variant === 'light' ? 'hover:bg-[#f0f0f0]' : 'hover:bg-[#181818]'}`}
	onclick={() => navigate(`/projects/${projectTitle}`)}
>
	<div class="mb-[50px] ml-6 flex flex-col gap-3">
		<div class="flex items-center gap-3">
			<p
				class={`text-[17px] leading-[17px] tracking-[-0.7px] ${variant === 'light' ? 'text-primary-text' : 'text-white'}`}
			>
				<span class="text-tertiary-text">/</span>
				{domain}
				<span class="text-tertiary-text">/</span>
			</p>
		</div>

		<p
			class={`text-start text-[30px] leading-[36px] tracking-[-1.2px] ${variant === 'light' ? 'text-primary-text' : 'text-white'}`}
		>
			{projectTitle}
		</p>

		<p class="text-subtext-text text-start text-base leading-[19.5px] tracking-[-0.6px]">
			{description}
		</p>
	</div>

	<div class=" h-full w-full overflow-hidden rounded-[10px] bg-[#3d8c2e]">
		<img class="block h-full w-full object-cover" src={img} alt="a cat" />
	</div>
</button>
