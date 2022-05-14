<script>
	import { fade, fly } from 'svelte/transition';
	import LoginCard from './cards/LoginCard.svelte';
	export let onClose = () => {};

	let state = 'login'; // login, register, findpw
</script>

<div class="tw-fixed tw-inset-0 tw-z-[100] tw-flex tw-justify-center tw-items-center">
	<div
		class="tw-absolute tw-inset-0 tw-bg-[#0008]"
		on:click={onClose}
		transition:fade={{ duration: 200 }}
	/>
	{#if state == 'login'}
		<div transition:fly={{ duration: 200, y: 40 }}>
			<LoginCard {onClose} />
		</div>
	{/if}

	<div />
</div>
