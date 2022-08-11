<script>
	import PostListItem from './PostListItem.svelte';

	export let posts = [
		{
			title: '여러분들에게 꼭 하고싶은 이야기를 담은 정시 합격 수기',
			content:
				'오답은 단순히 틀린 문제들에 대해서만 하는 것이 아닙니다. 저 같은 경우, 기출이나 N제, 또는 실모를 풀 때 문제를 틀리지 않았더라도 아리송하거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 무조건 그 선치나 문제에 체크표시를 했습니다.',
			thumb: '',
			author: '김영재',
			authorTitle: '서울대 기계공학과',
			tags: undefined,
			postDate: new Date(),
			views: 12,
			favorites: 20
		}
	];

	export let selectedTag = '';
</script>

{#each posts as { title, content, thumb, author, authorTitle, tags, postDate, views, favorites, href }}
	<PostListItem
		{title}
		{content}
		{thumb}
		{author}
		{authorTitle}
		{tags}
		bind:selectedTag
		{postDate}
		{views}
		{favorites}
		{href}
	/>
{/each}
