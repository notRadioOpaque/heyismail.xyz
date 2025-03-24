<script lang="ts">
	import { Button, SpecialBtn, Dot } from '$lib/components';
	import GetInTouchCard from '$lib/components/GetInTouchCard.svelte';
</script>

<h1 class="!text-primary-text text-2xl">Welcome to SvelteKit</h1>

<Dot size="sm" />

<Button action={() => console.log('clicked')} label="Contact me"></Button>
<SpecialBtn action={() => console.log('clicked special')} label="See what i can do" />

<GetInTouchCard label="Get in touch" href="" />
