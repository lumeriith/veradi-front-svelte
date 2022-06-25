<script>
	import '$lib/notusTemplate/styles/index.css';
	import '$lib/notusTemplate/styles/tailwind.css';

	import 'bootstrap/dist/css/bootstrap.min.css';

	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	onMount(() => AOS.init());
</script>

<slot />
