<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Global meta tags (can be overridden in specific pages if needed) -->
	<meta
		name="description"
		content="Ismail Muyideen – Frontend developer, creating modern web experiences."
	/>
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://heyismail.xyz/default-og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

<main class="">
	{@render children()}
</main>

<ScrollToTopButton />

<Footer />
