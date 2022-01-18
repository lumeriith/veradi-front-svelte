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
        DropdownItem,
    } from 'sveltestrap/src';
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<Navbar color="light" light expand="md" class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-white shadow">
    <NavbarBrand href="/" class="text-blueGray-700 text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase">Veradi</NavbarBrand>
    <NavbarToggler on:click={toggle} />
    <Collapse {isOpen} navbar expand="md">
      <Nav class="ms-auto" navbar>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>About</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>베라디 소개</DropdownItem>
            <DropdownItem>Vision</DropdownItem>
            <DropdownItem>철학</DropdownItem>
            <DropdownItem>연혁</DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>구성원 소개</DropdownItem>
            <DropdownItem>경영지원부</DropdownItem>
            <DropdownItem>기술개발부</DropdownItem>
            <DropdownItem>디자인팀</DropdownItem>
            <DropdownItem>수학팀</DropdownItem>
            <DropdownItem>과학탐구</DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>Abiltiy & Strength</DropdownItem>
            <DropdownItem>컨텐츠</DropdownItem>
            <DropdownItem>서비스</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Contents</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Community</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Program</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Contact</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
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