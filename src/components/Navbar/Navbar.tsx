import React from 'react';
import styled from 'styled-components'
import NavbarItem from "../../molecules/NavbarItem";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Navbar = () => (
  <StyledNavbar>
    <NavbarItem title="films"/>
    <NavbarItem title="people"/>
    <NavbarItem title="starships"/>
    <NavbarItem title="planets"/>
    <NavbarItem title="vehicles"/>
  </StyledNavbar>
)

export default Navbar;
