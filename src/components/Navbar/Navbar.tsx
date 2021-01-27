import React from 'react';
import styled from 'styled-components'
import NavbarItem from "../../molecules/NavbarItem";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Navbar = () => (
  <StyledNavbar>
    <NavbarItem title="films" to="/films"/>
    <NavbarItem title="people" to="/characters"/>
    <NavbarItem title="starships" to="/starships"/>
    <NavbarItem title="planets" to="/planets"/>
    <NavbarItem title="vehicles" to="/vehicles"/>
  </StyledNavbar>
)

export default Navbar;
