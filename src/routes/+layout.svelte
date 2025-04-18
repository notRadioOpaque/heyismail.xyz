<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';

	let { children } = $props();
</script>

<Header />

<main class="3xl:max-w-screen-3xl mx-auto w-full 2xl:max-w-screen-2xl">
	{@render children()}
</main>

<ScrollToTopButton />

<Footer />
