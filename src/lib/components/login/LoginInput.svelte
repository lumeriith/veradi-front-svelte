<script>
	import {
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

	export let title;
	export let type;
	export let name;
	export let inputId;
	export let placeholder;
	export let value;
</script>

<div class="login-input-container">
	<div class="tw-text-sm tw-mb-1.5">{title}</div>
	<Input class="login-input" {type} {name} id={inputId} {placeholder} bind:value />
</div>

<style>
	.login-input-container :global(input) {
		background-color: white;
		border: 0;
		border-bottom: 1px solid #ddd;
		font-size: 0.85rem;
		height: 40px;
		border-radius: 0;
	}

	.login-input-container :global(input):focus {
		background-color: #f3f3f3;
		box-shadow: none;
	}
</style>
