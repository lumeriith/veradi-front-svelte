<script>
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Image
	} from 'sveltestrap';

	import { fly } from 'svelte/transition';

	import img_veradi from '$lib/static/img/nav/VERADI.svg';
	import img_login from '$lib/static/img/nav/Login.svg';
	import Icon from '@iconify/svelte';
	import { clickOutside } from '$lib/utils/clickOutside';

	import BaseNavItem from './BaseNavItem.svelte';
	import BaseNavExtItem from './BaseNavExtItem.svelte';

	import veradiUrls from '$lib/data/veradiUrls.js';
	import LoginPopup from '../login/LoginPopup.svelte';
	import { onMount } from 'svelte';
	import NarrowContainer from '../NarrowContainer.svelte';
	import { isLoggedIn } from '$lib/store';
	import { logout } from '$lib/firebase/account';

	export let items = [];
	export let extItems = [];
	export let showCareer = false;
	export let whiteTextWhenTransparent = false;
	export let animateBackground = false;
	export let hideLogin = false;
	export let alignItems = 'left';
	export let gapX = '6px';

	let isScrolled = 0;
	function updateIsScrolled() {
		isScrolled = document.documentElement.scrollTop > 5;
	}

	let isDropdownOpen = false;
	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
	function closeDropdown() {
		isDropdownOpen = false;
	}

	let isLoginPopupShown = false;
	function openLoginPopup() {
		isLoginPopupShown = true;
	}
	function closeLoginPopup() {
		isLoginPopupShown = false;
	}

	let navJustifyContent = 'flex-start';
	$: isWhiteText = whiteTextWhenTransparent && isScrolled;
	$: {
		if (alignItems === 'left') navJustifyContent = 'flex-start';
		else if (alignItems === 'right') navJustifyContent = 'flex-end';
		else if (alignItems === 'center') navJustifyContent = 'center';
	}

	onMount(() => updateIsScrolled());
</script>

<svelte:window on:scroll={updateIsScrolled} />

<nav
	class="tw-h-12 md:tw-h-14 tw-z-50 tw-w-full tw-fixed tw-top-0 tw-bg-white {isScrolled
		? 'tw-shadow-md'
		: ''} tw-whitespace-nowrap"
	use:clickOutside={closeDropdown}
>
	<NarrowContainer class="tw-h-full tw-flex tw-items-stretch">
		<header class="tw-flex tw-items-center tw-mr-8 tw-z-10">
			<a href={showCareer ? veradiUrls.hireIndex : '/'}
				><img src={img_veradi} alt="베라디 로고" /></a
			>
			{#if showCareer}
				<a
					href={veradiUrls.hireIndex}
					class="{isWhiteText
						? 'tw-text-gray-200'
						: 'tw-text-gray-500'} tw-text-xs tw-no-underline tw-ml-1.5">Career</a
				>
			{/if}
		</header>
		<!-- PC -->
		<main class="tw-flex-1 tw-hidden md:tw-flex" style="justify-content: {alignItems};">
			{#each items as item}
				<BaseNavItem {item} whiteText={isWhiteText} />
			{/each}
			<div class="tw-flex-1" />
			{#each extItems as item}
				<BaseNavExtItem {item} whiteText={isWhiteText} />
			{/each}
			{#if !hideLogin}
				<!-- <button on:click={openLoginPopup}><img alt=".." src={img_login} /></button> -->
				{#if $isLoggedIn}
					<button on:click={logout} class="tw-font-bold tw-text-[#648fb1]">LOGOUT</button>
				{:else}
					<button on:click={openLoginPopup} class="tw-font-bold tw-text-[#648fb1]">LOGIN</button>
				{/if}
			{/if}
		</main>
		<!-- Mobile -->
		<button class="tw-ml-auto tw-block md:tw-hidden menu-button tw-z-10" on:click={toggleDropdown}
			><Icon icon="eva:menu-fill" class="tw-text-2xl" /></button
		>
		{#if isDropdownOpen}
			<main
				transition:fly={{ duration: 300, y: -300, opacity: 1 }}
				class="tw-flex md:tw-hidden tw-flex-col tw-w-full tw-fixed tw-top-12 tw-left-0 tw-shrink-0 tw-text-left tw-shadow-md tw-bg-white tw-pb-3"
			>
				{#each items as item}
					<BaseNavItem {item} on:click={closeDropdown} />
				{/each}
				<div class="tw-h-4" />
				{#each extItems as item}
					<BaseNavExtItem {item} whiteText={isWhiteText} />
				{/each}
				{#if !hideLogin}
					<!-- <button on:click={openLoginPopup}><img alt=".." src={img_login} /></button> -->
					<button
						on:click={openLoginPopup}
						class="tw-font-normal tw-text-[#648fb1] tw-px-12 tw-py-1">LOGIN</button
					>
				{/if}
			</main>
		{/if}
	</NarrowContainer>
</nav>

<div
	class="tw-block md:tw-hidden tw-fixed tw-inset-0 tw-bg-[#0005] tw-z-10 tw-transition-opacity {isDropdownOpen
		? 'tw-opacity-100'

    
		: 'tw-opacity-0 tw-pointer-events-none'}"
/>

<div class="tw-h-12 md:tw-h-14" />

{#if isLoginPopupShown}
	<LoginPopup onClose={closeLoginPopup} />
{/if}

<style>
	.menu-button {
		color: #888;
	}

	.menu-button:active {
		color: #444;
	}
</style>
