<script>
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink } from "sveltestrap";

  export let item = {
    text: "",
    href: "",
    children: []
  };
</script>

{#if item.children}
<Dropdown nav inNavbar>
  <DropdownToggle nav>{item.text}</DropdownToggle>
  <DropdownMenu>
    {#each item.children as child}
    <DropdownItem href={child.href}>{child.text}</DropdownItem>
    {/each}
  </DropdownMenu>
</Dropdown>
{:else}
<NavItem>
  <NavLink href={item.href}>{item.text}</NavLink>
</NavItem>
{/if}
