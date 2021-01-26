import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
  font-size: 35px;
  color: white;
  text-align: center;
  text-transform: uppercase;
`

const Heading = ({title}:{title: string}) => (
  <StyledHeading>{title}</StyledHeading>
)

export default Heading;
