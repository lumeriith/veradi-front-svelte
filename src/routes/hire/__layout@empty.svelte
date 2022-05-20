<script>
	import '$lib/notusTemplate/styles/index.css';
	import '$lib/notusTemplate/styles/tailwind.css';

	import 'bootstrap/dist/css/bootstrap.min.css';
	import HireNavBar from '$lib/components/nav/HireNavBar.svelte';

	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import BottomNav from '$lib/components/nav/BottomNav.svelte';
	onMount(() => AOS.init());
</script>

<HireNavBar />
<slot />
<BottomNav />
