import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import Navbar from '../Navbar/Navbar';
import { Wrapper } from '../../styled-components/styled-components';
import { NavLink } from "react-router-dom";

const WrapperHeader = styled(Wrapper)`
  margin-bottom: 50px;
  padding: 10px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  .img {
    display: block;
    max-width: 203px;
    max-height: 88px;
    margin: 40px auto;
    background-size: contain;
  }
`;

const HeaderDesktop = () => {
  return (
    <WrapperHeader>
      <HeaderTop>
        <img src={logo} alt="logo" className="img" />
        <div>
          <NavLink to="/login">
            Log in
          </NavLink>
        </div>
      </HeaderTop>
      <Navbar />
    </WrapperHeader>
  );
};

export default HeaderDesktop;
