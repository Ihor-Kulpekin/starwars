import React from 'react'
import { NavLink } from 'react-router-dom';

const NavbarItem = ({title, to}:{title: string, to: string}) => (
  <NavLink to={to}>
    {title}
  </NavLink>
)

export default NavbarItem;
