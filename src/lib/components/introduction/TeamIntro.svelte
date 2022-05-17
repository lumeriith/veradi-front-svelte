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
	export let title;
	export let subject;
	export let introduction = [];

	$: isIntroArray = !!introduction.push;
</script>

<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
	<Row class="tw-max-w-2xl">
		<h2 class="pt-5 pb-3">
			<b>
				<span>
					{title}
				</span>
				<span style="color:#3c9fcb;">
					{subject}
				</span>
			</b>
		</h2>
		<div class="py-1" style="word-break: keep-all;">
			<span style="color:#333333;">
				{#if isIntroArray}
					{#each introduction as intro}
						<p>{intro}</p>
					{/each}
				{:else}
					{introduction}
				{/if}
			</span>
		</div>
	</Row>
</div>
