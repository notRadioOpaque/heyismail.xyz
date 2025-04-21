<script>
	let { action, label } = $props();
</script>

<button
	onclick={action}
	class="bg-btn-bg hover:text-primary-text hover:bg-btn-hover-bg cursor-pointer rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap text-white transition-colors duration-300 ease-in-out"
>
	{label}
</button>
