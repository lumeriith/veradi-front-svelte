<script>
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap/src';
	let isOpen = false;

	const toggle = () => {
		isOpen = !isOpen;
		updateOpacity();
	};

	let opacity = 0;
	function updateOpacity() {
		opacity = isOpen ? 1.0 : Math.min(document.documentElement.scrollTop / 200, 1.0);
	}

	function handleResize() {
		if (window.innerWidth > 767) {
			isOpen = false;
			updateOpacity();
		}
	}
</script>

<svelte:window on:scroll={updateOpacity} on:resize={handleResize} />

<div style="height: 64.5px;" />
<Navbar
	light
	expand="md"
	class="top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg"
	style="transition: background 0.2s, box-shadow 0.2s; background: rgba(255,255,255,{opacity}); position: fixed; box-shadow: 0 2px 4px 0 rgba(0,0,0, {opacity * 0.2});"
>
	<NavbarBrand
		href="/"
		class="text-blueGray-700 text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase"
		>Veradi
	</NavbarBrand>
	<NavbarToggler on:click={toggle} />
	<Collapse {isOpen} navbar expand="md">
		<Nav class="ms-auto" navbar>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>About</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>베라디 소개</DropdownItem>
					<DropdownItem href="/about/veradi/vision">Vision</DropdownItem>
					<DropdownItem href="/about/veradi/philosophy">철학</DropdownItem>
					<DropdownItem href="/about/veradi/origin">연혁</DropdownItem>
					<DropdownItem divider />
					<DropdownItem header>구성원 소개</DropdownItem>
					<DropdownItem href="/about/team/management">경영지원부</DropdownItem>
					<DropdownItem href="/about/team/technology">기술개발부</DropdownItem>
					<DropdownItem href="/about/team/design">디자인팀</DropdownItem>
					<DropdownItem href="/about/team/math">수학팀</DropdownItem>
					<DropdownItem href="/about/team/science">과학탐구</DropdownItem>
					<DropdownItem divider />
					<DropdownItem header>Abiltiy & Strength</DropdownItem>
					<DropdownItem href="/about/as/contents">컨텐츠</DropdownItem>
					<DropdownItem href="/about/as/service">서비스</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Contents</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>[2022] 랠리 모의고사</DropdownItem>
					<DropdownItem href="/contents/title">컨텐츠 소개 대문</DropdownItem>
					<DropdownItem href="/contents/guide">컨텐츠 활용 guide</DropdownItem>
					<DropdownItem href="/contents/answer">정오 안내</DropdownItem>
					<DropdownItem href="/contents/qna">Q&A 게시판</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Community</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>최상위권 선배들의 비법 노트</DropdownItem>
					<DropdownItem href="/community/knowhow/method">의대생 공부법</DropdownItem>
					<DropdownItem href="/community/knowhow/history">합격 수기 모음</DropdownItem>
					<DropdownItem href="/community/knowhow/contents">공부자극 컨텐츠</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Program</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Re-Challenge with VERADI</DropdownItem>
					<DropdownItem href="/program/rechallenge/introduction">사업 소개</DropdownItem>
					<DropdownItem href="/program/rechallenge/recruitment">모집 요강</DropdownItem>
					<DropdownItem href="/program/rechallenge/application">신청 페이지</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Contact</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Contents Director 지원</DropdownItem>
					<DropdownItem href="/contact/director/recruitment">모집 요강</DropdownItem>
					<DropdownItem href="/contact/director/application">입사 신청 페이지</DropdownItem>
					<DropdownItem divider />
					<DropdownItem header>Contents Contest</DropdownItem>
					<DropdownItem href="/contact/contest/introduction">대회 소개</DropdownItem>
					<DropdownItem href="/contact/contest/join">참가 페이지</DropdownItem>
					<DropdownItem divider />
					<DropdownItem header>Contents 제보</DropdownItem>
					<DropdownItem href="/contact/tip/error">오류/오타 제보</DropdownItem>
					<DropdownItem href="/contact/tip/duplicate">표절/복제 제보</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<NavItem>
				<NavLink href="/login">Login</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/">Logout</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
