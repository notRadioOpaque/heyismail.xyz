<script lang="ts">
	let { variant }: { variant: 'light' | 'dark' } = $props();
</script>

<a href="/" class="flex w-max items-end gap-0">
	<img src="/ghost_hand.svg" alt="Wave Icon" class="h-12 w-12" />
	<span class={`text-base font-bold ${variant === 'light' ? '!text-white' : 'text-primary-text'}`}
		>15MA1L</span
	>
</a>
