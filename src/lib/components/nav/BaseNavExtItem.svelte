<script>
	import Icon from '@iconify/svelte';

	export let item = {
		text: '',
		href: ''
	};
	export let whiteText = false;

	$: appliedClasses =
		'root tw-relative tw-px-12 tw-py-2 tw-text-md md:tw-px-4 md:tw-py-0 ' +
		(whiteText ? 'tw-text-white ' : '');
</script>

<a href={item.href} class={appliedClasses} on:click>
	{item.text}<Icon icon="akar-icons:arrow-up-right" />
</a>

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
