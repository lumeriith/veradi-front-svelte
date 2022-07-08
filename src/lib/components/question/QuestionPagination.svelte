<script>
	import { Pagination, PaginationItem, PaginationLink } from 'sveltestrap';
</script>

<div
	class="tw-flex tw-justify-center question-pagination tw-select-none"
	style="transform: scale(1)"
>
	<Pagination>
		<PaginationItem disabled>
			<PaginationLink previous href="#" />
		</PaginationItem>
		<PaginationItem active>
			<PaginationLink href="#">1</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">2</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">3</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">4</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">5</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink next href="#" />
		</PaginationItem>
	</Pagination>
</div>

<style>
	.question-pagination :global(.page-link) {
		background-color: transparent !important;
		border: 0;
		border-radius: 9999px;
		color: inherit;
		font-size: 18px;
		box-shadow: none;
	}

	.question-pagination :global(.page-item) {
		transition: transform 0.1s;
	}

	.question-pagination :global(.page-item:hover:not(.disabled):not(.active)) {
		transform: scale(1.3);
	}

	.question-pagination :global(.page-item:active:not(.disabled):not(.active)) {
		transform: scale(0.8);
	}

	.question-pagination :global(.page-item:first-child .page-link) {
		font-size: 30px;
		padding: 0 6px;
		transform: translateY(-5px);
	}

	.question-pagination :global(.page-item:last-child .page-link) {
		font-size: 30px;
		padding: 0 6px;
		transform: translateY(-5px);
	}

	.question-pagination :global(.active .page-link) {
		color: var(--book-qna-primary);
	}

	.question-pagination :global(.disabled .page-link) {
		opacity: 50%;
	}
</style>
