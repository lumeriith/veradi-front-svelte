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
		Image,
		Alert
	} from 'sveltestrap/src';

	import HireThumbnail from '$lib/components/hire/HireThumbnail.svelte';
	import HireCard from '$lib/components/hire/HireCard.svelte';

	const img = {
		mainButton: '/svg/hire/mainButton.svg',
		mainTitle1: '/svg/hire/mainTitle1.svg',
		mainTitle2: '/svg/hire/mainTitle2.svg'
	};
</script>

<!----------------------------------------------------------------------------->
<Form style="background-color:#e1f5ff;" on:submit={(e) => e.preventDefault()}>
	<Row class="py-5">
		<Col sm="1" md="1" lg="1" xl="1" />
		<Col sm="10" md="10" lg="10" xl="10">
			<Container>
				<span style="font-size:30px; font-weight:bold; word-break:keep-all;">
					<div>교육의 내일을</div>
					<div>함께 만들어갈 인재</div>
				</span>
				<Row class="py-2" />
				<span style="font-size:17px; letter-spacing: -1px; word-break:keep-all;">
					<div>열린 태도와 신뢰를 바탕으로 서로를 존중하고</div>
					<div>협력하는 인재, 새로운 생각과 도전으로 함께 성장할 인재상을 기다립니다.</div>
				</span>
				<Row class="py-3" />
				<Button primary>베라디 1기 지원하기</Button>
			</Container>
		</Col>
		<Col sm="1" md="1" lg="1" xl="1" />
	</Row>
</Form>
<!----------------------------------------------------------------------------->
<Container class="py-5">
	<Row class="py-3">
		<Col sm="1" lg="1" />
		<Col sm="10" lg="10">
			<Container>
				<span style="font-size:25px; word-break:keep-all;">
					<h2>베라디는 당신의 꿈을 응원합니다.</h2>
				</span>
				<span style="font-size:20px; word-break:keep-all;">
					<h4>창의적 사고로 변화와 도전을 두려워하지 않는 열정적인 꿈</h4>
				</span>
			</Container>
			<Row>
				<HireThumbnail
					src="/img/test.png"
					title="컨텐츠 혁신"
					text="앞선 기술력과 정보력으로 확실하고 검증된 컨텐츠만을 개발합니다"
				/>
				<HireThumbnail
					src="/img/test.png"
					title="리더 양성"
					text="뛰어난 수준의 업무를 통해 세상의 변화에 기여할 리더를 양성합니다"
				/>
				<HireThumbnail
					src="/img/test.png"
					title="지식의 나눔"
					text="개인의 지식이 공공의 지식으로 확장되며 사회, 경제적 가치를 확보하고 지식의 재상산에 기여합니다"
				/>
			</Row>
		</Col>
		<Col sm="1" lg="1" />
	</Row>
	<Row class="pt-5">
		<Col xs="12" md="4" lg="4">
			<Row class="pb-4">
				<Col xs="2" sm="2" class="d-md-none" />
				<Col xs="8" sm="8" md="12">
					<Form style="">
						<Image fluid src="/img/test2.png" style="display:inline-block;" />
					</Form>
				</Col>
				<Col xs="2" sm="2" class="d-md-none" />
			</Row>
		</Col>
		<Col xs="12" md="8" lg="8">
			<Form>
				<Container>
					<span style="word-break:keep-all">
						<div class="py-2">
							베라디는 2019년 6월 (주)베라디 법인 설립 이후로 매년 200% 이상을 상회하는 놀라운
							성장률을 기록하며 수능 입시 교육 컨텐츠 패러다임을 변화시키고 있습니다.
						</div>
						<div class="py-2">
							우리의 성장 그래프가 그래왔듯, 수험생 여러분에게도 그 경험을 선사하고자, 밤낮없이
							치열하게 그러나 여느 20대들보다 즐겁게. 빛나는 청춘을 여기 이곳에서 우리는 함께
							만들어나가고 있습니다.
						</div>
						<div class="py-2">
							단일 법인으로는 최대 규모의 프리미엄 수능 입시 컨텐츠를 제공하고자 베라디는 지금 이
							순간도 성장을 멈추지 않습니다. 이러한 베라디의 끊임없는 변화와 성장은 베라디의
							구성원들이 아니었다면 불가능했을 것입니다.
						</div>
						<div class="py-2">
							이런 우리와 함께 빛나는 20대를 함께하고, 미래를 그려나가며 한 발 앞서갈 인재를
							찾습니다.
						</div>
					</span>
				</Container>
			</Form>
		</Col>
	</Row>
</Container>
<!----------------------------------------------------------------------------->
<Form style="background-color:#e1f5ff">
	<Container class="py-5">
		<Row class="pb-5">
			<Col xs="1" />
			<Col xs="10">
				<span style="word-break:keep-all;">
					<h3>당신의 역량을 펼치세요</h3>
					<h5 style="color:gray;">베라디에서, 뜨겁게 노력하고 힘차게 비상합시다</h5>
				</span>
			</Col>
			<Col xs="1" />
		</Row>
		<Row>
			<Image src="/img/test2.png" style="width:50%;" />
		</Row>
	</Container>
</Form>
<!------------------------------------------------------------------------------>
<Container class="py-4">
	<Row>
		<Col xs="1" sm="1" md="2" />
		<Col xs="10" sm="10" md="8">
			<Form class="py-4">
				<span>
					<h4 style="color:gray">미래를 이끌어갈 소중한 당신께</h4>
					<h2>베라디는 아낌없이 지원합니다</h2>
				</span>
			</Form>
			<Row class="py-2">
				<HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
			</Row>
		</Col>
		<Col xs="1" sm="1" md="2" />
	</Row>
</Container>
