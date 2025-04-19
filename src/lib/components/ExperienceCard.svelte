<script lang="ts">
	interface Props {
		role: string;
		company: string;
		logoURL: string;
		startDate: string;
		endDate: string;
		description: string;
	}

	let { role, company, logoURL, startDate, endDate, description }: Props = $props();
</script>

<div class="flex gap-3 lg:gap-10">
	<a
		href="/"
		class="border-border-stroke-light flex aspect-square h-[80px] w-[80px] items-center justify-center rounded-lg border p-3"
	>
		<img src={logoURL} alt="logo" class=" block h-full w-full rounded-lg object-contain" />
	</a>

	<div class="flex flex-col gap-1.5">
		<p class="text-primary-text text-lg font-semibold">{company}</p>
		<p class="text-primary-text text-base">{role}</p>
		<p class="text-subtext-text text-sm">{startDate} - {endDate}</p>
		<p class="text-subtext-text mt-2.5 text-sm lg:text-base">{description}</p>
	</div>
</div>
