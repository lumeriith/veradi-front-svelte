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
</script>

<Form>
  <Row>
    <Button outline href="/introduction/math" style="border: 0; outline:0;">수학팀</Button>
    <Button outline href="/introduction/physics" style="border: 0; outline:0;">물리학팀</Button>
    <Button outline href="/introduction/chemistry" style="border: 0; outline:0;">화학팀</Button>
    <Button outline href="/introduction/biology" style="border: 0; outline:0;">생명과학팀</Button>
    <Button outline href="/introduction/earthscience" style="border: 0; outline:0;">지구과학팀</Button>
    <Button outline href="" style="border:0; outline:0;">사회탐구팀</Button>
  </Row>
</Form>