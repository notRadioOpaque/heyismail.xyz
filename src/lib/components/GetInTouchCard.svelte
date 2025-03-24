<script>
	let { label, action } = $props();
</script>

<button
	onclick={action}
	class="group bg-tertiary-bg text-primary-text relative h-64 w-full max-w-2xl rounded-3xl text-lg font-medium transition-all duration-300"
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
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-gray-800"
				>
					<!-- Simple curved arrow -->
					<path
						d="M12 17C12 17 16 17 17 17C18 17 18 16 18 15C18 14 18 10 18 10"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path d="M18 10L15 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</div>
		</div>
	</div>
</button>
