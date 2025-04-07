<script lang="ts">
	import { onMount } from 'svelte';
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import GitHubContributionCalendar from './GithubCalendar';

	let { year }: { year: number } = $props();

	let container: HTMLElement;
	let root: ReactDOM.Root;

	// Cache previously rendered React trees per year
	const calendarCache = new Map<number, React.ReactElement>();

	function getCalendar(year: number) {
		if (!calendarCache.has(year)) {
			const calendar = React.createElement(GitHubContributionCalendar, { year });
			calendarCache.set(year, calendar);
		}
		return calendarCache.get(year);
	}

	function renderCalendar() {
		const calendar = getCalendar(year);
		root.render(calendar);
	}

	onMount(() => {
		root = ReactDOM.createRoot(container);

		// Pre-render and cache all years (optional)
		for (const y of Array.from({ length: year - 2022 + 1 }, (_, i) => year - i)) {
			getCalendar(y);
		}

		renderCalendar(); // Initial
	});

	$effect(() => {
		if (root) {
			renderCalendar(); // Re-render on year change, with cache
		}
	});
</script>

<div bind:this={container}></div>
