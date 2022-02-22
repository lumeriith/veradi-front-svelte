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
		'/svg/nav/VERADI.svg',
		'/svg/nav/About.svg',
		'/svg/nav/Contents.svg',
		'/svg/nav/Community.svg',
		'/svg/nav/Program.svg',
		'/svg/nav/Contact.svg',
		'/svg/nav/Login.svg'
	];
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
		<Image alt=".." src={svgVue[0]} style />
	</NavbarBrand>
	<NavbarToggler on:click={toggle} />
	<Collapse {isOpen} navbar expand="md">
		<Nav style="margin-left:50px;" navbar>
			<Dropdown>
				<DropdownItem href="/hire/intro">복지문화</DropdownItem>
			</Dropdown>
			<Dropdown>
				<DropdownItem href="/hire/detail">채용안내</DropdownItem>
			</Dropdown>
			<Dropdown>
				<DropdownItem href="/introduction/math">모집요강</DropdownItem>
			</Dropdown>
			<Dropdown>
				<DropdownItem href="/introduction/math">자주 묻는 질문</DropdownItem>
			</Dropdown>

			<NavItem
				style="transition-duration:{loginTransition}s; margin-left:{!isOpen
					? innerWidth - 735
					: 0}px;"
			>
				<NavLink href="/login"><Image alt=".." src={svgVue[6]} /></NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
