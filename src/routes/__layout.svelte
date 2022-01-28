<script>
	import '$lib/notusTemplate/styles/index.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import MainNavBar from '$lib/components/MainNavBar.svelte';

	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	onMount(() => AOS.init());
</script>

<MainNavBar />
<slot />
