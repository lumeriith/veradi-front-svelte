<script>
	import { animHeading } from '$lib/utils/scrollEffects';

	export let info = { img: '', title: '', content: '' };
	let _class = '';
	export let style = '';
	export { _class as class };
</script>

<div class="md:tw-flex-1 tw-max-w-[230px] {_class} tw-flex tw-flex-col" {style}>
	<img class="tw-w-14 tw-ml-auto" src={info.img} alt="" />
	<div class="tw-bg-[#7fc4fd] tw-h-1 tw-my-2" />
	<header class="tw-font-bold tw-text-xl tw-mb-3">{info.title}</header>
	<main class="tw-text-lg" style="line-height: 170%;">{info.content}</main>
</div>
