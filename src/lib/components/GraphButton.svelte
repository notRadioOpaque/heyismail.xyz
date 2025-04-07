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
	class={`border-border-stroke-light cursor-pointer rounded-lg border px-4 py-2 text-center text-sm duration-100 hover:border-zinc-200 ${
		year === currentYear
			? 'text-primary-text bg-white font-extrabold'
			: 'bg-primary-bg text-secondary-text font-medium'
	}`}
	title={`View Graph for the year ${year}`}
>
	{year}
</button>
