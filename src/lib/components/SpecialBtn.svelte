<script>
	let { label, action } = $props();
</script>

<button
	onclick={action}
	class="group bg-tertiary-bg text-primary-text shadow-tertiary-bg/50 relative flex w-max cursor-pointer items-center rounded-full px-6 py-2 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-none"
>
	<span>{label}</span>

	<div class="-mr-3 ml-4 flex h-11 w-11 items-center justify-center rounded-full bg-white">
		<!-- Arrow that rotates on hover -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
		>
			<line x1="5" y1="12" x2="19" y2="12"></line>
			<polyline points="12 5 19 12 12 19"></polyline>
		</svg>
	</div>
</button>
