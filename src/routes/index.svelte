<script>
	const img = {
		mainPhoto : '/img/main/mainPhoto.png',
  };
	import { Container, Col, Row, Image } from 'sveltestrap/src';


</script>

<Container>
  <Row class="py-5">
    <Col sm="1" md="1"/>
    <Col sm="6" md="6" style="vertical-align:middle; display:table;">
      <div style="table-cell;">
      <h1 class="py-3" style="color:#3c89cb">VERADI</h1>
      <h4>노하우와 기술력의 집결체인 프리미엄 컨텐츠로</h4>
      <h4>수험생에게 새로운 시각과</h4>
      <h4>승리로 가는 가장 빠른 길을 선사합니다.</h4>
    </div>
    </Col>
    <Col sm="5" md="5">
      <Image src={img.mainPhoto} />
    </Col>
    <Col sm="1"/>
  </Row>
</Container>
