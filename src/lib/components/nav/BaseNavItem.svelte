<script>
	import {
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		NavItem,
		NavLink
	} from 'sveltestrap';
	import { page } from '$app/stores';

	import './BaseNavItem.css';

	export let item = {
		text: '',
		href: '',
		children: []
	};
	export let whiteText = false;

	function isUrlEqual(a = '', b = '') {
		if (a.endsWith('/')) a = a.substring(0, a.length - 1);
		if (b.endsWith('/')) b = b.substring(0, b.length - 1);

		a = a.toLowerCase();
		b = b.toLowerCase();

		return a == b;
	}

	let isCurrentPage = false;
	$: {
		let currentUrl = $page.url.pathname;
		if (item.children) {
			isCurrentPage = false;
			item.children.forEach((child) => {
				if (isUrlEqual(currentUrl, child.href)) {
					isCurrentPage = true;
				}
			});
		} else {
			isCurrentPage = isUrlEqual(currentUrl, item.href);
		}
	}
</script>

{#if item.children}
	<Dropdown nav inNavbar class={isCurrentPage ? 'active' : ''}>
		<DropdownToggle nav class={whiteText ? 'tw-text-white' : ''}>{item.text}</DropdownToggle>
		<DropdownMenu>
			{#each item.children as child}
				<DropdownItem href={child.href}>{child.text}</DropdownItem>
			{/each}
		</DropdownMenu>
	</Dropdown>
{:else}
	<NavItem class={isCurrentPage ? 'active' : ''}>
		<NavLink href={item.href} class={whiteText ? 'tw-text-white' : ''}>{item.text}</NavLink>
	</NavItem>
{/if}
