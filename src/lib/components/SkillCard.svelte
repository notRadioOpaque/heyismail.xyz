<script lang="ts">
	interface Props {
		label: string;
		icon: string;
		subText: string;
	}

	let { label, icon, subText }: Props = $props();
</script>

<div class="w-full max-w-2xl rounded-xl bg-white p-8 shadow-sm">
	<div class="flex items-center gap-6">
		<img src={icon} alt={label} class="h-16 w-16 object-contain" />

		<div>
			<h3 class="text-2xl font-medium text-gray-900">{label}</h3>
			<p class="mt-1 text-gray-500">{subText}</p>
		</div>
	</div>
</div>
