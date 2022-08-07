<script>
	import { shortDate } from '$lib/utils/dateToString';
	import MultiClamp from '../MultiClamp.svelte';
	export let title = '여러분들에게 꼭 하고싶은 이야기를 담은 정시 합격 수기';
	export let content =
		'오답은 단순히 틀린 문제들에 대해서만 하는 것이 아닙니다. 저 같은 경우, 기출이나 N제, 또는 실모를 풀 때 문제를 틀리지 않았더라도 아리송하거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 무조건 그 선치나 문제에 체크표시를 했습니다.';
	export let thumb = testImg;
	export let author = undefined;
	export let authorTitle = undefined;
	export let tags = undefined;
	export let selectedTag = undefined;
	export let postDate = new Date();
	export let views = 12;
	export let favorites = 20;
</script>

<div
	class="post tw-flex tw-gap-3.5 tw-p-4 md:tw-gap-5 md:tw-p-6 tw-items-center"
	style="border-bottom: 1px solid #e4e4e4"
>
	<img
		src={thumb}
		alt="{title} 이미지"
		class="tw-object-contain tw-h-24 tw-w-24 tw-bg-[#0000000a]"
		style="border: 1px solid #e5e5e5"
	/>
	<a href="#!">
		<header class="tw-mb-2 tw-font-bold tw-text-[1.1rem]">{title}</header>
		<main class="tw-mb-2 md:tw-mb-4 tw-text-sm tw-text-[#8b9193]">
			<MultiClamp clamp={2}>{content}</MultiClamp>
		</main>
		<div class="tw-flex tw-gap-x-2 tw-items-center tw-flex-wrap tw-whitespace-nowrap">
			{#if author}<div class="tw-font-bold">{author}</div>{/if}
			{#if authorTitle}<div class="tw-font-semibold">{authorTitle}</div>{/if}
			{#if tags}<div style="flex-basis: 100%" class="tw-h-1" />{/if}
			<div class="tw-text-sm tw-text-[#a1a1a1]">{shortDate(postDate)}</div>
			<div class="tw-text-sm tw-text-[#a1a1a1]">조회 {views}</div>
			<div class="tw-text-sm tw-text-[#a1a1a1]">
				스크랩 <span class="tw-text-[#5bb3ff]">{favorites}</span>
			</div>
			{#if tags}
				<div class="tw-ml-8 tw-flex tw-gap-2">
					{#each tags as t}
						<button
							class="{t === selectedTag ? 'active' : ''} tag tw-text-sm tw-py-1 tw-px-3"
							on:click|stopPropagation={() => (selectedTag = t)}
						>
							#{t}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</a>
</div>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover header,
	a:hover main {
		text-decoration: underline;
	}

	.post {
		transition: background 0.1s;
	}

	.post:hover {
		background-color: #00000004;
	}

	.tag {
		box-shadow: inset 0 0 0 1px #d4d4d4;
		border-radius: 9999px;
		color: #777777;
	}

	.tag:hover {
		background-color: white;
	}

	.tag.active {
		background-color: #ddf3ff;
		color: #3c9fcb;
		box-shadow: none;
	}
</style>
