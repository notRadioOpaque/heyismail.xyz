<script lang="ts">
	import { Button } from '$lib/components';
	import { NAV_LINKS } from '$lib/constants';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';

	let currentPath: string = $state('');
	let menuOpen = $state(false);

	$effect(() => {
		currentPath = page.url.pathname;
	});

	const isActive = (path: string) => currentPath.startsWith(path);

	const showMenu = () => {
		menuOpen = true;
		document.body.style.overflow = 'hidden';
	};

	const hideMenu = () => {
		menuOpen = false;
		document.body.style.overflow = '';
	};
</script>

<header
	class="border-border-stroke-light flex h-[80px] items-center justify-between border-b px-6 py-0 lg:px-20 xl:h-full xl:py-8"
>
	<div
		class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl items-center justify-between 2xl:max-w-screen-2xl"
	>
		<div class="w-1/3">Logo</div>

		<nav class="hidden w-1/3 items-center justify-center gap-6 lg:flex">
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

		<div class="hidden w-max items-center justify-between gap-8 lg:flex lg:w-1/3">
			<div class="ml-auto min-w-[120px] flex-shrink-0">
				<Button label="Get in touch" action={() => {}} />
			</div>
		</div>

		<div class="flex items-center justify-center lg:hidden">
			{#if !menuOpen}
				<button class="cursor-pointer" onclick={showMenu}>
					<img src="./icons/menu_icon.svg" class="h-8 w-8" alt="Open menu" />
				</button>
			{/if}
		</div>

		{#if menuOpen}
			<div
				in:fly={{ x: 200, duration: 300 }}
				out:fly={{ x: 300, duration: 300 }}
				class="fixed inset-0 z-50 xl:hidden"
			>
				<!-- Backdrop -->
				<div
					class="absolute inset-0 bg-black/80 opacity-100 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
					onclick={hideMenu}
					onkeydown={(e) => e.key === 'Enter' && hideMenu()}
					tabindex="0"
					role="button"
				></div>

				<button
					class="absolute top-5 right-5 z-40 w-max cursor-pointer transition-transform hover:scale-110"
					onclick={hideMenu}
				>
					<img src="./icons/close_icon.svg" class="h-8 w-8" alt="Close menu" />
				</button>

				<!-- Menu -->
				<div
					class="absolute top-0 right-0 flex h-full w-full translate-x-0 flex-col items-center justify-center gap-10 bg-transparent p-6 transition-transform duration-300 ease-in-out"
				>
					<nav class="mt-12 flex flex-col gap-10 text-center">
						{#each NAV_LINKS as navLink}
							<a
								href={navLink.path}
								onclick={hideMenu}
								class={`hover:text-tertiary-text tracking-[-0.9px]font-semibold text-[24px] leading-[23px] transition-colors ${isActive(navLink.path) ? 'text-tertiary-text' : 'text-white'}`}
								>{navLink.name}</a
							>
						{/each}
					</nav>

					<div class="mt-6 flex w-full flex-col items-center justify-end gap-8">
						<button
							onclick={() => {}}
							class="hover:text-primary-text text-primary-text hover:bg-btn-hover-bg cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-medium transition-colors duration-300 ease-in-out"
						>
							Get in touch
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>
