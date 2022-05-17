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

	import circlesIcon from '$lib/static/img/introduction/circlesIcon.png';
</script>

<div class="tw-px-6 tw-flex tw-flex-col tw-gap-2 tw-w-64">
	<div class="tw-relative tw-font-semibold tw-text-xl">
		<img class="tw-absolute -tw-left-7 -tw-top-1 -tw-z-10 tw-w-9" src={circlesIcon} alt="" />{name}
	</div>
	<div class="tw-text-md tw-font-semibold">
		{team}&nbsp;{rank}
	</div>
	<div class="tw-text-sm">
		{education}
	</div>
</div>
