<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';

	let { children } = $props();
</script>

<Header />

<main class="">
	{@render children()}
</main>

<ScrollToTopButton />

<Footer />
