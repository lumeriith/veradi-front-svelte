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
	import { SubjectContents } from './constants/SubjectContents.svelte';
</script>

{#each SubjectContents as subject}
	<Col sm="6" class="py-4 d-none d-sm-block">
		<div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s; margin-left:10px;">
			<Image src={subject.img} class="py-2" style="width:100px;" />
			<h3 class="py-1" style="color:gray;"><u>{subject.title}</u></h3>
			<h5 style="margin-right:25px; ">{subject.text}</h5>
			<Button class="pb-2" href={subject.src}>지원공고보기</Button>
		</div>
	</Col>
	<Col xs="12" class="py-5 d-block d-sm-none" >
		<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
			<div style=" text-align:left; margin-left:15px;">
				<Image src={subject.img} class="py-2" style="width:120px; display:inline-block;" />
			</div>
			<div style="margin-left:10px;">
				<h1 class="py-1" style="color:gray;"><u>{subject.title}</u></h1>
				<h4 style="margin-right:30px; word-break:keep-all; letter-spacing:-1px;">{subject.text}</h4>
				<Button class="pb-2" href={subject.src}>지원공고보기</Button>
			</div>
		</div>
	</Col>
{/each}
