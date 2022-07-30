<script>
	export let buttons = [{ value: '', text: '' }];
	export let value = null;
</script>

<div class="tw-flex tw-gap-3">
	{#each buttons as b}
		<button
			class="tw-text-xl tw-p-2 tw-font-bold {value === b.value
				? 'tw-text-[#3c9fcb]'
				: 'tw-text-[#9f9f9f]'}"
			style="border-bottom: 2px solid {value === b.value
				? '#3c9fcb'
				: '#3c9fcb00'}; transition: border-bottom 0.1s"
			on:click={() => (value = b.value)}>{b.text}</button
		>
	{/each}
</div>

<style>
	button:hover {
		filter: brightness(1.2);
	}
	button:active {
		filter: brightness(0.8);
	}
</style>
