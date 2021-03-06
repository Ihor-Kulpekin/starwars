import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'styled-components/styled-components';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import useMedia from 'utils/useMedia';

const WrapperHeader = styled(Wrapper)`
  margin-bottom: 50px;
  padding: 10px;
  text-align: center
`;

const Header = () => {
  const { mobile } = useMedia();

  if (mobile) {
    return (
      <WrapperHeader>
        <HeaderMobile />
      </WrapperHeader>
    );
  }

  return (
    <WrapperHeader>
      <HeaderDesktop />
    </WrapperHeader>
  );
};

export default Header;
