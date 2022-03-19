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
	} from 'sveltestrap/src';

	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
</script>

<Form>
	<Row>
		<Button outline href={VeradiUrl.introMath} style="border: 0; outline:0;">수학팀</Button>
		<Button outline href={VeradiUrl.introPhysics} style="border: 0; outline:0;">물리학팀</Button>
		<Button outline href={VeradiUrl.introChemistry} style="border: 0; outline:0;">화학팀</Button>
		<Button outline href={VeradiUrl.introBiology} style="border: 0; outline:0;">생명과학팀</Button>
		<Button outline href={VeradiUrl.introEarthscience} style="border: 0; outline:0;"
			>지구과학팀</Button
		>
		<Button outline href="" style="border:0; outline:0;">사회탐구팀</Button>
	</Row>
</Form>
