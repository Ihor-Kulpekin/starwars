import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import Navbar from 'components/Navbar/Navbar';
import { NavLink } from "react-router-dom";

const WrapperHeader = styled.div`
  margin: 0 auto 50px auto;
  max-width: 1280px;
  padding: 10px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  .img {
    display: block;
    max-width: 203px;
    max-height: 88px;
    margin: 40px auto;
    background-size: contain;
    object-fit: cover;
  }
  
  .img_wrapper {
    margin: 0 auto;
  }
`;

const HeaderDesktop = () => {
  return (
    <WrapperHeader>
      <HeaderTop>
        <div className="img_wrapper">
          <NavLink to="/">
            <img src={logo} alt="logo" className="img" />
          </NavLink>
        </div>
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
