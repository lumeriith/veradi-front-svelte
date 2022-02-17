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
	const img = {
		team: '/svg/hire/team.svg'
	};

	export let title;
	export let recruitment;
</script>

<div style="position:absolute; text-align:center; margin-top:15px; width:100%">
  <Image
	class="center"
	src={img.team}
	style="display:inline-block; text-align:center; opacity:0.22; max-height:260px;"
/>
</div>

<Form class="py-5" style="background-color:#e1f5ff; font-weight:bold; ">
	<Row style="">
		<Col xs="1" />
		<Col xs="10" style="position:relative; ">
			<div class="py-3 d-none d-sm-block" />
			<span style="text-align:center; letter-spacing:-1px;">
				<h1>교육의 변화를 열망하는</h1>
				<h1>사람들이 모였다</h1>
			</span>
			<div class="py-3" />
			<Row>
				<Col xs="1" sm="2" md="3" lg="4" />
				<Col xs="10" sm="8" md="6" lg="4">
					<Card style="flex; gap:10px; border:none; background-color:#e1f5ff;">
						<Button>수학팀 소개보기</Button>
						<Button>수학팀 지원서류 다운로드</Button>
					</Card>
				</Col>
				<Col xs="1" sm="2" md="3" lg="4" />
				<div class="py-3 d-none d-sm-block" />
			</Row>
		</Col>
		<Col xs="1" />
	</Row>
</Form>
<Container class="py-5">
	<Row>
		<Col sm="1" />
		<Col sm="8" md="9">
			<Card style="background-color:#e1f5ff; align:center; box-shadow: 2px 2px 7px;">
				<Row class="py-5">
					<Col xs="1" sm="1" />
					<Col xs="10" sm="10">
						<Form class="py-3">
							<span style="text-align:center; word-spacing:-1px;">
								<h2>{title}</h2>
							</span>
							<p />
						</Form>
						<Form class="py-3">
							<h3>· 모집개요</h3>
							<div class="py-1" />
							<div style="font-size:20px; white-space:pre-line; word-spacing:-1px;">
								{recruitment}
							</div>
						</Form>
					</Col>
					<Col xs="1" sm="1" />
				</Row>
			</Card>
		</Col>
		<Row class="d-block d-sm-none py-3" />
		<Col sm="3" md="2" lg="2">
			<HireSideButton />
		</Col>
	</Row>
</Container>
