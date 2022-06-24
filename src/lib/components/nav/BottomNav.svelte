<script>
	import { Container } from 'sveltestrap';

	const navItems = [
		{ text: '팀 소개', href: '#' },
		{ text: '문제집', href: '#' },
		{ text: '학습/입시', href: '#' },
		{ text: 'QnA', href: '#' }
	];
</script>

<div class="tw-pt-8 md:tw-pt-12 tw-pb-12 md:tw-pb-16 tw-px-8 tw-flex tw-justify-center">
	<div class="tw-max-w-4xl tw-flex-1">
		<div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-3 md:tw-gap-40">
			<section class="tw-flex-1">
				<nav
					class="tw-flex md:tw-gap-x-4 tw-gap-y-2 tw-justify-between tw-whitespace-nowrap tw-flex-wrap"
				>
					{#each navItems as item}
						<a href={item.href}>{item.text}</a>
					{/each}
				</nav>
			</section>
			<section
				class="right-side tw-flex tw-flex-row tw-justify-end md:tw-flex-col tw-gap-4 tw-text-sm"
			>
				<a href="#">개인정보처리방침</a>
				<a href="#">이메일무단수집금지</a>
			</section>
		</div>
		<div class="tw-font-bold tw-mt-10 tw-mb-4">(주)베라디</div>
		<div class="tw-flex tw-gap-x-1 tw-gap-y-3 tw-flex-wrap tw-text-sm tw-max-w-2xl">
			<div>사업자 등록번호 : 666-87-01442</div>
			<div>| 대표 : 김민지</div>
			<div>| 주소 : 서울 강남구 논현로 553 3층</div>
			<div>| 통신판매번호 : 000-0000-0000</div>
			<div>| 신고기관명 : 000-0000-0000</div>
			<div class="tw-text-sm tw-w-full">COPYRIGHT VERADI. ALL RIGHT RESERVED.</div>
		</div>
	</div>
</div>

<style>
	a {
		color: #333333;
	}

	nav a {
		text-decoration: none;
		font-weight: bold;
	}
</style>
