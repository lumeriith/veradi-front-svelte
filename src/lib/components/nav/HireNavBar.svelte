<script>
	import { VeradiUrl } from '../url/VeradiUrl.svelte';
	import BaseNavBar from './BaseNavBar.svelte';

	export let whiteTextWhenTransparent = false;
	export let animateBackground = false;

	const items = [
		{
			text: '회사소개',
			href: VeradiUrl.hireIndex
		},
		{
			text: '채용안내',
			href: VeradiUrl.hireNotice
		},
		{
			text: '채용공고',
			href: '#'
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
	{animateBackground}
/>
