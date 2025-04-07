<script>
	let { action, label } = $props();
</script>

<button
	onclick={action}
	class="bg-btn-bg hover:text-primary-text hover:bg-btn-hover-bg cursor-pointer rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
>
	{label}
</button>
