<script lang="ts">
	// Define the size prop with a default value of "md"
	let { size = 'md' }: { size: 'sm' | 'md' } = $props();

	// Define size mappings for the different options
	const sizeMap = {
		sm: {
			orb: 'w-2 h-2',
			glow: 'w-3 h-3'
		},
		md: {
			orb: 'w-3 h-3',
			glow: 'w-4 h-4'
		}
	};

	// Get the correct size classes based on the prop
	const orbSize = $derived(sizeMap[size]?.orb);
	const glowSize = $derived(sizeMap[size]?.glow);
</script>

<div class="relative flex w-max items-center justify-center">
	<!-- The main orb with pulsating animation -->
	<div class="{glowSize} bg-tertiary-bg animate-ping rounded-full"></div>

	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 {orbSize} bg-tertiary-bg rounded-full"
	></div>
</div>
