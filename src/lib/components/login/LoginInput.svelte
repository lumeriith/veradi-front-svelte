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
	} from 'sveltestrap/src';

	export let title;
	export let type;
	export let name;
	export let inputId;
	export let placeholder;
	export let iconUrl;
	export let value;
	export let size = 30;
	export let position = 10;
	export let indent = 30;
</script>

<div class="login-input-container">
	<div class="tw-text-gray-400 tw-text-sm tw-mb-1.5">{title}</div>
	<Input
		class="login-input"
		{type}
		{name}
		id={inputId}
		{placeholder}
		bind:value
		style="
		  background-image: url({iconUrl}) ;
		  background-size: {size}px;
		  background-position: {position}px;
		  background-repeat: no-repeat;
		  text-align: left;
		  text-indent: {indent}px;
  "
	/>
</div>

<style>
	.login-input-container :global(input) {
		background-color: #f3f3f3;
		border: 0;
		font-size: 0.85rem;
		height: 40px;
	}
</style>
