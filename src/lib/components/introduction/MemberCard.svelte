<script>
	import {
		Alert,
		Button,
		Container,
		Col,
		Row,
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Input,
		Form,
		FormGroup,
		Image
	} from 'sveltestrap';
	export let name, rank, education, team;
	export let important = false;

	import circlesIcon from '$lib/static/img/introduction/circlesIcon.png';
	import circles2Icon from '$lib/static/img/introduction/circles2Icon.png';
</script>

<div class="tw-px-2 sm:tw-px-6 tw-flex tw-flex-col tw-gap-2 tw-w-full">
	<div class="tw-relative tw-font-semibold tw-text-xl">
		<img
			class="tw-absolute -tw-left-7 -tw-top-1 -tw-z-10 tw-w-9"
			src={important ? circles2Icon : circlesIcon}
			alt=""
		/>{name}
	</div>
	<div class="tw-text-md tw-font-semibold">
		{team}&nbsp;{rank}
	</div>
	<div class="tw-text-sm">
		{education}
	</div>
</div>
