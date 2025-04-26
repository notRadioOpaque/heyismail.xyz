<script lang="ts">
	interface Props {
		role: string;
		company: string;
		icon: string;
		startDate: string;
		endDate: string;
		description: string;
	}

	let { role, company, icon, startDate, endDate, description }: Props = $props();

	import { parseISO, format } from 'date-fns';

	const formatDate = (dateString: string): string => {
		const parsedDate = parseISO(dateString);
		return format(parsedDate, 'MMM dd, yyyy');
	};
</script>

<div class="flex gap-3 xl:gap-10">
	<a
		href="/"
		class="border-border-stroke-light flex aspect-square h-[70px] w-[70px] items-center justify-center rounded-lg border bg-[#3d8c2e] p-3"
	>
		<img src={icon} alt="logo" class="block h-full w-full rounded-lg object-contain" />
	</a>

	<div class="flex flex-col gap-1.5">
		<p class="text-primary-text text-lg font-semibold">{company}</p>
		<p class="text-primary-text text-base">{role}</p>
		<p class="text-subtext-text text-sm">{formatDate(startDate)} - {formatDate(endDate)}</p>
		<p class="text-subtext-text mt-2.5 text-sm xl:text-base">{description}</p>
	</div>
</div>
