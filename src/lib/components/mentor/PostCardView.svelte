<script>
	import PostCardItem from './PostCardItem.svelte';

	export let posts = [];
</script>

<div class="tw-flex tw-flex-wrap tw-justify-between tw-py-6 tw-gap-y-5">
	{#each posts as { thumb, category, title, author, authorTitle, content, favorites, views, postDate }}
		<PostCardItem
			{thumb}
			{category}
			{title}
			{author}
			{authorTitle}
			{content}
			{favorites}
			{views}
			{postDate}
		/>
	{/each}
</div>
