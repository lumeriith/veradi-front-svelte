<script>
	import { Input } from 'sveltestrap';
	export let value;
</script>

<select class="tw-text-sm" bind:value><slot /></select>

<style>
	select {
		border: 1px solid #dddddd;
		padding: 4px 36px 4px 12px;
	}
</style>
