<script>
	import { Button, Container, Col, Image } from 'sveltestrap';
	import { SubjectContents } from './constants/SubjectContents.svelte';
</script>

{#each SubjectContents as subject}
	<Col xxl="2" class="py-4 d-none d-xxl-block">
		<Button outline href={subject.src} style="border:0; text-align:center;">
			<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
				<Container style="text-align:center;">
					<Image src={subject.img} class="py-2" style="width:100px; padding:0 0 0 0;" />
				</Container>
				<h5 class="py-1" style="color:gray; text-align:center;">{subject.title}</h5>
			</div>
		</Button>
	</Col>
	<Col md="3" class="py-4 d-none d-lg-block d-xxl-none">
		<Button outline href={subject.src} style="border:0; text-align:center; ">
			<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
				<Container style="text-align:center;">
					<Image src={subject.img} class="py-2" style="width:80px; padding:0 0 0 0;" />
				</Container>
				<h4 class="py-1" style="color:gray;">{subject.title}</h4>
			</div>
		</Button>
	</Col>
	<Col sm="4" class="py-4 d-none d-sm-block d-lg-none">
		<Button outline href={subject.src} style="border:0; text-align:center;">
			<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
				<Container style="text-align:center;">
					<Image src={subject.img} class="py-2" style="width:80px; padding:0 0 0 0;" />
				</Container>
				<h4 class="py-1" style="color:gray;">{subject.title}</h4>
			</div>
		</Button>
	</Col>
	<Col xs="6" class="py-4 d-block d-sm-none">
		<Button outline href={subject.src} style="border:0; padding:0 0 0 0;">
			<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
				<Container style="text-align:center;">
					<Image src={subject.img} class="py-2" style="width:80px; padding:0 0 0 0;" />
				</Container>
				<h4 class="py-1" style="color:gray; letter-spacing:-3px;">{subject.title}</h4>
			</div>
		</Button>
	</Col>
{/each}
