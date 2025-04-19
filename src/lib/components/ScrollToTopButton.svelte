<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, derived } from 'svelte/store';

	export let headerSelector = 'header';
	export let footerSelector = 'footer';
	let btn: HTMLButtonElement;

	const headerVisible = writable(true);
	const footerVisible = writable(false);

	const showBtn = derived(
		[headerVisible, footerVisible],
		([$headerVisible, $footerVisible]) => !$headerVisible && !$footerVisible
	);

	onMount(() => {
		const header = document.querySelector(headerSelector);
		const footer = document.querySelector(footerSelector);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.target === header) {
						headerVisible.set(entry.isIntersecting);
					}
					if (entry.target === footer) {
						footerVisible.set(entry.isIntersecting);
					}
				});
			},
			{ threshold: 0 }
		);

		if (header) observer.observe(header);
		if (footer) observer.observe(footer);

		return () => observer.disconnect();
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if $showBtn}
	<button
		bind:this={btn}
		onclick={scrollToTop}
		class="group bg-tertiary-bg fixed right-10 bottom-10 z-50 hidden cursor-pointer items-center rounded-full px-1 py-1 transition-all duration-500 ease-in-out md:flex"
	>
		<div
			class="relative flex h-[60px] w-[60px] items-center justify-start overflow-hidden rounded-full transition-all duration-500 ease-in-out group-hover:w-[170px]"
		>
			<p
				class="ml-3 text-base font-medium whitespace-nowrap text-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:delay-100"
			>
				Back to top
			</p>

			<div
				class="bg-tertiary-bg absolute right-2 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500 ease-in-out group-hover:bg-white"
			>
				<img src="/icons/arrow_up.svg" alt="arrow" class="h-5 w-5" />
			</div>
		</div>
	</button>
{/if}
