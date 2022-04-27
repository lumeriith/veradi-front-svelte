<script>
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
		Image
	} from 'sveltestrap/src';

	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	let isOpen = false;

	const toggle = () => {
		isOpen = !isOpen;
		updateOpacity();
	};

	let opacity = 0;
	function updateOpacity() {
		opacity = isOpen ? 1.0 : Math.min(document.documentElement.scrollTop / 300, 1.0);
	}

	function handleResize() {
		if (window.innerWidth > 767) {
			isOpen = false;
			updateOpacity();
		}
	}

	$: innerWidth = 0;
	let navWidth = 0;
	function updateNavWidth() {
		handleLoginTransition();
		navWidth = innerWidth;
	}

	let loginTransition = 0;
	function handleLoginTransition() {
		if (navWidth < innerWidth) {
			loginTransition = 1.0;
		} else {
			loginTransition = 0;
		}
	}

	const svgVue = [
		'svg/nav/VERADI.svg',
		'svg/nav/About.svg',
		'svg/nav/Contents.svg',
		'svg/nav/Community.svg',
		'svg/nav/Program.svg',
		'svg/nav/Contact.svg',
		'svg/nav/Login.svg'
	];

  import img_veradi from '$lib/static/img/nav/VERADI.svg'
  import img_about from '$lib/static/img/nav/About.svg'
  import img_contents from '$lib/static/img/nav/Contents.svg'
  import img_community from '$lib/static/img/nav/Community.svg'
  import img_program from '$lib/static/img/nav/Program.svg'
  import img_contact from '$lib/static/img/nav/Contact.svg'
  import img_login from '$lib/static/img/nav/Login.svg'
</script>

<svelte:window
	on:scroll={updateOpacity}
	on:resize={handleResize}
	on:resize={updateNavWidth}
	bind:innerWidth
/>

<div style="height: 64.5px;" />
<Navbar
	light
	expand="md"
	class="top-0 z-50 w-full flex flex-wrap items-center justify-between px-0 py-2 navbar-expand-lg"
	style="transition: background 0.2s, box-shadow 0.2s; background: rgba(255,255,255,{opacity}); position: fixed; box-shadow: 0 2px 4px 0 rgba(0,0,0, {opacity *
		0.2});"
>
	<NavbarBrand style="margin-left:20px">
		<Image alt=".." src={img_veradi} style />
	</NavbarBrand>
	<NavbarToggler on:click={toggle} />
	<Collapse {isOpen} navbar expand="md">
		<Nav style="margin-left:50px;" navbar>
			<Dropdown>
				<DropdownItem href={VeradiUrl.hireWelfare}>복지문화</DropdownItem>
			</Dropdown>
			<Dropdown>
				<DropdownItem href={VeradiUrl.hireNotice}>채용안내</DropdownItem>
			</Dropdown>
			<Dropdown>
				<DropdownItem href={VeradiUrl.hireRecruitment}>모집요강</DropdownItem>
			</Dropdown>
			<Dropdown>
				<DropdownItem href={VeradiUrl.hireQna}>자주 묻는 질문</DropdownItem>
			</Dropdown>

			<NavItem
				style="transition-duration:{loginTransition}s; margin-left:{!isOpen
					? innerWidth - 735
					: 0}px;"
			>
				<NavLink href={VeradiUrl.login}><Image alt=".." src={img_login} /></NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
