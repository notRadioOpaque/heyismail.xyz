<script lang="ts">
	interface Props {
		year: number;
		currentYear: number;
		action: () => void;
	}

	let { year, currentYear, action }: Props = $props();
</script>

<button
	onclick={action}
	class={`rounded-lg border border-transparent px-4 py-2 text-center text-sm font-medium duration-100 hover:border-zinc-200 dark:hover:border-zinc-700 ${
		year === currentYear
			? 'dark:bg-secondary-color bg-secondary-color text-white hover:border-transparent dark:text-zinc-800 dark:hover:border-transparent'
			: 'dark:bg-primary-bg bg-zinc-50 text-zinc-800 dark:text-white'
	}`}
	title={`View Graph for the year ${year}`}
>
	{year}
</button>
