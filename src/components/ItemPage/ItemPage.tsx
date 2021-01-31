import React from 'react';

import Heading from 'molecules/Heading';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

const ItemPage = ({ srcImg, title }: { srcImg: string; title: string }) => (
  <Wrapper>
    <Heading title={title} />
    <img src={srcImg} alt="photo" />
  </Wrapper>
);

export default ItemPage;
