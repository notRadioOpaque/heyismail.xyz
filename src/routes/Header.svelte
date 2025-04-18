<script lang="ts">
	import { Button } from '$lib/components';
	import { NAV_LINKS } from '$lib/constants';
	import { page } from '$app/state';

	let currentPath: string = $state('');

	$effect(() => {
		currentPath = page.url.pathname;
	});

	const isActive = (path: string) => currentPath.startsWith(path);
</script>

<header class="border-border-stroke-light flex items-center justify-between border-b px-20 py-8">
	<div
		class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl items-center justify-between 2xl:max-w-screen-2xl"
	>
		<div class="w-1/3">Logo</div>

		<nav class="flex w-1/3 gap-6">
			{#each NAV_LINKS as navLink}
				<div class="relative">
					<a
						href={navLink.path}
						class="hover:text-subtext-text text-sm font-medium transition-colors">{navLink.name}</a
					>

					<div
						class={`bg-secondary-bg absolute bottom-[-10px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-all ${isActive(navLink.path) ? 'block' : 'hidden'}`}
					></div>
				</div>
			{/each}
		</nav>

		<div class="flex w-1/3 items-center justify-end gap-8">
			<div class="flex items-center gap-1.5">
				<p class="text-subtext-text text-sm">Email:</p>

				<a href="/" class="hover:text-subtext-text text-sm font-medium transition-colors"
					>hello@notradioopaque.dev</a
				>
			</div>
			<Button label="Get in touch" action={() => {}} />
		</div>
	</div>
</header>
