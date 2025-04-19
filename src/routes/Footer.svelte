<script lang="ts">
	import { Dot, SpecialBtn } from '$lib/components';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

	let footer: any;
	let heroText: HTMLHeadingElement;

	onMount(() => {
		const splitText = new SplitType(heroText, { types: 'chars,words,lines' });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: footer,
				start: '-30% top',
				end: 'bottom center'
			}
		});

		tl.from(splitText.lines, {
			y: 40,
			opacity: 0,
			stagger: 0.2,
			duration: 0.8,
			ease: 'power4.out'
		});
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer bind:this={footer} class="bg-secondary-bg">
	<div class="">
		<div
			class="3xl:max-w-screen-3xl mx-auto flex max-w-screen-xl items-center justify-between px-6 py-8 lg:px-0 2xl:max-w-screen-2xl"
		>
			<div class="flex items-center gap-2">
				<Dot size="sm" />
				<p class="text-sm text-white">Available for work</p>
			</div>

			<button
				onclick={scrollToTop}
				class="group flex cursor-pointer items-center gap-3 transition-all"
			>
				<p class="text-subtext-text text-sm transition-all group-hover:underline">Back to top</p>

				<div
					class="flex h-11 w-11 items-center justify-center rounded-full bg-white transition-all group-hover:rotate-45"
				>
					<img class="mx-2" src="/icons/arrow_up.svg" alt="svelte icon" width="24" height="24" />
				</div>
			</button>
		</div>
	</div>

	<div class="border-border-stroke border-y">
		<div
			class=" 3xl:max-w-screen-3xl mx-auto flex h-max w-full max-w-screen-xl flex-col items-center justify-center lg:h-[795px] lg:flex-row 2xl:max-w-screen-2xl"
		>
			<div
				class="order-2 my-6 flex w-full flex-col gap-10 px-6 lg:order-1 lg:my-0 lg:w-1/2 lg:px-0"
			>
				<h2
					bind:this={heroText}
					class="w-full text-[30px] leading-[45px] tracking-[-0.7px] text-white lg:text-[88px]
				lg:leading-[92px] lg:tracking-[-3.7px]"
				>
					Let's create something extraordinary together<span class="text-tertiary-text">.</span>
				</h2>
				<p class="text-subtext-text text-base lg:text-2xl">Let’s make an impact</p>
			</div>
			<div class="order-1 flex w-full flex-col gap-10 px-6 lg:order-2 lg:w-1/2 lg:pl-14">
				<div class="h-max">
					<div class="flex h-[150px] w-full items-center gap-4">
						<div class="w-[100px] overflow-hidden rounded-xl">
							<img class="block h-full w-full object-cover" src="/images/ismail.png" alt="" />
						</div>

						<div class="flex flex-col">
							<p class="text-[22px] leading-[30.8px] font-medium tracking-[-0.9px] text-white">
								Ismail Muyideen
							</p>
							<p
								class="text-subtext-text text-[15px] leading-[19.5px] font-medium tracking-[-0.6px]"
							>
								Front-end Engineer
							</p>

							<div class="mt-4 flex gap-3">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_199_1294)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
											fill="#878787"
										/>
									</g>
									<defs>
										<clipPath id="clip0_199_1294">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_199_1210)">
										<path
											d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z"
											fill="#878787"
										/>
									</g>
									<defs>
										<clipPath id="clip0_199_1210">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_200_1382)">
										<path
											d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
											fill="#878787"
										/>
										<path
											d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
											fill="#667085"
										/>
										<path
											d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
											fill="#667085"
										/>
									</g>
									<defs>
										<clipPath id="clip0_200_1382">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="mb-4 flex flex-col gap-7">
					<div class="flex flex-col gap-4">
						<p class="text-subtext-text text-base">Contact me</p>
						<a
							href="/"
							class="text-[24px] leading-[40px] tracking-[-1.2px] text-white transition-transform hover:translate-x-4 lg:text-[40px]"
						>
							hello<span class="text-tertiary-text">@</span>notradioopaque.dev
						</a>
					</div>

					<p
						class="text-subtext-text w-full text-lg leading-[30px] tracking-[-0.9] lg:w-[480px] lg:text-[22px]"
					>
						Hit me up if you’re looking for a <span class="text-white"
							>fast, reliable web-designer</span
						> who can bring your vision to life
					</p>
				</div>

				<SpecialBtn label="Book a call" action={() => {}} />
			</div>
		</div>
	</div>

	<div class="">
		<div
			class="3xl:max-w-screen-3xl mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-6 py-8 lg:flex-row lg:gap-0 lg:py-[60px] 2xl:max-w-screen-2xl"
		>
			<div class="text-2xl text-white">Logo</div>

			<p class="text-subtext-text text-sm">Copyright © Ismail Muyideen, 2025</p>

			<div class="text-subtext-text flex items-center text-sm">
				Built with <span class="mx-2">☕</span> and
				<img class="mx-2" src="/icons/svelte_icon.svg" alt="svelte icon" width="12" height="12" />
			</div>
		</div>
	</div>
</footer>
