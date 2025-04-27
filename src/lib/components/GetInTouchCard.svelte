<script lang="ts">
	interface Props {
		label: string;
		href: string;
	}

	let { label, href }: Props = $props();
</script>

<a
	{href}
	class="group bg-tertiary-bg text-primary-text relative h-24 w-full max-w-2xl rounded-3xl text-base font-medium transition-all duration-300 xl:h-52 xl:text-lg"
>
	<div class="flex h-full w-full flex-col justify-between p-6 xl:p-12">
		<div class="w-max transform transition-transform duration-300 group-hover:translate-x-2">
			{label}
		</div>

		<div class="flex justify-end">
			<div
				class="transition-transform duration-300 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]"
			>
				<img src="/icons/arrow_enter.svg" class="h-full w-full" alt="" />
			</div>
		</div>
	</div>
</a>
