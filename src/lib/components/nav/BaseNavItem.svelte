<script>
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/utils/clickOutside';

	const enableDropdownChildren = false;

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

	let isExpanded = false;
	let childrenList = null;

	function toggleChildren() {
		isExpanded = !isExpanded;
		if (isExpanded) {
			setTimeout(() => childrenList.focus(), 0);
		}
	}
	function hideChildren() {
		isExpanded = false;
	}

	$: appliedClasses =
		'root tw-relative tw-px-12 tw-py-2 tw-text-md md:tw-px-4 md:tw-py-0 ' +
		(whiteText ? 'tw-text-white ' : '') +
		(isCurrentPage || isExpanded ? 'active ' : '');
</script>

{#if item.children && enableDropdownChildren}
	<button class={appliedClasses} on:click={toggleChildren}>
		{item.text}
		<div
			class="{isExpanded
				? 'tw-opacity-100'
				: 'tw-opacity-0 tw-pointer-events-none'} tw-absolute tw-bg-white tw-rounded-lg tw-flex tw-flex-col tw-py-1.5 tw-top-10 md:tw-top-16 tw-w-32 tw-z-50"
			style="transition: opacity 0.1s; box-shadow: 0 0 3px #0001, 0 4px 22px #0001"
			use:clickOutside={hideChildren}
			bind:this={childrenList}
			tabindex="0"
		>
			{#each item.children as child}
				<a class="child tw-relative" href={child.href} on:click>
					{#if false}
						<!-- Selected Indicator. Not Yet Implemented! -->
						<div class="tw-bg-blue-300 tw-absolute tw-left-0 tw-w-0.5 tw-top-0 tw-h-full" />
					{/if}
					{child.text}
				</a>
			{/each}
		</div>
	</button>
{:else}
	<a href={item.href} class={appliedClasses} on:click>
		{item.text}
	</a>
{/if}

<style>
	.root {
		color: #333;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.root:hover {
		color: #999;
	}

	.root:active {
		color: #000;
	}

	.root.active {
		color: #7fc4fd !important;
	}

	.child {
		font-weight: 400;
		text-decoration: none;
		color: #333333;
		text-align: left;
		padding: 3px 14px;
	}

	.child:hover {
		color: #003058;
		background-color: #e1f3ff;
	}

	.child:active {
		background-color: #bdd2df;
	}

	.child.active {
		background-color: #5db6ff;
	}
</style>
