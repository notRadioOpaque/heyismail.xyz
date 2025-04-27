<script lang="ts">
	export let src: string;
	export let placeholder: string;
	export let alt = '';

	let loaded = false;
</script>

<div class="relative h-full w-full overflow-hidden rounded-xl">
	<img
		src={placeholder}
		{alt}
		class="absolute inset-0 h-full w-full scale-110 object-cover blur-md filter transition-opacity duration-500"
		style:opacity={loaded ? 0 : 1}
	/>
	<img
		{src}
		{alt}
		class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
		onload={() => (loaded = true)}
		style:opacity={loaded ? 1 : 0}
	/>
</div>
