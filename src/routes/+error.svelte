<script>
	import SpecialBtn from '$lib/components/SpecialBtn.svelte';
	import { goto } from '$app/navigation';
</script>

<div class="mt-[-110px] flex min-h-screen flex-col items-center justify-center">
	<p class="text-[70px] tracking-[-2.7px]">Whoops! 🫠</p>

	<p class="my-4 text-[18px] font-normal">you strayed!</p>

	<div class="mt-10">
		<SpecialBtn label="Find your way back 🏠" action={() => goto('/')}></SpecialBtn>
	</div>
</div>
