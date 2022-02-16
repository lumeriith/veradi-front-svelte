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
		Image,
		TabContent
	} from 'sveltestrap/src';

  import HireSideButton from '$lib/components/hire/HireSideButton.svelte';

  export let subjectInfo;
</script>

<Container class="py-5">
	<Row>
		<Col sm="1" />
		<Col sm="8">
			<Card style="background-color:#e1f5ff; align:center; box-shadow: 2px 2px 7px;">
				<Row class="py-5">
					<Col sm="1" />
					<Col sm="10">
						<Form>
							
              <span style="text-align:center;">
								<h1>{subjectInfo.title}</h1>
							</span>
              <p style="py-2"/>
              <div>

              </div>
						</Form>
					</Col>
					<Col sm="1" />
				</Row>
			</Card>
		</Col>
		<Col sm="3" md="3" lg="2">
        <HireSideButton />
		</Col>
	</Row>
</Container>