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

	import img_veradi from '$lib/static/img/nav/VERADI.svg';
	import img_login from '$lib/static/img/nav/Login.svg';

	import VeradiNavItem from './BaseNavItem.svelte';
	import { VeradiUrl } from '../url/VeradiUrl.svelte';
	import LoginPopup from '../login/LoginPopup.svelte';
	import { onMount } from 'svelte';

	export let items = [];
	export let showCareer = false;
	export let whiteTextWhenTransparent = false;
	export let animateBackground = false;
	export let hideLogin = false;
	export let alignItems = 'left';
	export let gapX = '6px';

	let isOpen = false;

	const toggle = () => {
		isOpen = !isOpen;
		updateOpacity();
	};

	let opacity = 0;
	function updateOpacity() {
		if (isOpen) opacity = 1.0;
		else {
			opacity = document.documentElement.scrollTop > 5 ? 1.0 : 0.0;
		}
	}

	function handleResize() {
		if (window.innerWidth > 767) {
			isOpen = false;
			updateOpacity();
		}
	}
	$: innerWidth = 0;

	let isLoginPopupShown = false;
	function openLoginPopup() {
		isLoginPopupShown = true;
	}
	function closeLoginPopup() {
		isLoginPopupShown = false;
	}

	let navJustifyContent = 'flex-start';
	$: isWhiteText = whiteTextWhenTransparent && opacity < 0.01;
	$: {
		if (alignItems === 'left') navJustifyContent = 'flex-start';
		else if (alignItems === 'right') navJustifyContent = 'flex-end';
		else if (alignItems === 'center') navJustifyContent = 'center';
	}

	onMount(() => updateOpacity());
</script>

<svelte:window on:scroll={updateOpacity} on:resize={handleResize} bind:innerWidth />

<div style="height: 64.5px;" />
<Navbar
	light
	expand="md"
	class="top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg"
	style="transition: background {animateBackground
		? '0.2s'
		: '0s'}, box-shadow 0.2s; background: rgba(255,255,255,{opacity}); position: fixed; box-shadow: 0 2px 4px 0 rgba(0,0,0, {opacity *
		0.2});"
>
	{#if showCareer}
		<NavbarBrand class="flex items-center gap-2" style="margin-left:20px">
			<Image alt=".." src={img_veradi} style />
			<a
				href={VeradiUrl.hireIndex}
				class="{isWhiteText ? 'tw-text-gray-200' : 'tw-text-gray-500'} tw-text-sm tw-no-underline"
				>Career</a
			>
		</NavbarBrand>
	{:else}
		<NavbarBrand style="margin-left:20px">
			<Image alt=".." src={img_veradi} style />
		</NavbarBrand>
	{/if}
	<NavbarToggler on:click={toggle} />
	<Collapse {isOpen} navbar expand="md">
		<Nav
			class="tw-ml-12 tw-flex-1"
			style="column-gap: {gapX}; justify-content: {navJustifyContent};"
			navbar
		>
			{#each items as item}
				<VeradiNavItem {item} whiteText={isWhiteText} />
			{/each}
			<div class="tw-w-4" />
			{#if !hideLogin}
				<NavItem class="md:tw-ml-auto">
					<NavLink on:click={openLoginPopup}><Image alt=".." src={img_login} /></NavLink>
				</NavItem>
			{/if}
		</Nav>
	</Collapse>
</Navbar>

{#if isLoginPopupShown}
	<LoginPopup onClose={closeLoginPopup} />
{/if}
