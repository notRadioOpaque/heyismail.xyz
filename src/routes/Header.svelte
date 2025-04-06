<script lang="ts">
	import { Button } from '$lib/components';
	import { NAV_LINKS } from '$lib/constants';
</script>

<header class="border-border-stroke-light flex items-center justify-between border px-20 py-8">
	<div class="flex w-full items-center justify-between">
		<div class="w-1/3">Logo</div>

		<nav class="flex w-1/3 gap-10">
			{#each NAV_LINKS as navLink}
				<a href={navLink.path} class="hover:text-subtext-text text-lg font-medium transition-colors"
					>{navLink.name}</a
				>
			{/each}
		</nav>

		<div class="flex w-1/3 items-center justify-end gap-8">
			<div class="flex items-center gap-1.5">
				<p class="text-subtext-text text-sm">Email:</p>

				<a href="/" class="hover:text-subtext-text text-sm font-medium transition-colors"
					>hello@notradioopaque.dev</a
				>
			</div>
			<Button label="Contact me" action={() => {}} />
		</div>
	</div>
</header>
