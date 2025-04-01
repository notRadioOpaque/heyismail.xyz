<script lang="ts">
	interface Props {
		label: string;
		href: string;
	}

	let { label, href }: Props = $props();
</script>

<a
	{href}
	class="group bg-tertiary-bg text-primary-text relative h-52 w-full max-w-2xl rounded-3xl text-lg font-medium transition-all duration-300"
>
	<div class="flex h-full w-full flex-col justify-between p-12">
		<!-- Text that slides right on hover -->
		<div class="w-max transform transition-transform duration-300 group-hover:translate-x-2">
			{label}
		</div>

		<div class="flex justify-end">
			<!-- Arrow that moves diagonally up and inward on hover -->
			<div
				class="transition-transform duration-300 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]"
			>
				<img src="/icons/arrow_enter.svg" alt="" />
			</div>
		</div>
	</div>
</a>
