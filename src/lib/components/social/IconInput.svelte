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
  export let indent = 40;
</script>

<Row class="color:lightgray;">{title}</Row>
<Row class="pb-3">
	<Input
		type={type}
		name={name}
		id={inputId}
		placeholder={placeholder}
    bind:value={value}
		style="
		  background-image: url({iconUrl}) ;
		  background-size: {size}px;
		  background-position: {position}px;
		  background-repeat: no-repeat;
		  text-align: left;
		  text-indent: {indent}px;
  "	/>
</Row>
