<script lang="ts">
	import Featured from './Featured.svelte';
	import Hero from './Hero.svelte';
	import Socials from './Socials.svelte';

	let { data } = $props();
	const { image } = data.about[0];

	// $inspect(about);
</script>

<svelte:head>
	<title>Home - Ismail Muyideen</title>
	<meta
		name="description"
		content="Welcome to the portfolio of Ismail Muyideen, a passionate frontend developer crafting modern web experiences."
	/>
	<meta property="og:title" content="Home - Ismail Muyideen" />
	<meta
		property="og:description"
		content="Check out my projects, skills, and experience as a frontend developer."
	/>
	<meta property="og:url" content="https://heyismail.xyz/" />
</svelte:head>

<Hero {image} />
<Featured />
<Socials />
