<script>
	import { VeradiUrl } from '../url/VeradiUrl.svelte';
	import BaseNavBar from './BaseNavBar.svelte';

	export let whiteTextWhenTransparent = false;

	const items = [
		{
			text: '복지문화',
			href: VeradiUrl.hireWelfare
		},
		{
			text: '채용안내',
			href: VeradiUrl.hireNotice
		},
		{
			text: '모집요강',
			href: VeradiUrl.hireYogang
		},
		{
			text: '자주 묻는 질문',
			href: VeradiUrl.hireQna
		}
	];
</script>

<BaseNavBar
	showCareer
	hideLogin
	alignItems="right"
	gapX="20px"
	{items}
	{whiteTextWhenTransparent}
/>
