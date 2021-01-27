import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';
import background_about from '../background_about.jpg';

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 1200px;
  background-image: url('${background_about}');
  background-size: cover;
  background-position-x: center;
  padding: 30px;

  .img {
    display: block;
    max-width: 303px;
    max-height: 120px;
    margin: auto 170px auto;
  }

  .text {
    font-size: 30px;
    max-width: 500px;
    line-height: 50px;
    color: #999;
  }

  @media (max-width: 1116px) {
    .img {
      margin: auto 170px 0;
      max-width: 250px;
      height: 100px;
    }

    .text {
      font-size: 25px;
      text-align: center;
    }
  }
`;

const About = () => (
  <StyledAbout>
    <img src={logo} alt="logo" className="img" />
    <div className="text">
      Star wars app - it's an application for showing information about films, characters, planets,
      starships, vehicles and information about specific planet, film and so on.
    </div>
  </StyledAbout>
);

export default About;
