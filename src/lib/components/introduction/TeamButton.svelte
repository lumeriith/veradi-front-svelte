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

	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
</script>

<Form>
	<Row style="display:flex; gap:10px;">
		<Button
			outline
			href={VeradiUrl.introMath}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">수학팀</Button
		>
		<Button
			outline
			href={VeradiUrl.introSocialculture}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">사회문화팀</Button
		>
		<Button
			outline
			href={VeradiUrl.introLifeethics}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">생활과윤리팀</Button
		>
		<Button
			outline
			href={VeradiUrl.introPhysics}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">물리학팀</Button
		>
		<Button
			outline
			href={VeradiUrl.introChemistry}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">화학팀</Button
		>
		<Button
			outline
			href={VeradiUrl.introBiology}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">생명과학팀</Button
		>
		<Button
			outline
			href={VeradiUrl.introEarthscience}
			style="border: 0; border-color:#99dbff; border-radius: 50px;">지구과학팀</Button
		>
	</Row>
</Form>
